const express = require("express");
const bidsRouter = express.Router();
const authentication = require("../middlewares/authentication");

const {
  createBid,
  getAllBids,
  deleteBidById,
  getBidsOnActionId,
  getMaxBidById,
} = require("../controllers/bidsController");

bidsRouter.post("/", authentication, createBid);
bidsRouter.get("/", getAllBids);
bidsRouter.delete("/:bid_id", deleteBidById);
bidsRouter.get("/:auction_id", getBidsOnActionId);
bidsRouter.get("/:auction_id/max", getMaxBidById);

module.exports = bidsRouter;
