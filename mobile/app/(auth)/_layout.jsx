
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return <Stack screenOptions={{headerShown:false}}>
    {/*  <Stack.Screen name='/' />
    <Stack.Screen name='/login'  />
    <Stack.Screen name='/signUp' />  */}
    <Stack.Screen name='/' />  {/* Code veerify */}
  </Stack>
}

export default AuthLayout