import { Sequelize } from "sequelize";
 
const db = new Sequelize('server_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;

