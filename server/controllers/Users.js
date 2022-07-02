import Users from "../models/UserModel.js";
import Service from "../models/ServiceModel.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email','company']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const getUsersWithNameAndId = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const getUsersWithServices = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email','company', 'service']
        });
        const usersWithServices = [];
        for (const u of users) {
            const services = await Service.findAll({
                where:{
                    id: u.service
                }
            });
            usersWithServices.push(u);
            if (services && services.length) {
                usersWithServices[usersWithServices.length-1].service = services[0].title;
            }
        }
        res.json(usersWithServices);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { name, email, company, password, confPassword } = req.body;
    if(password.length <= 8) return res.status(400).json({msg:"Password is too short, minimum 6 characters!"});
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match!"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
       try {
        await Users.create({
            name: name,
            email: email,
            company : company,
            password: hashPassword
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}

export const AddUserService = async(req, res) => {

    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    const service = req.body;
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({service: service},{
        where:{
            id: userId
        }
    });
}
 
export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const admin = user[0].admin;

        const accessToken = jwt.sign({userId, name, email, admin}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, email, admin}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        // res.cookie('refreshToken', refreshToken,{
        //     httpOnly: true,
        //     maxAge: 24 * 60 * 60 * 1000
        // });
        res.json({ accessToken, admin, refreshToken });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    res.clearCookie('token');
    return res.sendStatus(200);
}