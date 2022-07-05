const connection = require("../../db/db");
const createRole = (req, res) => {
  const { permission } = req.body;
  const query = `INSERT INTO roles (permission) VALUES (?)`;
  const data = [permission];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(404).json({ massage: err });
    }
    if (result) {
      res.status(201).json({ result: result });
    }
  });
};

module.exports = createRole;
