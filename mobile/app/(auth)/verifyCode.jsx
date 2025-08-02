import { View, Text, KeyboardAvoidingView, Platform, TextInput,StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import SafeAreaContext from '../components/SafeAreaContext'

const verifyCode = () => {

    const [code,setCode]=useState("")
  return (
    <SafeAreaContext style={{flex:1}}>
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS ==='ios'? "padding" :"height"}
    >
       
        <SafeAreaView style={{flex:1}}> 
      <View style={styles.container} >
        <View style={styles.inputContent}>
          <Text style={{fontSize:18,color:'#2e30314c'}}> Enter verification code</Text>
            <TextInput
            placeholder='enter verification code...'
            onChangeText={setCode}
            value={code.trim()}
            />
        </View>

      </View>
      </SafeAreaView>
       
    </KeyboardAvoidingView>
     </SafeAreaContext>
  )
}

const styles= StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     
    },
    inputContent:{
        backgroundColor:'#4c4c4c',
        borderRadius:10,
        justifyContent:'center',
        //alignItems:'center',
        alignContent:'center'

    }
})


export default verifyCode