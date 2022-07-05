import React from "react";
import "../section/section.css";
function Section() {
  return (
    <>
      <div className="services" id="port">
        <div className="containerr">
          <div className="title ">
            <h1 className="section-title">Amazing Features</h1>
            <p>
              A solution exists for your specific needs, whether your a small
              non-profit or a fortune 500 our product can be customized to match
              your project requirements
            </p>
          </div>
          <div className="services-content">
            <div className="card-1">
              <img src="./images/features-1.jpeg" alt="" />
              <div className="info-1">
                <h3>Enterprise</h3>
                <p>
                  Do you have an existing back end inventory system that needs
                  to be integrated, or specific shipping rules that apply to
                  your auction products? No problem, with over 25 years of
                  experience we can design a solution for your needs.
                </p>
              </div>
            </div>
            <div className="card-1">
              <img src="./images/features-2.jpeg" alt="" />
              <div className="info-1">
                <h3>Business</h3>
                <p>
                  We can complement your current website with a new auction
                  site. Or, we can be the complete, standalone Internet presence
                  for your business. Either way you'll get first-className auction
                  functionality for your company.
                </p>
              </div>
            </div>
            <div className="card-1">
              <img src="./images/features-3.jpeg" alt="" />
              <div className="info-1">
                <h3>Fundraising</h3>
                <p>
                  Designed to be up and running quickly, we know how
                  overwhelming the idea of bringing your event online can be.
                  That's why we've made it a painless and efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
