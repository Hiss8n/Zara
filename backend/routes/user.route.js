import express from "express";


import { register,login,verify, getAllUsers, getOneUser } from "../controllers/User.controller.js";


export const UserRouter=express.Router()

UserRouter.post('/register',register);
UserRouter.post('/login',login);
UserRouter.post('/verify',verify)
UserRouter.get('/',getAllUsers)
UserRouter.get('/:id',getOneUser)