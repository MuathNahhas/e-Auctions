const connection = require("../../db/db");
const bcrypt = require("bcrypt");
//Add Users
const addUser = async (req, res) => {
  const { user_name, phone, email, password, payment_ref } = req.body;
  const hashPassword = await bcrypt.hash(
    password,
    Number.parseInt(process.env.SALT)
  );
  const role_id = 5;

  const query = `INSERT INTO users (user_name, phone, email, password,role_id) SELECT * FROM (SELECT '${user_name}' AS user_name, '${phone}' AS phone,'${email}' AS email,'${hashPassword}' AS password,'${role_id}' AS role_id) AS temp WHERE NOT EXISTS ( SELECT email FROM users WHERE email = '${email}' ) LIMIT 1; SELECT * FROM users WHERE email= '${email}' `;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json({ massage: err });
    } else if (result[0].affectedRows === 1) {
      res.status(201).json({
        success: true,
        massage: "SUCSESS ADD NEW USER",
        newUserId: result[1][0].user_id,
      });
    } else if (result[0].affectedRows === 0) {
      res.status(204).json({
        success: false,
        massage: "USER ALREADY EXISTED",
      });
    }
  });
};

const getAllUsers = async (req, res) => {
  const query = "SELECT * FROM  users";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(404).json({ massage: err });
    }
    res.status(201).json({ Users: result });
  });
};
module.exports = { addUser, getAllUsers };
