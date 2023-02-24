import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Items = sequelize.define('items', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    },
    code: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

export default Items;