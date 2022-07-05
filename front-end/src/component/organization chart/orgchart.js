import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faYoutubeSquare,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Orgchart() {
  return (
    <div style={{ position: "relative", padding: " 10% 20% 20% 20%" }}>
      <Card.Title className="text-right">
        <h1>Meet Our Developers !</h1>
      </Card.Title>
      <div
        style={{
          backgroundColor: "#f0bc54",
          width: "100%",
          padding: "5%",
          transform: "rotate(10deg)",
        }}
      >
        <CardGroup
          style={{
            padding: "5%",
            width: "100%",
            backgroundColor: "#e6e2ed",
            borderRadius: "20px",
            transform: "rotate(-10deg)",
          }}
        >
          <Card
            style={{
              height: "55vh",

              border: "none",
              borderRadius: "20px",
              boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",
              background: "linear-gradient(#ebdcce, #fafafa)",
              margin: "2%",
            }}
            text="dark"
          >
            <Card.Img
              style={{
                background: "linear-gradient(145deg, #d6d6d6, #ffffff)",
                boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",
                height: "40%",
                width: "70%",
                margin: "10% auto ",
                borderRadius: "50%",
              }}
              variant="top"
              src="https://firebasestorage.googleapis.com/v0/b/bermuda-e0248.appspot.com/o/images%2F2017-05-15%2006.37.28.jpg?alt=media&token=e54ac234-1a07-444d-8524-f208b960e87b
"
            />
            <Card.Body>
              <Card.Title>Ahmed Okasha</Card.Title>
              <Card.Subtitle className="mb-5 text-muted">
                Web Developer
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "#E0655A",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faGoogle}
                size="3x"
                border
              ></FontAwesomeIcon>

              <FontAwesomeIcon
                style={{
                  color: "#506BA2",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faFacebook}
                size="3x"
                border
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                style={{
                  color: "#1482BB",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faLinkedin}
                size="3x"
                border
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="3x"
                border
                style={{
                  color: "red",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
              ></FontAwesomeIcon>
            </Card.Footer>
          </Card>
          <Card
            style={{
              height: "55vh",

              border: "none",
              background: "linear-gradient(#ebdcce, #fafafa)",

              borderRadius: "20px",
              boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",

              margin: "2%",
            }}
            text="dark"
          >
            <Card.Img
              style={{
                background: "linear-gradient(145deg, #d6d6d6, #ffffff)",
                boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",
                height: "40%",
                width: "70%",
                margin: "10% auto ",
                borderRadius: "50%",
              }}
              variant="top"
              src="https://firebasestorage.googleapis.com/v0/b/bermuda-e0248.appspot.com/o/images%2Fghazal2.jpg?alt=media&token=1b4e05b0-f2e3-43e7-8bcd-c78a46304591


"
            />
            <Card.Body>
              <Card.Title>Mohammed Ghazal</Card.Title>
              <Card.Subtitle className="mb-5 text-muted">
                Web Developer
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "#E0655A",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faGoogle}
                size="3x"
                border
              ></FontAwesomeIcon>

              <FontAwesomeIcon
                style={{
                  color: "#506BA2",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faFacebook}
                size="3x"
                border
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                style={{
                  color: "#1482BB",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faLinkedin}
                size="3x"
                border
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="3x"
                border
                style={{
                  color: "red",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
              ></FontAwesomeIcon>
            </Card.Footer>
          </Card>
          <Card
            style={{
              borderRadius: "20px",
              boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",
              background: "linear-gradient(#ebdcce, #fafafa)",
              border: "none",

              margin: "2%",

              height: "55vh",
            }}
            text="dark"
          >
            <Card.Img
              style={{
                background: "linear-gradient(145deg, #d6d6d6, #ffffff)",
                boxShadow: "20px 20px 60px #cacaca, -20px -20px 60px #ffffff",
                height: "40%",
                width: "70%",
                margin: "10% auto ",
                borderRadius: "50%",
              }}
              variant="top"
              src="https://firebasestorage.googleapis.com/v0/b/bermuda-e0248.appspot.com/o/images%2Fmuath.jpg?alt=media&token=9c958254-a110-4580-a189-60563f5af3f1
"
            />
            <Card.Body>
              <Card.Title>Muath Al Nahhas</Card.Title>
              <Card.Subtitle className="mb-5 text-muted">
                Web Developer
              </Card.Subtitle>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FontAwesomeIcon
                style={{
                  color: "#E0655A",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faGoogle}
                size="3x"
                border
              ></FontAwesomeIcon>

              <FontAwesomeIcon
                style={{
                  color: "#506BA2",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faFacebook}
                size="3x"
                border
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                style={{
                  color: "#1482BB",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
                icon={faLinkedin}
                size="3x"
                border
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faYoutubeSquare}
                size="3x"
                border
                style={{
                  color: "red",
                  background: "linear-gradient(145deg, #b3a08e, #ffffff)",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                }}
              ></FontAwesomeIcon>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Orgchart;
