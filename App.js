import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, TouchableNativeFeedback}  from 'react-native';
import LogIn from './LogIn'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
      names:["ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi","ama","Adjoa","Kwame", "Kofi"]
    }
  } 
  render(){
    return (
      <View style={styles.container}>
          <LogIn/>


         <TextInput 
            style={styles.input} 
            placeholder="email"
            autoCapitalize="none"
            autoCorrect={false}
            //secureTextEntry={true}
            value={this.state.email}
            onChangeText={(email)=>{
              this.setState({email})
           }}
            />


        <TextInput 
            style={styles.input}
            placeholder="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password)=>{
              this.setState({password})
            }}
            />

            <TouchableOpacity style={styles.loginContainer}>
              <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>  
          
      </View>
    );   
  } 
}


 
 


const styles = StyleSheet.create({
  container:{
     marginTop:100,
     marginHorizontal:20
  },
  input:{
    marginVertical:10,
    paddingHorizontal:10,
    backgroundColor:"green",
    height:50
  },
  loginContainer:{
    backgroundColor:"blue",
    height:40,
    justifyContent:"center",
    borderRadius:20,
    marginHorizontal:20

  },
  loginText:{
    
    color:"white",
    alignSelf:"center"
  }
});

export default App; 

 
