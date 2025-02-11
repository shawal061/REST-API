const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);  // Fetch all users
router.post("/", createUser); // Create a new user

module.exports = router;
