import express from "express";


import { register,login,verify, getAllUsers, getOneUser } from "../controllers/User.controller.js";


export const router=express.Router()

router.post('/register',register);
router.post('/login',login);
router.post('/verify',verify)
router.get('/',getAllUsers)
router.get('/:id',getOneUser)