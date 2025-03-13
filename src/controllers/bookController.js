const Book = require("../models/book");

/**
 * Gets all books.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */

exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

/**
 *  Gets a book by its ID.
 * 
 * @param {Object} req - The request object. 
 * @param {Object} res - The response object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the book.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

/**
 * Creates a new book.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.title - The title of the book.
 * @param {string} req.body.author - The author of the book.
 * @param {string} req.body.description - The description of the book.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.createBook = async (req, res) => {
  const { title, author, description } = req.body;
  const book = await Book.create({ title, author, description });
  res.status(201).json(book);
};

/**
 * Updates a book.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.title - The title of the book.
 * @param {string} req.body.author - The author of the book.
 * @param {string} req.body.description - The description of the book.
 * @param {Object} res - The response object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the book.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.updateBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  await book.update(req.body);
  res.json(book);
};

/**
 * Deletes a book.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the book.
 * @returns {Promise<void>} - A promise that resolves to void.
 */
exports.deleteBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  await book.destroy();
  res.json({ message: "Book deleted" });
};
