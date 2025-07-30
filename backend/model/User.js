import mongoose from "mongoose";
import bcrypt from "bcryptjs";

 export const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unigue:true
    },
    individualNumber:{
     type:String, 
     required:true
    },
    verificationCode:{
        type:Number
        //required:true
    },
    verificationCodeExpiredAt:{
        type:Date,
        default:Date.now(),
        
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})



userSchema.pre('save',async function (next) {
  if(!this.isModified("password")) return next()
    const salt= await bcrypt.genSalt(10)

    this.password= await bcrypt.hash(this.password,salt)
    next()
    
})

userSchema.methods.comparePassword=async(userPassword)=>{

    return await bcrypt.compare(this.password,userPassword)
    

}

export const User = mongoose.model("user",userSchema)
