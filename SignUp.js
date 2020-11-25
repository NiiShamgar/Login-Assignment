import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'



export default class SignUp extends Component{
    render() {
        return (
            <View style={styles.containers}>
                
                <View style={styles.signUpTextContainer}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>


                <View>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Username"/>

                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder="Email"/>

                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry={true}
                        placeholder="Password"/>
                    

                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry={true}
                        placeholder="Confirm Password"/>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>

                
                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.signUpTextBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpTextBelow}>Sign up</Text>
                    </TouchableOpacity>
        </View>  
            </View>

        )
    }
}


const styles=StyleSheet.create({
    containers:{
       marginHorizontal:40
    },
     signUpText:{
        fontSize:40,
        color:"#7f1491"
    },
    signUpTextContainer:{
        marginBottom:30
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:"#7f1491",
        fontSize:20,
        height:50,
        marginTop:20
    },
    forgotPassword:{
        alignSelf:"flex-end",
        marginVertical:3,
        color: "#6691ed"
    },
    buttonContainer:{
        marginVertical:40,
        height:50,
        backgroundColor:"#7f1491",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    buttonText:{
        color:"white",
        fontSize:25
    },
    noAccountContainer:{
        flexDirection:"row",
        justifyContent:"center"
    },
    noAccountText:{
        marginRight:10,
        fontSize:16
    },
    signUpTextBelow:{
        fontSize:16,
        color:"#6691ed"
    },
    signUpTextBtn:{
        color:"white",
        fontSize:16
    },

});

