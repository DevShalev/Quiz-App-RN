import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React , {useState,useEffect} from 'react';


const QuestionItem = props => {

    const [countBack,setCountback]=useState(30)

    //passing question twice sometime.
    const time =()=>{ 
        setTimeout(()=>{
                if(countBack === 0){
                setCountback(5)
                props.onNextQuestion(props.questionItem.id);
            }
            else{
            setCountback(countBack-1);
            }
    },1000)
    }


    return (
        <View style={styles.container}>
            
            
            <View style={styles.containerQ}>
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}> דרגת קושי : {props.questionItem.difficulty}                  שאלה מס:{props.questionItem.id}/19</Text>
            <Text style={styles.textQ}>שאלה :{"\n"}{props.questionItem.title}</Text>
            </View>
            
            
            <View style={styles.containerBtn}>
            {
                props.questionItem.answer.map((answer,index)=>(
                    <TouchableOpacity style={styles.btn} key={index} onPress={()=>{
                        
                        props.onNextQuestion(props.questionItem.id);
                        props.onAnswer(answer);
                        

                    }}>
                        <Text style={{ fontSize:22,fontWeight:'bold',color:'#000000'}}>{answer.title}</Text>
                    </TouchableOpacity>
                ))
            }
            </View>
            
            
            
            
            <View style={styles.time}><Text style={{...styles.textQ,fontSize:50,fontStyle:'italic'}}>
            {
                 time()
            }
            Time : {countBack}</Text></View>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1

    },
    containerQ:{
        padding:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        backgroundColor:'#39393A',
        minWidth:'100%',minHeight:'25%',
        borderBottomRightRadius:140,
        borderBottomLeftRadius:140,
    },
    textQ:{
        fontSize:22,fontWeight:'bold',color:'#E6E6E6'
    },
    containerBtn:{
        minHeight:'50%',minWidth:'90%',
        justifyContent:'space-evenly', //any thing else will bug the app in diffrent phones\tablets.
    },
    btn:{
        minWidth:'50%',maxWidth:'100%',
        
        marginHorizontal:'10%',
        padding:12,
        backgroundColor: '#fff',
        borderRadius:10,
        marginVertical:12,
        shadowColor:'#000000',
        shadowOpacity:0.1,
        shadowOffset:{
            width:0,height:3
        },
        shadowRadius:2,
        elevation:10,
        
        alignItems: 'center',
    },

    time:{
        minHeight:'25%',minWidth:'100%',
        padding:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#39393A',
        borderWidth:1,
        borderTopRightRadius:140,
        borderTopLeftRadius:140,
        
    },
    
});

export default QuestionItem;