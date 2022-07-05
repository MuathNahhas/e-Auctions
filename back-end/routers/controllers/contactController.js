const connection = require("../../db/db");
const createcontact = (req, res) => {
  const { yourName, email, message } = req.body;
  const data = [yourName, email, message];
  const query = `INSERT INTO contacts (user_name, email,message) values (?,?,?)`;
  connection.query(query, data, (err, result, fields) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    res.status(201).json({
      success: true,
      message: ` thank you,We will contact you as soon as possible`,
      information: result,
    });
  });
};
module.exports = {
  createcontact,
};
