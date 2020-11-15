/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {numbers:this.generate()};
    this.state2 = {addnum:this.addtionalNum()};
  }


  onPressButton(){
    this.setState({numbers:this.generate()}); 
  }

  onPressButton2(){
    this.setState({addnum:this.addtionalNum()}); 
  }

   addtionalNum(){
     var an = Math.floor(Math.random()*46)
     return an
   }

 
   generate(){
    var nums = [];
    for(var i=1; i<=45; i++)
      nums.push(i);
    
    var retStr = '';
    for(i=0; i<6; i++){
      var idx = Math.floor(Math.random()*nums.length);

      var sVal = nums[idx].toString();
      retStr += (sVal.length===2 ? sVal :' ' + sVal) + "  ";
      nums.splice(idx, 1);
    }

    return retStr;
  }

  render(){ 
    return (
    
    <View style={styles.container}>  
      <Text style={styles.detail}>로또 번호 생성기</Text>
      
        <View style={{flex:0.7,justifyContent:'center'}}>
          <Text style={styles.num}> {this.state.numbers}+ {this.state2.addnum}</Text>
        </View>

        <Button 
          title="번호 생성"
          color="black"
          onPress={() => this.onPressButton()}  
          /> 
      
    </View>
   
    );
  }
};

const styles = StyleSheet.create({

  container:{
     flex:1,
     backgroundColor:"ivory",   
     alignItems:"center"
  },

  num: {
    fontSize:25,
    color:"black",
  },

  detail :{
    fontSize:30,
    fontStyle:"normal",
    color:"black",
    marginTop:100
   
  }
});

export default App;
