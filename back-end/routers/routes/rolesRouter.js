const express=require("express");
const rolesRouter=express.Router();
const createRole=require("../controllers/rolesController");

rolesRouter.post("/",createRole);

module.exports=rolesRouter;