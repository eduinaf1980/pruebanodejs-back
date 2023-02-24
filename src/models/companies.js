import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";
import Items from "./items.js";

const Companies = sequelize.define('companies', {
    nit: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    address: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

Companies.hasMany(Items, {
    foreignKey: "companies_id",
    sourceKey: "nit"
})

Items.belongsTo(Companies, {
    foreignKey: "companies_id",
    targetId: "nit"
})

export default Companies;

