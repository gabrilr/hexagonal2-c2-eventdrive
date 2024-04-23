import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import RegistroModel from "../Envio/Infraestructura/Model/registro";

dotenv.config();

export const sequelize = new Sequelize({
    dialect:"mysql",
    database:process.env.DB,
    username: process.env.USER, 
    password: process.env.DBPSSW,
    host:process.env.HOST,
    port:3306,
    models:[RegistroModel]
});

export async function correrBaseDatos(){
    try {
        await sequelize.authenticate();
        console.log("Conexión lograda");
        await sequelize.sync({force:false});
    } catch (error) {
        console.log("No se puede conectar a la base de datos", error);
    }
}