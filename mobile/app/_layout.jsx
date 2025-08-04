import { router, Slot, Stack, useSegments } from "expo-router";
import useAuthStore from "./store/AuthStore";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { routePatternToRegex } from "expo-router/build/fork/getStateFromPath-forks";

export default function RootLayout() {

  const {user,checkAuth}=useAuthStore()
  const segment=useSegments()
  console.log("this is the seg:",segment)

   useEffect(()=>{
    checkAuth()
  },[user])
 

   useEffect(()=>{
    const isAuth= user && checkAuth
    const isLoggedIn= segment==="(auth)"
    /* if(!isAuth && !isLoggedIn) router.replace("/(auth)/signUp") */

   /*  if(!isAuth && !isLoggedIn){
      router.replace("/(auth)/login")

    } else if(isAuth && isLoggedIn){
      router.replace("/(tabs)/book)")
    } */
  },[user,segment,checkAuth]) 


  return<Stack screenOptions={{headerShown:false}}>
   {/*  <Slot name='index'/> */}
 {/*   <Stack.Screen name="index"/> */}
    <Stack.Screen name="(auth)"/>
    <Stack.Screen name="(tabs)"/>
  </Stack>
 

}
