const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Inversion = db.define("Inversiones", {
    id_oportunidad: {
        type: DataTypes.INTEGER,
    },
    id_user: {
        type: DataTypes.INTEGER,
    },
    i_date: {
        type: DataTypes.STRING,
    },
    i_hour: {
        type: DataTypes.STRING,
    },
});

module.exports = Inversion;