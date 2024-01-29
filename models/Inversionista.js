const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Inversionista = db.define("Inversionistas", {
    name: {
        type: DataTypes.STRING,
    },
    a_p: {
        type: DataTypes.STRING,
    },
    a_m: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    b_date: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    rfc: {
        type: DataTypes.STRING,
    },
});

module.exports = Inversionista;