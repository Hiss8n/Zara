import { SafeAreaView, Text, TextInput, View,StyleSheet,TouchableOpacity, KeyboardAvoidingView, Platform, Alert} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {useAuthStore} from "../store/AuthStore";
import { Link, router } from 'expo-router';
const SignUp= () => {
 
  const [error,setError]=useState(false)
  const [username,setUserName]=useState("")
  const [email,setEmail]=useState("")
  const [individualNumber,setIndividualNumber]=useState("")

  const {user,register,isLoading}=useAuthStore()
  

  const handleSignUp=async()=>{
   
    try {
      const res=await register(username,email,individualNumber)

      
      if(res){
          Alert.alert("Can not register now")
        } else{
          Alert.alert("Register successfully",
            "Login with your individual no. to continue!",
            )
            setTimeout(()=>
            {router.push('/login')},1500)
            
        }
        setUserName("")
        setEmail("")
        setIndividualNumber("")
        //console.log(user)
       console.log(user)
      
    } catch (error) {
    console.log('Error',error)
  }
   
  }
 
  
  return (<KeyboardAvoidingView
  style={{flex:1}}
  behavior={[Platform.OS ==='ios' ? "padding":"hieght"]}
  >  
    
  
      <SafeAreaView style={{flex:1,justifyContent:'center'}}>
       
        <View style={styles.inputContainer}>

          <Text style={styles.inputHeader}>Register</Text>
          {/*  <Loader size={24} color='red'/> */}

          <View style={styles.logInContainer}>
          <Text style={styles.label}>Enter you first Name</Text>
          <TextInput
          value={username.trim()}
          placeholderTextColor='#353333ff'
          placeholder='johnDoe...'
          style={styles.nameInput}
          onChangeText={setUserName}
          />


          </View>
          <View style={styles.logInContainer}>
          <Text style={styles.label}>Enter Email Address</Text>
          <TextInput
          value={email.trim()}
          onChangeText={setEmail}
          placeholderTextColor='#353333ff'
          placeholder='johndoe@gmail.com...'
          style={styles.nameInput}
          />


          </View>

          <View style={styles.logInContainer}>
          <Text style={styles.label}>Enter Individual Number</Text>
          <TextInput
          value={individualNumber.trim()}
          onChangeText={setIndividualNumber}
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
                  <TouchableOpacity
                  onPress={handleSignUp}
                   style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >

                    { isLoading? <Text style={{color:'#efefe7ff',fontSize:16}}>Loading...</Text>:
                    <Text style={{fontStyle:'normal',fontSize:18,color:'#fff'}}>Register </Text>} 
                  
                  
                   
                </TouchableOpacity>
                  
                </LinearGradient>
          
          </View>
          
         <View style={styles.bottomText}>
                     <Text>Already have an account? {""}<Link href={'/login'} style={{color:'#da067aff',fontSize:14}}>login</Link></Text>
                   </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
   
   
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
export default SignUp