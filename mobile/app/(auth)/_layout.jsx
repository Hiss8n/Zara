
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return <Stack screenOptions={{headerShown:false}}>
     <Stack.Screen name='/' screenOptions={{headerShown:false}}/>
    <Stack.Screen name='/login' screenOptions={{headerShown:false}} />
    <Stack.Screen name='/signup' screenOptions={{headerShown:false}}/>
  </Stack>
}

export default AuthLayout