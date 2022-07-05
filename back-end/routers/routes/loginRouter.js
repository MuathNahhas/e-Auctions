const express = require("express");
const loginRouter = express.Router();
const { login, CaptchaAuth } = require("../controllers/loginController");

loginRouter.post("/", login);
loginRouter.post("/captcha", CaptchaAuth);


module.exports = loginRouter;