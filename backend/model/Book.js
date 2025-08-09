import mongoose, { Schema } from "mongoose";

 const bookShema= new Schema({
    place:{
        type:String,
        enum:["Field post I","Field Post II","Field post III","Camp Manager","Kalobeyei"]
    },
    date:{
        type:Date,

    },
    individualId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

export  const Book= mongoose.model("book",bookShema)

