const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Oportunidad = db.define("Oportunidades", {
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    m_min: {
        type: DataTypes.INTEGER,
    },
    m_max: {
        type: DataTypes.INTEGER,
    },
    m_rendimiento: {
        type: DataTypes.INTEGER,
    },
    m_plazo: {
        type: DataTypes.INTEGER,
    },
    m_unidades: {
        type: DataTypes.INTEGER,
    },
    m_moneda: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Oportunidad;