import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "pruebawork",
    "postgres",
    "Andf1980",
    {
        host: "localhost",
        dialect: "postgres"
    }
); 

export default sequelize;