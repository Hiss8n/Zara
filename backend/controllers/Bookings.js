
import {Book} from "../model/Book.js";




 export const bookMeeting= async(req,res)=>{
    const {place,date,individual} =req.body
    try {

        if(!place || !date || !individual){
            return res.status(400).json({success:false,message:"Please fill all the fields"})
        }
        const book = await Book.findOne({$or:[{place},{individual}]});
        if(book) return res.status(500).json({success:false,message:"Already booked"})


            const newBook= new Book.create({
                place,date,individual
            })
      await newBook.save()
        
       res.status(201).json({success:true,message:"Created new user.."}) 
    } catch (error) {
        console.log("Error",error);
        return res.status(500).json({success:false,message:"Server error, can not create a schedule now!!"})
        
    }
}


