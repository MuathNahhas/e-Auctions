const express = require("express");
const usersRouter = express.Router();
const { addUser, getAllUsers } = require("../controllers/usersController");

usersRouter.post("/", addUser);
usersRouter.get("/", getAllUsers);

module.exports = usersRouter;
