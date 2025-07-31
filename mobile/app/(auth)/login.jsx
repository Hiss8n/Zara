import { SafeAreaView, Text, TextInput, View,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

const LoginScreen = () => {
  const [IsLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(false)
 
  
  return (
    
  
      <SafeAreaView style={{flex:1,justifyContent:'center'}}>
       
        <View style={styles.inputContainer}>

          <Text style={styles.inputHeader}>login</Text>
          {/*  <Loader size={24} color='red'/> */}

          <View style={styles.logInContainer}>
          <Text style={styles.label}>Enter you first Name</Text>
          <TextInput
          placeholderTextColor='#353333ff'
          placeholder='johnDoe...'
          style={styles.nameInput}
          />


          </View>
          <View style={styles.logInContainer}>
          <Text style={styles.label}>Enter Individual Number</Text>
          <TextInput
          placeholderTextColor='#353333ff'
          placeholder='individual no...'
          style={styles.nameInput}
          />


          </View>
             {error ? <Text>{error}</Text>:null}
              
                <LinearGradient
                colors={['#1717d5ff','#30aadaff']}
                start={{
                  x:0,y:0
                }}
                end={{x:1,y:1}}
                 style={styles.forward} >
                  <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >

                    { IsLoading ? <Text style={{color:'#efefe7ff',fontSize:16}}>Loading...</Text>:
                    <Text style={{fontStyle:'normal',fontSize:18,color:'#fff'}}>Login </Text>} 
                  
                  
                   
                </TouchableOpacity>
                  
                </LinearGradient>
          
          </View>
          <View style={styles.bottomText}>
            <Text>Don't have an account? {""}<Link href={'/signUp'} style={{color:'#da067aff',fontSize:14}}>Register</Link></Text>
          </View>
         
      </SafeAreaView>
   
   
  )
}



const styles=StyleSheet.create({
  inputContainer:{
    //width:'100%',
   // backgroundColor:'#0456ce',
    marginTop:140,
    paddingBottom:30,
    with:321

  },
  logInContainer:{
    flexDirection:'column',
    width:'100%',
    height:70,
    marginLeft:28,
    borderRadius:20,
    marginTop:34,
    paddingTop:8
    

  },
  inputHeader:{
    fontSize:24,
    textAlign:'center',
    marginBottom:12,
    color:'#0456ec',
    fontWeight:700

  },
  label:{
    fontSize:16,
    color:'#2a2626a9',
    marginBottom:10

  },
  nameInput:{
    borderWidth:1,
    borderColor:'blue',
    width:320,
    borderRadius:10,
    
    paddingLeft:12
    
  },
    forward:{
    //flexDirection:'row',
    //alignItems:'center',
    marginBottom:0,
    marginTop:50,
    paddingTop:15,
    //width:321,
    paddingBottom:15,
    marginLeft:24,
    marginRight:24,
    borderRadius:35, 
    flexDirection:'column',

  //padding:18,
  
    

    

  },
  bottomText:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    marginTop:0
  }
})
export default LoginScreen