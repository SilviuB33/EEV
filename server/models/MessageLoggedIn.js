import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const MessagesLoggedIn = db.define('messagedloggedin',{
    subject:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    },
    user_name:{
        type: DataTypes.STRING
    },
    user_company:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default MessagesLoggedIn;
