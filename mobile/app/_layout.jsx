import { Stack, useSegments } from "expo-router";
import useAuthStore from "./store/AuthStore";
import { useEffect } from "react";

export default function RootLayout() {

  const {user,checkAuth}=useAuthStore()
  const segment=useSegments()
 // console.log("this is the seg:",segment)

   useEffect(()=>{
    checkAuth()
  },[])

  //const isauth=segment==="(auth)/login";
  //console.log(isauth)

   useEffect(()=>{
   /* const isAuth= user && checkAuth
    const isLoggedIn= segment==="(auth)"
     //if(!isAuth && !isLoggedIn) router.replace("/(auth)/signUp") 

    if(!isAuth && !isLoggedIn){
      router.replace("/(auth)/verifyCode")

    } else{
      router.replace("/(tabs)/book)")
    } 
  },[user,segment,checkAuth])  */

   })
  return<Stack screenOptions={{headerShown:false}}>
   {/*  <Slot name='index'/> */}
   <Stack.Screen name="index"/>
 
    <Stack.Screen name="(auth)"/>

    <Stack.Screen name="(tabs)"/>

    
  </Stack>
 

}
