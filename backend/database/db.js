import mongoose from "mongoose";
import ENV from "../config/env.js";

const connectDB= async()=>{
    try {

        await mongoose.connect(ENV.MONGO_URI)
        .then(()=>console.log('DATABASE CONNECTED SUCCESSFULLY!'))
        .catch((e)=>console.log(e))
        
    } catch (error) {
        console.log('Error',error)
        process.exit(1)
        
    }
}
export default connectDB