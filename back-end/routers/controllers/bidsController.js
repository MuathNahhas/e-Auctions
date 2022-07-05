const connection = require("../../db/db");

const createBid = (req, res) => {
  const { auction_id, date, bid_value } = req.body;
  const user_id = req.token.userId;

  const newBid = [auction_id, date, user_id, bid_value];
  const query = `INSERT INTO bids (auction_id, date, user_id,bid_value) values (?,?,?,?) `;

  connection.query(query, newBid, (err, result, fields) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    const query1 = `UPDATE auctions SET closed_on= ${result.insertId} WHERE auction_id=${auction_id} `;

    connection.query(query1);

    res.status(201).json({
      success: true,
      message: `success new bid added`,
      insertId: result.insertId,
    });
  });
};

const getAllBids = (req, res) => {
  const query = `SELECT * FROM bids`;
  connection.query(query, (err, result, fields) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }

    res.status(200).json({
      success: true,
      message: `all bids`,
      result: result,
    });
  });
};

const getBidsOnActionId = (req, res) => {
  const query = `SELECT * FROM bids WHERE auction_id =${req.params.auction_id} `;
  connection.query(query, (err, result, fields) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }

    res.status(200).json({
      success: true,
      message: `all bids`,
      result: result,
    });
  });
};

const deleteBidById = (req, res) => {
  const bid_id = req.params.bid_id;
  const query = `DELETE FROM bids WHERE bid_id =${bid_id}`;

  connection.query(query, (err, result, fields) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    if (!result.affectedRows) {
      return res.status(404).json({
        success: false,
        message: `bid with id ${bid_id} does not exist`,
      });
    }
    res.status(202).json({
      success: true,
      message: `Success Delete bid with id => ${bid_id}`,
      result: result,
    });
  });
};

const getMaxBidById = (req, res) => {
  const auction_id = req.params.auction_id;
  const query = `SELECT MAX (bids.bid_value),bids.user_id,users.user_name FROM bids 
                        JOIN users ON users.user_id =bids.user_id WHERE auction_id = ${auction_id} `;

  connection.query(query, (err, result, fields) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `action with id ${auction_id} does not exist`,
      });
    }
    res.status(202).json({
      success: true,
      message: `Successfully get max bid for auction with id => ${auction_id}`,
      bid: result[0],
    });
  });
};

const isBidExist = (req, res, next) => {
  const { process } = req.body;
  if (process.key == "closed_on") {
    const query = `SELECT bid_value FROM bids WHERE bid_id =${process.value}`;
    connection.query(query, (err, result, fields) => {
      if (err) {
        console.log(err.message);
        return res.status(500).json({
          success: false,
          message: `Server Error`,
        });
      }
      if (result.length) {
        req.bid_value = result[0].bid_value;
        next();
      } else
        res.status(400).json({
          success: false,
          message: `the closed_on bid is not exist`,
          result: result,
        });
    });
  } else {
    next();
  }
};

module.exports = {
  createBid,
  getAllBids,
  deleteBidById,
  getMaxBidById,
  getBidsOnActionId,
  isBidExist,
};
