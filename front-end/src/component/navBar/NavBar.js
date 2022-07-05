import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserName } from "../../actions/authAction";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const tokenHolder = useSelector((state) => {
    return {
      token: state.tokenReducer.token,
    };
  });
  const [LogedIn, setLogedIn] = useState(
    <li className="nav-item">
      <Link className="nav-link" to="/login">
        <i className="far fa-copy"></i>Logout
      </Link>
    </li>
  );
  const IsLogedIn = () => {
    if (!tokenHolder.token.length) {
      setLogedIn(
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <i className="far fa-copy"></i>Login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/SignUp">
              <i className="far fa-copy"></i>SignUp
            </Link>
          </li>
        </>
      );
    } else {
      setLogedIn(
        <li className="nav-item">
          <Link
            className="nav-link"
            onClick={() => {
              localStorage.setItem("token", "");
              localStorage.setItem("userName", "");
              dispatch(setToken(""));
              dispatch(setUserName(""));
              return false;
            }}
            to="/login"
          >
            <i className="far fa-copy"></i>Logout
          </Link>
        </li>
      );
    }
  };
  useEffect(() => {
    IsLogedIn();
    return () => {
      setLogedIn(
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <i className="far fa-copy"></i>Login
          </Link>
        </li>
      );
    };
  }, [tokenHolder.token.length]);

  return (
    <div className="headar">
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <img src="./images/eActions logo.png" alt="logo" style={{marginLeft:"100px"}} height="50px" />

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <div>
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  <i className="fas fa-tachometer-alt"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AllAuctions">
                  <i className="far fa-chart-bar"></i>All Auctions
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/ContactUs">
                  <i className="far fa-address-book"></i>ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OrgChart">
                  <i className="far fa-chart-bar"></i>Our Team
                </Link>
              </li>
              {tokenHolder.token && (
                <li className="nav-item">
                  <Link className="nav-link" to="/calender">
                    <i className="far fa-calendar-alt"></i>Auction Scheduler
                  </Link>
                </li>
              )}
            </div>
            {LogedIn}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
