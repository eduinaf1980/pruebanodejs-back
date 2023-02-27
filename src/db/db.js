import Sequelize from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME_POSTGRES,
    process.env.DB_USER_POSTGRES,
    process.env.DB_PASSWORD_POSTGRES,
    {
        host: process.env.DB_HOST_POSTGRES,
        dialect :process.env.DB_DIALECT,
    }
); 

export default sequelize;