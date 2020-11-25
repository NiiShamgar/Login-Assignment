import React from 'react'
import {View, Text, FlatList} from 'react-native'
import Contact from './components/Contact'

export default function ContactsScreen(){
   const contacts = [
       {name:"Jacob Alidu", number:"023-238-9781"},
       {name:"Sam Adu", number:"025-238-9451"},
       {name:"Cobb Ali", number:"026-225-9751"},
       {name:"Ama Aidu", number:"023-239-9785"},
       {name:"Adjoa Amidu", number:"029-748-9732"},
       {name:"Maib Kadula", number:"026-268-9651"},
   ]
   
    return(
        <View>
            <FlatList
                data={contacts}
                renderItem={({item})=>{
                    return <Contact name={item.name} phone={item.number}/>
                }}
                keyExtractor={(item)=>item.number}
                />

        </View>
    )
}