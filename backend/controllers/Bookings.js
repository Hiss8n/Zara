import mongoose, { model, Mongoose } from "mongoose";


 export const bookSchema= new mongoose.Schema({
    place:{
        type:String,
        required:true,
        enum:["Kalobeyei","Feild post II","Camp manager","Field post I","Field post III"]
    },
    individual:{
        type:mongoose.Types.ObjectId,
        Ref:"User",
        required:true,

    }
},{timestamps:true})


const Book = mongoose.model("book",bookSchema);
 module.exports=Book





