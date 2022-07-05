const express = require("express");
const auctionsRouter = express.Router();
const authentication = require("../middlewares/authentication");

const {
  createAuction,
  getAllAuctions,
  getAuctionById,
  editAuctionById,
  deleteAuctionById,
  getAuctionsByUserId,
  getLimitAuction,
  getClosedOnUser,
} = require("../controllers/auctionsController");
const { isBidExist } = require("../controllers/bidsController");

auctionsRouter.post("/", authentication, createAuction);
auctionsRouter.get("/", getAllAuctions);
auctionsRouter.get("/limit", getLimitAuction);
auctionsRouter.get("/user_auctions", authentication, getAuctionsByUserId);
auctionsRouter.post("/payment", authentication, getClosedOnUser);

auctionsRouter.get("/:auction_id", getAuctionById);
auctionsRouter.put("/:auction_id", isBidExist, editAuctionById);
auctionsRouter.delete("/:auction_id", deleteAuctionById);

module.exports = auctionsRouter;
