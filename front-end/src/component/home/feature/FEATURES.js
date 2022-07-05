import React from "react";
import "../feature/feature.css";
function FEATURES() {
  return (
    <>
      <section className="feature" id="contact">
        <div className="title ">
          <h2 className="section-title">Fundraising Features</h2>
        </div>
        <div className="content">
          <div className="row-f">
            <div className="feature-card">
              <div className="contact-icon">
                <img src="./images/c-1.png" alt="" />
              </div>
              <div className="info">
                <h3>Easy-to-Use</h3>
                <p>
                  We realize you may not be a technical expert. Don't worry, we
                  keep it simple for you.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="contact-icon">
                <img src="./images/c-2.png" alt="" />
              </div>
              <div className="info">
                <h3>Mobile Friendly</h3>
                <p>
                  Designed with a responsive layout, your auction site will look
                  great from desktop to cellphone.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="contact-icon">
                <img src="./images/c-3.png" alt="" />
              </div>
              <div className="info">
                <h3>Simple Invoicing</h3>
                <p>
                  Invoice bidders with the click of a button. E-mail or print
                  custom invoices in bulk with ease.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="contact-icon">
                <img src="./images/c-5.png" alt="" />
              </div>
              <div className="info">
                <h3>Friendly Support</h3>
                <p>
                  Have a question? Get support from our knowledgeable and
                  experienced staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default FEATURES;
