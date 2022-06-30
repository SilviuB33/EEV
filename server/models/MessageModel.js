import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Message = db.define('messages',{
    email:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    subject:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
},
);
 
export default Message;
