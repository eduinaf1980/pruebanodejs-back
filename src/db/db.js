import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "pruebawork",
    "eduardo",
    "Andf1980",
    {
        host: "localhost",
        dialect: "postgres"
    }
); 

export default sequelize;