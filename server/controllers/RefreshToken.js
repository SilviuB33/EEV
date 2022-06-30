import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
 
export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken,
                // admin: admin
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(
            refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].user_id;
            const company = user[0].company;
            const name = user[0].name;
            const email = user[0].email;
            const admin = user[0].admin;
            const accessToken = jwt.sign({userId, company ,name, email, admin}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}