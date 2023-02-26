import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Items = sequelize.define('items', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "La descripcion es obligatorio"
            },
            len: {
                args: [6,255],
                msg: "La descripcion debe tener por lo menos 6 caracteres"
            }
        }
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El codigo es obligatorio"
            },
            len: {
                args: [4,255],
                msg: "El codigo debe tener por lo menos 4 caracteres"
            }
        }
    }
}, {
    timestamps: false
})

export default Items;