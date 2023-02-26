import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Items from "./items.js";

const Companies = sequelize.define('companies', {
    nit: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nit es obligatorio"
            },
            len: {
                args: [9,255],
                msg: "El nit es obligatorio"
            }
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "La direccion es obligatorio"
            },
            len: {
                args: [6,255],
                msg: "La direccion debe tener por lo menos 6 caracteres"
            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio"
            },
            len: {
                args: [6,255],
                msg: "El nombre debe tener por lo menos 6 caracteres"
            }
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El telefono es obligatorio"
            },
            len: {
                args: [9,255],
                msg: "El telefono debe tener por lo menos 2 caracteres"
            }
        }
    }
}, {
    timestamps: false
})

Companies.hasMany(Items, {
    foreignKey: "companies_id",
    sourceKey: "nit",
    allowNull: false
})

Items.belongsTo(Companies, {
    foreignKey: "companies_id",
    targetId: "nit",
    allowNull: false
})

export default Companies;

