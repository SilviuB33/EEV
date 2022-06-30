import { Sequelize  } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING
    },
    company:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    admin:{
        type: DataTypes.BOOLEAN,
    },
    service:{
        type: DataTypes.STRING,
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});
(async () => {
    await db.sync();
})();

export default Users;