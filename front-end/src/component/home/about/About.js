import React from "react";
import "../about/about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="title ">
          <h2 className="section-title">About</h2>
        </div>
        <div className="content">
          <div className="column col-left ">
            <div className="img-card">
              <img src="./images/home.png" alt="home" />
            </div>
          </div>
          <div className="column col-right">
            <h3 className="content-title">
              {" "}
              Increase demand and create excitement for your products using our
              fully hosted online auction software.
            </h3>
            <hr />
            <p>
              Selling your products quickly and easily, while creating
              excitement as the timer counts down on your auction, has never
              been simpler.
            </p>
            <Link to="/about">
              <button className="button">Read More</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
