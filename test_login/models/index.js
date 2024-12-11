"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["devel"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const UserModel = require("./user")(sequelize, Sequelize);
db.user = UserModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
