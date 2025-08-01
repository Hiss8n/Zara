import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

function TabLayout() {
  return<Tabs
  screenOptions={{
    tabBarActiveTintColor:'blue'
  }}
 
  
  >
    <Tabs
    name='index'
    options={{
        title:'Home',
        tabBarIcon:({color})=><Ionicons name='home-outline' color={color} size={24}/>
    }}

    />
    <Tabs
    name='settings'
    options={{
        title:'Settings',
        tabBarIcon:({color,size})=><Ionicons name='settings' color={color} size={24}/>
    }}

    />

    
  </Tabs>
}

export default TabLayout