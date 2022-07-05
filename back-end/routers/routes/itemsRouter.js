const express = require("express");
const authentication = require("../middlewares/authentication");

const {
  getAllItems,
  createNewItem,
  getItemsByID,
  deleteItemById,
  getItemsUserByID,
  updateItemById,
} = require("../controllers/itemsController");
const itemsRouter = express.Router();

itemsRouter.get("/", authentication, getAllItems);
itemsRouter.get("/profile", authentication, getItemsUserByID);
itemsRouter.get("/:itemId", getItemsByID);
itemsRouter.delete("/:itemId", deleteItemById);
itemsRouter.put("/:itemId", updateItemById);

itemsRouter.post("/", authentication, createNewItem);

module.exports = itemsRouter;
