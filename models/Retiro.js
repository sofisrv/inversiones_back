const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Retiro = db.define("Retiros", {
    id_user: {
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
});

module.exports = Retiro;