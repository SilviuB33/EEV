// const express = require('express')
// const app = express()
// const cors = require('cors')
// const mongoose = require('mongoose')
// const User = require('./models/user.model')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/ExtronEV')

// app.post('/api/register', async (req, res) =>{
//     console.log(req.body)
//     try{ 
//     const newPassword = await bcrypt.hash(req.body.password, 10)
//      await User.create({
//         name: req.body.name,
//         company: req.body.name,
//         email: req.body.email,
//         password: newPassword,
//     })
//     res.json({status: 'ok'})
//     } catch (err){
//         console.log(err)
//         res.json({status: 'error', error: 'Duplicate email'})
//     }
// })
// app.post('/api/login', async (req, res) =>{

//     const user = await User.findOne({

//         email: req.body.email,
//     })

//     if(!user) {return { status: 'error', error: 'Invalid login'}

//     }

//     const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
    
     

//     if (user){
//         const token = jwt.sign(
//         {
//             name: user.name,
//             email: user.email,
//         }, 
//         'secret123'
//     )

//         return res.json({status: 'ok', user: token})
//     } else {
//         return res.json({status: 'error, user: false'})
//     }
// })

// app.get('api/users', async (req,res) => {

//     const user = await User.findOne({
//         email:email
//     })
//     return res.json({status: 'ok', email: email})

// })

// app.get('/api/user', async (req, res ) =>{
    
//     try{
//             const decoded = jwt.verify(token,'secret123')
//             const email = decoded.email
//             const user = await User.findOne({email:email})
        
//             return res.json ({status: 'ok', user: email})
//             } catch(error){
//                 console.log(error)
//                 res.json({ status: 'error', error: 'invalid token' })
//             }
//         })

// app.get('/api/plan', async (req, res ) =>{
    
//     try{
//             const decoded = jwt.verify(token,'secret123')
//             const email = decoded.email
//             const user = await User.findOne({email:email})
        
//             return res.json ({status: 'ok', message: user.plan})
//             } catch(error){
//                 console.log(error)
//                 res.json({ status: 'error', error: 'invalid token' })
//             }
//         })
        
// app.post('/api/plan', async (req, res) =>{

//     const token = req.headers['x-access-token']
        
//     try{
//         const decoded = jwt.verify(token,'secret123')
//         const email = decoded.email
//         const user = await User.updateOne(
//             {email: email},
//             {$set: {plan: req.body.plan}}
//             )
        
//         return res.json ({status: 'ok'})
//         } 
        
//         catch(error){
//             console.log(error)
//             res.json({ status: 'error', error: 'invalid token' })
//             }
// })

// // app.get('/api/message', async (req, res) =>{

// //     const token = req.headers['x-access-token']

// //     try{
// //     const decoded = jwt.verify(token,'secret123')
// //     const email = decoded.email
// //     const user = await User.findOne({email:email})

// //     return res.json ({status: 'ok', message: user.message})
// //     } catch(error){
// //         console.log(error)
// //         res.json({ status: 'error', error: 'invalid token' })
// //     }
// // })

// app.post('/api/message', async (req, res) =>{

//     const token = req.headers['x-access-token']

//     try{
//     const decoded = jwt.verify(token,'secret123')
//     const email = decoded.email
//     const user = await User.updateOne(
//         {email: email},
//         {$set: {message: req.body.message}}
//     )

//     return res.json ({status: 'ok'})
//     } catch(error){
//         console.log(error)
//         res.json({ status: 'error', error: 'invalid token' })
//     }
// })

// app.listen(1337, () =>{
//     console.log('It works!!')
// })

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbr from "./config/db.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
 
app.listen(5000, ()=> console.log('Server running at port 5000'));