import express from "express"
import { bookMeeting } from "../controllers/Bookings.js"
 export const BookRouter=express.Router()


BookRouter.post('/',bookMeeting);


