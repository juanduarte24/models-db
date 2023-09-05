import { DataTypes } from "sequelize";
import db from "../utils/database.js";

//*Creamos el modelo
//   nombre en singular
const User = db.define('users',{
    //definir todos los atributos o columnas de la tabla
    // id, username , email, password
    id:{
        //tipo de dato
        type: DataTypes.INTEGER,
        //llave primaria
        primaryKey: true,
        //Increment
        autoIncrement:true,
    },
    //varchar(30),not null
    username:{
        type: DataTypes.STRING(30),
        allowNull:false
    },
    //email
    email:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    }
});
//Exportamos el usuario/modelo
export default User;