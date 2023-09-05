import { Sequelize } from "sequelize";
import "dotenv/config"; 

//Creamos una instancia de Sequelize

const db = new Sequelize({
    //valores con los que inciamos la instancia (constructor)
    host:process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    dialect:'postgres'
});

export default db;