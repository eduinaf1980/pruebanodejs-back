import app from "./app.js";
import sequelize from "./db/db.js"
import "./models/index.js"

async function main(){
    try{
        await sequelize.sync({force: false});
        app.listen(4000);
        console.log("Servidor corrriendo en puerto:", 4000);
    }catch(error){
        console.log("Error de conexion", error);
    }
}

main();