import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import {Alert, StyleSheet, Text, View , Image , TouchableOpacity ,ActivityIndicator ,Button} from 'react-native';
import React , {useState ,useEffect} from 'react';




 const StartScreen = (props) => {

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.texth1}>
          Welcome To The Quiz Game
        </Text>
        <Image source={require('./assets/logo.png')} style={{margin:10,width:'11%',height:'150%',resizeMode:'contain',marginHorizontal:10,}} />
      </View>
      
      <View>

      <View style={{borderWidth:0, width:'90%',height:'80%',alignItems: 'center',justifyContent:'center',paddingLeft:'10%'}}>
        <Image source={require('./assets/splash_logo.png')} style={{height:'80%',marginTop:'30%',resizeMode:'contain',}}/>
        <TouchableOpacity style={styles.Btn} onPress={()=>{props.startGame(true);}}>
        <Text style={styles.textBtn}>Play</Text></TouchableOpacity>  
      </View>
      
    </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor: '#ADFCF9',
    
    

  },
  texth1:{
    fontSize:20,
    fontWeight: 'bold',
    color:'#000000',
    marginRight:'15%'
    
  },
  header:{flexDirection:'row-reverse',paddingVertical:30,width:'100%',alignItems: 'center',justifyContent:'space-between',backgroundColor:'#CCFFCB',
borderBottomWidth:0,borderBottomColor:'#fff',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderWidth:0},

Btn:{
  width:'80%',height:'15%',
  alignItems: 'center',
  backgroundColor:'#EFE9AE',
  justifyContent:'center',
  borderRadius:20,borderWidth:0,marginTop:'20%'},
  
textBtn:{
    fontSize:50,
    fontWeight: 'bold',
    color:'#000',
    justifyContent:'center',
    alignContent:'center',
    alignItems: 'center',
    marginLeft:'10%',
    marginRight:'10%',
    
  },

});

export default StartScreen;