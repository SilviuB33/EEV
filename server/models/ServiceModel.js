import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Service = db.define('services',{
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
},{
    freezeTableName: true
});
 
export default Service;
