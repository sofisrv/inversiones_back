const { Sequelize } = require("sequelize");

const db = new Sequelize("inversiones", "root", "", {
    host: "localhost",
    dialect: "mysql"
  });

  module.exports = db;