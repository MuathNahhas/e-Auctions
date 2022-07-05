const express = require("express");
const authentication =require("../middlewares/authentication")
const favoritesUsersRouter = express.Router();
const {
  addFavoriteUser,
  removeFavoriteUser,
  getFavoriteUsers,
} = require("../controllers/favoritesUsersController");

favoritesUsersRouter.post("/:favUser",authentication, addFavoriteUser);
favoritesUsersRouter.delete("/:favUser",authentication, removeFavoriteUser);
favoritesUsersRouter.get("/",authentication, getFavoriteUsers);

module.exports = favoritesUsersRouter;
