import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../business/business.css";
function Business() {
  const [limtAuction, setlimtAuction] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/auctions/limit`).then((res) => {
      setlimtAuction(res.data.result);
    });
  }, []);
  return (
    <>
      <div className="business" id="port">
        <div className="containerr">
          <div className="title">
            <h2 className="section-title">Business Features</h2>
            <p>
              Business Auctions are single-seller systems designed to allow
              clients the ability to list merchandise and/or services for sale
              as the exclusive seller
            </p>
          </div>
          <div className="business-content">
            {limtAuction &&
              limtAuction.map((element, index) => {
                return (
                  <div key={index} className="card-b">
                    <img src={element.image} alt="" />
                    <div className="info">
                      <p>{element.title}</p>
                      <h5>Starter Bid: {element.starter_bid} $</h5>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="business_button3">
            <Link to="/AllAuctions">
              <button className="btn_button3">All Auction</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Business;
