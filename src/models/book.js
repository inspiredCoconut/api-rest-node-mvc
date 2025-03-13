const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

/**
 * Model representing a book.
 *
 * This model is used to store information about books.
 */

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Book;
