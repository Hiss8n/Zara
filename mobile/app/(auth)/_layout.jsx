
import React from 'react'
import { Stack, useSegments } from 'expo-router'

const AuthLayout = () => {
  const segment=useSegments()
  return <Stack screenOptions={{headerShown:false}}>
  
    <Stack.Screen name='login'  />
    <Stack.Screen name='signUp' />  
    <Stack.Screen name='verifyCode' />  {/* Code veerify */}
  </Stack>
}

export default AuthLayout