const express = require("express");
const request = require("request");
const app = express();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connection = require("../../db/db");

require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "787313334015-8ikgfipkm1vi5t5fq9iapgls6urtarns.apps.googleusercontent.com"
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const login = async (req, res) => {
  // 1 - login by google part
  //---------------------------------------------------------
  if (req.headers.authorization) {
    const tokenId = req.headers.authorization.split(" ").pop();

    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience:
        "787313334015-8ikgfipkm1vi5t5fq9iapgls6urtarns.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    const user = {
      email: payload.email,
      image: payload.picture,
      social_id: payload.sub,
      first_name: payload.given_name,
      last_name: payload.family_name,
    };

    const query = `INSERT INTO users (user_name,email,role_id) SELECT * FROM (SELECT '${user.first_name} ${user.last_name}' AS user_name, '${user.email}' AS email,'6' AS role_id) AS temp WHERE NOT EXISTS ( SELECT email FROM users WHERE email = '${user.email}' ) LIMIT 1; SELECT * FROM users WHERE email= '${user.email}' `;
    connection.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }


      res.status(200).json({
        success: true,
        message: `You Signed In Successfully`,
        tokenId: tokenId,
        user_name: `${user.first_name} ${user.last_name}`,
      });
      // }
    });
  } else {
    // 2 - normal login part
    //------------------------------------------------------------------

    const email = req.body.email;
    const password = req.body.password;
    const query = `SELECT * FROM users WHERE email = ?`;
    connection.query(query, [email], async (err, result) => {
      if (err) {
        res.status(500).json("server error");
      }
      if (!result.length) {
        res
          .status(404)
          .json({ success: false, message: `The email doesn't exist ` });
      } else {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          res.status(404).json({
            success: false,
            message: `The password you’ve entered is incorrect `,
          });
        }
        const payload = {
          userId: result[0].user_id,
          paymentRef: result[0].payment_ref,
          userName: result[0].user_name,
        };
        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Email and Password are correct`,
          token: token,
          user_name: result[0].user_name,
        });
      }
    });
  }
};

//------------------------------------------------------------------

//adding captch backend verification

const CaptchaAuth = (req, res) => {
  const captch_token = req.headers.authorization.split(" ").pop();
  const secretkey = "6LfRDdMcAAAAAMmO6g1abMS8pJ-U7nE1MReyXq0N";
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captch_token}`;

  request(url, function (err, response, body) {
    //the body is the data that contains success message
    body = JSON.parse(body);
    res.send({ success: "pass", response: response });

  });
};

module.exports = { login, CaptchaAuth };
