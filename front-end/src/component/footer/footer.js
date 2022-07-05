import React from "react";
import "./footer.css";
import { GrFacebookOption, GrTwitter, GrLinkedin } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="cont">
          <div className="row-footer">
            <div className="col-footer">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="https://www.a.com">About us</a>
                </li>
                <li>
                  <a href="https://www.a.com">our services</a>
                </li>
                <li>
                  <a href="https://www.a.com">privacy policy</a>
                </li>
                <li>
                  <a href="https://www.a.com">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="col-footer">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="https://www.a.com">FAQ</a>
                </li>
                <li>
                  <a href="https://www.a.com">shipping</a>
                </li>
                <li>
                  <a href="https://www.a.com">Returns</a>
                </li>
                <li>
                  <a href="https://www.a.com">Payment options</a>
                </li>
              </ul>
            </div>
            <div className="col-footer">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="https://www.amazon.com">Amazon</a>
                </li>
                <li>
                  <a href="https://www.alibaba.com">AliBaba</a>
                </li>
                <li>
                  <a href="https://www.modanisa.com">Modanisa</a>
                </li>
                <li>
                  <a href="https://www.adidas.com">Adidas</a>
                </li>
              </ul>
            </div>
            <div className="col-footer">
              <h4>Follow us</h4>
              <div className="social">
                <a href="https://www.facebook.com/">
                  <GrFacebookOption />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/">
                  <GrTwitter />
                </a>
                <a href="https://www.linkedin.com/">
                  <GrLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
