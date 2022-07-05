const express = require("express");
const stripeRouter=express.Router();
const stripeMethod=require("../controllers/stripeController");

stripeRouter.post("/",stripeMethod);
module.exports=stripeRouter