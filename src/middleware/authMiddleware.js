const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 *  Middleware that checks if the user is authenticated.
 * 
 * @param {Object} req - The request
 * @param {Object} req.headers - The request headers
 * @param {string} req.headers.authorization - The authorization header
 * @param {Object} res - The response
 * @param {Object} res.status - The response status
 * @param {Object} res.json - The response JSON
 * @param {Object} next - The next middleware
 * @returns {Object} - The response
 */ 
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
