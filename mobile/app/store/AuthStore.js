import {create} from "zustand"
import {AsynStorage} from "@react-native-async-storage/async-storage"

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
            //await AsynStorage.setItem("user",JSON.stringify(data.user))
           // console.log(response)
            //await AsynStorage.setItem("token",data.token)
            console.log(data)
            set({user:data.user})


           return {success:true} 
        } catch (error) {
            console.log("Error",error)
            set({isLoading:false})
            return {success:false,error:data.message}

            
        }
    },
   
}))

