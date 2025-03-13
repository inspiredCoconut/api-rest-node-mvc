const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

// Routes for books
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookById);
router.post("/", authMiddleware, bookController.createBook);
router.put("/:id", authMiddleware, bookController.updateBook);
router.delete("/:id", authMiddleware, bookController.deleteBook);

module.exports = router;