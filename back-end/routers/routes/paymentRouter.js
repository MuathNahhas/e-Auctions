const express=require("express");
const paymentsRouter=express.Router();
const addPaymentMethod=require("../controllers/paymentsController");

paymentsRouter.post("/",addPaymentMethod);

module.exports=paymentsRouter;