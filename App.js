import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, TouchableNativeFeedback}  from 'react-native';
import LogIn from './LogIn';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
    }
  } 
  render(){
    return (
      <View style={styles.container}>
          <LogIn/>  
      </View>
    );   
  } 
}


 
 


const styles = StyleSheet.create({
  container:{
     marginTop:100,
     marginHorizontal:20
  },
    
 
});

export default App; 

 
