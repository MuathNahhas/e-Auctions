const connection = require("../../db/db");
//payment method
const addPaymentMethod = (req, res) => {
  const { payment_type } = req.body;
  const query = `INSERT INTO  payments (payment_type) VALUES (?)`;
  const data = [payment_type];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(404).json({ massage: err });
    }
    if (result) {
      res.status(201).json({ result: result });
    }
  });
};

module.exports = addPaymentMethod;
