import React from "react";
import { Link } from "react-router-dom";
import "../landing/landing.css";
function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landText">
          <h3>
            {" "}
            Online auction- <br />
            for business and fundraising
          </h3>
          <h4 style={{ marginBottom: "20px" }}>
            Online Auction- For business and fundraising Increase demand and
            create excitement for your products with our fully hosted online
            auction software. Follow these steps to participate in the auction.
          </h4>

          <Link to="/CreateItem">
            <button className="button">Create Item</button>
          </Link>
          <Link to="/CreateAuction">
            <button className="button1">Create Auction</button>
          </Link>
        </div>
        <img
          className="landingImg"
          style={{ marginLeft: "55%" }}
          src="http://pixner.net/saldom/saldom/assets/images/banner/pc.png"
          alt=""
        />
        <div></div>
      </div>
    </>
  );
}
export default Landing;
