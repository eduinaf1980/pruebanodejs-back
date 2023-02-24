import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "El email debe ser un correo valido"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio"
            },
            len: {
                args: [2,255],
                msg: "El nombre debe tener por lo menos 2 caracteres"
            }
        }
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: {
                msg: "El tipo es numerico"
            }
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
})

export default Users;