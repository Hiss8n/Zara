import {  Text, TextInput} from 'react-native'
import React from 'react'


const SignUpScreen=()=>{   

  return<SafeAreaContext style={{flex:1}}>

   
   <View >
    <TextInput
    placeholder='johndoe'
    onChangeText={setName}
    
    />

   </View>

    
     </SafeAreaContext>
  
}

export default SignUpScreen