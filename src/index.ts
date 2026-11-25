import server from "./server"
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 4000

server.listen(port,()=>{
    console.log("Rest api en el puerto 4000");
    console.log("Escuchando desde la ruta:");
    console.log("localhost:4000");
}
)