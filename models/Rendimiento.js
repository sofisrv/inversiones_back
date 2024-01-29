const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Rendimiento = db.define("Rendimientos", {
    id_inversion: {
        type: DataTypes.INTEGER,
    },
    r_date: {
        type: DataTypes.STRING,
    },
    r_hour: {
        type: DataTypes.STRING,
    },
    r_amount: {
        type: DataTypes.INTEGER,
    },
    r_moneda: {
        type: DataTypes.INTEGER,
    },
    r_status: {
        type: DataTypes.INTEGER,
    },
});


module.exports = Rendimiento;