import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

export default function Contact({name,phone}) {
    return (
                  
         <View style={styles.container}>
                
            
            <Image source={require('../assets/profile.jpg')} style={styles.image}/>
            
           <View style={styles.infoContainer}>
                <Text style={styles.name} numberOfLines={1}>{name} </Text>
                <Text>{phone}</Text>
           </View>

            <View style={styles.icon}>
                <MaterialIcons name="local-phone" size={25} color="#5989f0"/>
            </View>

            <View style={styles.icon}>
                <MaterialCommunityIcons name="message-processing" size={25} color="#5989f0" />
            </View>

            <View style={styles.icon}>
            <SimpleLineIcons name="options-vertical" size={25} color="#a8a8a8" />
            </View>
            
        </View >
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginHorizontal:10,
        alignItems:"center",
        marginVertical:10
    },
    image:{
        width:50,
        height:50,
        borderRadius:50
    },
    infoContainer:{
        justifyContent:"center",
        marginHorizontal:30,
        flex:4
    },
    name:{
        fontWeight:"bold",
        fontSize:17
    },
    icon:{
        flex:1,
        marginHorizontal:2.5

    }
})