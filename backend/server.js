import express from "express";
import cors from "cors";
import { router} from "./routes/user.route.js";

import connectDB from "./database/db.js";
import ENV from "./config/env.js";


const PORT =process.env.PORT || 5001;
const app= express()

app.use(express.json())
app.use(cors({
  origin: "https://zara-zeta.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

 connectDB()

app.use('/api/user',router);


app.get('/',(req,res)=>{
    res.send("Hello,help refugees,solve easily.")
})
/* 
if(ENV.NODE_ENV !=="production"){
   app.listen(ENV.PORT,()=>console.log(`Sever is running on port: http://localhost:${PORT}`));
} */

   app.listen(ENV.PORT,()=>console.log(`Sever is running on port: http://localhost:${PORT}`));


export default app

