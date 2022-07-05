const express = require("express");
const contactRouter = express.Router();

const { createcontact } = require("../controllers/contactController");

contactRouter.post("/", createcontact);

module.exports = contactRouter;
