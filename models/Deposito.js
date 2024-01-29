const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Deposito = db.define("Depositos", {
    id_user: {
        type: DataTypes.INTEGER,
    },
    d_date: {
        type: DataTypes.STRING,
    },
    d_hour: {
        type: DataTypes.STRING,
    },
    d_amount: {
        type: DataTypes.INTEGER,
    },
    d_moneda: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Deposito;