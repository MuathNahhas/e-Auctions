import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import "./loginBtn.css";
import { useDispatch } from "react-redux";
import { setToken, setUserName } from "../../actions/authAction";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// this client ID should put in .env file.
//-----------------------------------------
const clientId =
  "787313334015-8ikgfipkm1vi5t5fq9iapgls6urtarns.apps.googleusercontent.com";
//the following google auth component will be used in login & register components.
//-------------------------------------------------------------------
function GoogleBtn(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [token, setReqToken] = useState("");
  const onLoginSuccess = (res) => {
    setReqToken(res.tokenId);
    // for img : res.profileObj.imageUrl
    axios
      .post(
        "http://localhost:5000/login",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.tokenId);
        localStorage.setItem("userName", res.data.user_name);
        dispatch(setToken(res.data.tokenId));
        dispatch(setUserName(res.data.user_name));
        history.push(`/Home`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <GoogleLogin
        icon={false}
        clientId={clientId}
        buttonText="Sign In"
        render={(renderProps) => (
          <FontAwesomeIcon
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="google_icon"
            style={{
              color: "#ffa949",
              background: "linear-gradient(145deg, #b3a08e, #ffffff)",
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
            }}
            icon={faGoogle}
            size="3x"
            border
            spin
          ></FontAwesomeIcon>
        )}
        onSuccess={onLoginSuccess}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleBtn;
