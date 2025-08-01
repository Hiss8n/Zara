
import jwt from "jsonwebtoken"
import ENV from "../config/env"

 export const generatToken= async(userId)=>{
    return  await  jwt.sign({userId},ENV.JWT_SECRET_KEY,'15m')
}