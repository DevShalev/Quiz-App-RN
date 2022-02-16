import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import React , {useState,useEffect} from 'react';
import QuestionItem from './QuestionItem';
import Endgame from './Endgame';
import Startscreen from './Startscreen';

export default function App() {
  

  let tempQuestionsArr = [];
  
  const [questions,setQuestions] = useState([]);
  const [nextQuestion,setNextQuestion] = useState(0);
  const [currentQuestion,setCurrentQuestion] = useState(0);

    


  const data_request =async()=>{
    const url = 'https://opentdb.com/api.php?amount=20&category=27';
    const response = await fetch(url , {method: 'GET'});
    const response_data = await response.json();
    
    let questionId=0;
    console.log("data reset")
    response_data.results.forEach(question => {

      let answers= [];
      
      const correct_answer = { title:question.correct_answer.replace(/&quot;/g, '"').replace(/&rsquo;/g, "'"), isCorrect: true };
      answers.push(correct_answer);
      
      question.incorrect_answers.forEach(item => {
        const incorrect_answer = { title:item.replace(/&quot;/g, '"').replace(/&rsquo;/g, "'") , isCorrect: false };
      answers.push(incorrect_answer);
      })


      const formatted_question = {
        id: questionId++,
        title: question.question.replace(/&quot;/g, '"').replace(/&rsquo;/g, "'"),
        type: question.type,
        category: question.category,
        difficulty: question.difficulty,
        answer: shuffle(answers)
      }

      tempQuestionsArr.push(formatted_question);
     })

    console.log(JSON.stringify(tempQuestionsArr));
    setTimeout(() =>{
      setQuestions(tempQuestionsArr);
    },3000)
    

  }

  useEffect(()=>{data_request()},[])

  
  //counting right answers
  const [correct,setCorrect]=useState(0);
  const [answered,setAnswered]=useState(0);
  const [numberq,setnumberq]=useState(0);
  


    const shuffle = (arr) =>{
      let currentIndex = arr.length , randomIndex;
      while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]]
      }
      return arr;
    }



    // const onNextQuestion = (props) => {
    //   let number = currentQuestion;
    //   number++;
    //   setCurrentQuestion(number);
    //   let nextQuest = questions[currentQuestion].id;
    //   setNextQuestion(nextQuest)

    // }


    const onNextQuestion = () => {
      let number = currentQuestion;
      if(number < 20){
        number++;
        setnumberq(number)
        console.log(numberq)
        setCurrentQuestion(number);
        let nextQuest = questions[currentQuestion].id;
        setNextQuestion(nextQuest);
      }
    }



    const onAnswer = (answer) =>{
      // console.log(JSON.stringify(answer));
      setAnswered(answered+1)
      console.log("answered : " + answered )
      if(answer.isCorrect){
        setCorrect(correct+1);
        
        console.log("correct: "+correct)
      }
      
      
    }

    



    const questionsUI = questions.map((question , index) =>{
      if(nextQuestion == question.id){
        return <QuestionItem 
         questionItem={question}
         key={index}
         onNextQuestion={onNextQuestion}
         onAnswer={onAnswer}
         

         />
      }
    })

    const [flag,setFlag]=useState(false);


    const reset =()=>{
      setnumberq(0);
      setAnswered(0);
      setNextQuestion(0);
      setCurrentQuestion(0);
      setQuestions([]);
      data_request();
  }
  const startGame=(start)=>{
    setFlag(start)
    
  }



  
  return (
    <View style={styles.container}>
      { 
      numberq >= 20 || answered >= 21  ?  (

        <Endgame reset={reset} startGame={startGame} correct={correct}/>

        ) : (
        questions.length > 0 ? (
          
          
            flag ? (questionsUI) : (<Startscreen data_request={data_request} startGame={startGame} />)
          ) 
        : (
          <View style={{flex:1,width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:28,color:'#40F99B',padding:20,fontWeight:'bold'}}>Please Wait While We Loading...</Text>
          <ActivityIndicator size={100} color='#40F99B' />
          </View>
        )
      
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20A39E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
