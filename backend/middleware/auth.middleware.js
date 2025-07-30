import mongoose from "mongoose";
import express from "express"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


const protectedRoute=async(req,res,next)=>{
    try {
        const token =req.headers.authorisation?.split(" ")[1];
        if (!token) return {message:"No token provided!!"}

        const decodeToken =await jwt.verify(token,process.env.JWT_SECRET,{expiresIn:'1d'})

        const user= await UserActivation.findById(decodeToken.id)
        if(!user) return {message:'No such user, anAuthenticated user'}
        req.user=decodeToken

        next()
        
    } catch (error) {
        
        console.log("Error",error)
    }
}