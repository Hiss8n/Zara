import { Ionicons } from '@expo/vector-icons'
import { router, Tabs } from 'expo-router'
import React, { useEffect } from 'react'
import useAuthStore from '../store/AuthStore'

function TabLayout() {

  const {user,checkAuth}=useAuthStore();

  useEffect(()=>{
    checkAuth()
  })

  useEffect(()=>{
    const validateUser= user;
    if(!validateUser){
      //router.push("/(auth)/login")
    }

  },[user,checkAuth])
  //console.log(user)
  return<Tabs
  screenOptions={{
    tabBarActiveTintColor:'blue'
  }}
 
  
  >
    <Tabs.Screen
    name='index'
    options={{
        title:'Home',
        tabBarIcon:({color})=><Ionicons name='home-outline' color={color} size={24}/>
    }}

    />
     <Tabs.Screen
    name='book'
    options={{
        title:'Book',
        tabBarIcon:({color})=><Ionicons name='add-circle-outline' color={color} size={24}/>
    }}

    />
    
    <Tabs.Screen
    name='settings'
    options={{
        title:'Settings',
        tabBarIcon:({color,size})=><Ionicons name='settings' color={color} size={size}/>
    }}

    />

    
  </Tabs>
}

export default TabLayout