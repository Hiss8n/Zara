import {create} from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL='https://zara-zeta.vercel.app/'




export const useAuthStore=create((set)=>({
    user:null,
    isLoading:false,
    message:null,
    register:async(username ,email,individualNumber)=>{
       set({isLoading:true})
        try {
            const response= await fetch(`${API_URL}/api/user/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    email,
                    individualNumber
                })
            })
            
            
            const data= await response.json()
            //console.log(data)
            await AsyncStorage.setItem("user",JSON.stringify(data.user));
            
           //console.log(response)
            await AsyncStorage.setItem("message",JSON.stringify(data.token))
            //set({user:data.user})
            //set({message:data.message})


           return {success:true} 
        } catch (error) {
            console.log("Error",error)
            set({isLoading:false})
            return {success:false,error:data.message}

            
        }
    },
   
}))

