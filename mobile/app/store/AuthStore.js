import {create} from "zustand"
import {AsynStorage} from "@react-native-async-storage/async-storage"




export const useAuthStore=create(({set})=>({
    user:"tutu",
    isLoading:false,
    message:null,
    register:async(username ,email,individualnumber)=>{
        setLoading(true)
        try {
            const response= await fetch("http://localhost:5001/api/user/resgister",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    username,
                    email,
                    individualnumber
                })
            })
            const data= await response.json()
            await AsynStorage.setItem("user",JSON.stringify(data.user))
            await AsynStorage.setItem("token",data.token)
            set({user:data.user,token:data.token,isLoading:false})


           return {success:true} 
        } catch (error) {
            console.log("Error",error)
            set({isLoading:false})
            return {success:false,error:data.message}

            
        }
    },
    seyHello:()=>{
        console.log("Hello there!!")
    }
}))

