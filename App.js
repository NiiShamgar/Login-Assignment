import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, TouchableNativeFeedback}  from 'react-native';
//import SignUp from './SignUp';
import ContactsScreen from './ContactsScreen'
import Contact from './components/Contact'

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
        <Text style={styles.nav}>Contact List</Text>
          <ContactsScreen/> 
          
      </View>
    );   
  } 
}


 
 


const styles = StyleSheet.create({
  container:{
     marginTop:100,
     marginHorizontal:20
  },
  nav:{
    fontSize:30,
    color:"#91a1c2"
  }
    
 
});

export default App; 

 
