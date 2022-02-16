import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import React , {useState,useEffect} from 'react';

    let winColor='#33cc00';
   
const Endgame = props => {
    
    return(
        <View style={styles.container}>

            <View style={styles.header}>
            <Text style={styles.texth1}>
            Welcome To The Quiz Game
            </Text>
            <Image source={require('./assets/logo.png')} style={{margin:10,width:'11%',height:'150%',resizeMode:'contain',marginHorizontal:10,}} />
            </View>

            <View style={styles.results}>
            <Text style={styles.textR}>End-GAME{"\n\n"}correct : {props.correct}</Text>
            <Text style={styles.textW}>{"\n"}Wrong : {props.correct-20}</Text>
            {   
                props.correct > 10 ? (<Text style={{...styles.textR,fontSize:40}}>Won!</Text>):(<Text style={{...styles.textW,fontSize:70}}>Lose!</Text>)
            }
            
            </View>
            <TouchableOpacity style={styles.Rebtn} onPress={
                ()=>{
                    props.startGame(false);
                    props.reset();
                    
                }
            }><Text style={styles.textrebtn}>Restart</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      minWidth:'100%',minHeight:'100%'
    },
    textR:{
        fontSize:28
        ,color:'#33cc00',
        
    },
    textW:{
        fontSize:28
        ,color:'#bb3311'
    },
    results:{
        flex:1,
        maxHeight:'50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:500,marginVertical:'30%',
        backgroundColor:'#fff',
        shadowColor:'#000000' ,
        shadowOpacity:0.1,
        shadowOffset:{
            width:0,height:3
        },
        shadowRadius:2,
        elevation:15,

    }
    
    ,
    header:{
    flexDirection:'row-reverse',
    paddingVertical:30,
    minWidth:'100%',minHeight:'10%',maxHeight:'15%',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor:'#CCFFCB',
    borderBottomWidth:0,
    borderBottomColor:'#fff',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:0},
texth1:{
    fontSize:20,
    fontWeight: 'bold',
    color:'#000000',
    marginRight:'15%'
    
  },


  Rebtn:{
      padding:24,
      borderRadius:30,
      marginVertical:'0%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#DDA448',
      marginHorizontal:'15%'
      ,bottom:'7%',
      shadowColor:'#F8FFF4' ,
        shadowOpacity:0.1,
        shadowOffset:{
            width:2,height:3
        },
        shadowRadius:2,
        elevation:10,
  },
  textrebtn:{
    fontSize:40,fontWeight:'bold',color:'#20A39E'
    
  }


  });

export default Endgame;