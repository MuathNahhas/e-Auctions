import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import DonutChart from "react-donut-chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faUserTie } from "@fortawesome/free-solid-svg-icons";

import CardGroup from "react-bootstrap/CardGroup";

import "../profile/Profile.css";
function Profile() {
  const token = localStorage.getItem("token");

  const [profile, setprofile] = useState();
  const [user, setUser] = useState();
  const [auctions, setAuctions] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setprofile(res.data.items);
      });

    axios
      .get(`http://localhost:5000/auctions/user_auctions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAuctions(res.data.result.length);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.userData);
      });
  }, []);
  return (
    <>
      <div className="word">
        <div className="sec title-page">
          <h2>
            <span>My Profile</span>
          </h2>
        </div>
      </div>

      <div className="business" id="port">
        <div className="containerr">
          {user &&
            user.map((element, index) => {
              return (
                <CardGroup>
                  <Card
                    style={{
                      backgroundColor: "#F3F1F1",
                      padding: "10px",
                      height: "75vh",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        margin: "auto",
                        marginBottom: "10%",
                        fontSize: "15rem",
                        color: "#574B8A",
                      }}
                      icon={faUserTie}
                    />
                    <Card.Body style={{ margin: "auto" }}>
                      <h1 className=" text-muted">{element.user_name}</h1>

                      <Card.Text>
                        <FontAwesomeIcon icon={faAt} size="1x" />:{" "}
                        {element.email}
                      </Card.Text>
                      <Card.Text>
                        <FontAwesomeIcon icon={faPhone} size="1x" />:{" "}
                        {element.phone}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ height: "75vh" }}>
                    <Card.Body style={{ margin: "auto" }}>
                      <Card.Title className="text-center"></Card.Title>
                      <Card.Title
                        style={{ textAlign: "center", margin: "10px" }}
                      >
                        <h6 className="text-muted">
                          {element.user_name} Statistics
                        </h6>
                      </Card.Title>
                      <div style={{ padding: "30px", width: "100%" }}>
                        <DonutChart
                          style={{ border: "none", margin: "auto" }}
                          width={500}
                          innerRadius={0.8}
                          legend={true}
                          clickToggle={true}
                          colors={["#FFA949", "#655b90"]}
                          toggledOffset={0.1}
                          className="donutchart"
                          onMouseEnter={(item) => {
                            return item;
                          }}
                          onClick={(item, toggled) => {
                            if (toggled) {
                              return item;
                            } else {
                              return null;
                            }
                          }}
                          data={[
                            {
                              label: "Items",
                              value: profile.length,
                            },
                            {
                              label: "Auctions",
                              value: auctions,
                            },
                          ]}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </CardGroup>
              );
            })}

          <div className="containersd">
            <div style={{ backgroundColor: "#F3F1F1" }} className="word">
              <div
                style={{ backgroundColor: "#F3F1F1", color: "#484848" }}
                className="sec title-page"
              >
                <h2>
                  <span>My Items</span>
                </h2>
              </div>
            </div>
            <div className="containerrsd">
              {profile &&
                profile.map((element, index) => {
                  return (
                    <div className="cons">
                      <div className="divImages">
                        <img src={element.image} alt="" />
                      </div>

                      <h5 className="name">{element.title}</h5>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            style={{ backgroundColor: "#F3F1F1", paddingBottom: "20px" }}
            className="business_button3"
          >
            <Link to="/MyItem">
              <button className="btn_button3">Update Items</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
