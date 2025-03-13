const { Sequelize } = require("sequelize");

/**
 * Sequelize instance configured to use SQLite as the database.
 * 
 * This instance is configured with the following options:
 * - dialect: "sqlite" - Specifies that SQLite is used as the database.
 * - storage: "./database.sqlite" - Specifies the file path for the SQLite database.
 * - logging: false - Disables logging of SQL queries.
 * 
 * @type {Sequelize}
 */
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

module.exports = sequelize;