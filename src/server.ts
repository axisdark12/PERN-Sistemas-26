import express from 'express';
import router from './router';
import db from './config/db';

//conectar base de datos
async function connectDB() {
    try {
        await db.authenticate();//probando 
        db.sync();//empatar el modelo a la bd
        console.log("Conexion a la bd Exitosa");
    } catch (error) {
        console.log(error);
        console.log("hubo un error al conectar");
    }
}
connectDB()

const server = express()
//leerdatos
server.use(express.json())

server.use('/api',router)


export default server;