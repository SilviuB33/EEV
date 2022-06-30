import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Raport = db.define('raports',{
    month:{
        type: DataTypes.STRING
    },
    consumption:{
        type: DataTypes.DOUBLE
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
 
export default Raport;
