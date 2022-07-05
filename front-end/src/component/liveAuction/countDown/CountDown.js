import React, { useState, useEffect } from "react";
import "./style.css";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import jwtDecode from "jwt-decode";
import setAmount from "../../../actions/stripeAction";
moment.locale("jo");

function CountDown(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [startAgain, setStartAgain] = useState("");
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const [userID, setUserID] = useState("");
  const tokenHolder = useSelector((state) => {
    return {
      token: state.tokenReducer.token,
    };
  });
  let timeinterval;
  const { data } = useSelector((state) => {
    return {
      data: state.auctionReducer,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      const auction = {
        start_date: moment(data.auction.start_date)
          .utcOffset(0, false)
          .format("YYYY-MM-DD HH:mm:ss"),
        end_date: moment(data.auction.end_date)
          .utcOffset(0, false)
          .format("YYYY-MM-DD HH:mm:ss"),
      };
      props.btnDisableHandler(new Date(auction.start_date) < new Date());

      let date;

      if (new Date(auction.start_date) > new Date()) {
        //is the auction start ??
        date = Date.parse(auction.start_date);
      } else {
        //is the auction not end ??
        if (new Date(auction.end_date) > new Date()) {
          date = Date.parse(auction.end_date);
        } else {
          //the auction is end
          // isTimerEnd = true;
          setIsTimerEnd(true);

          //check whether the logged in  user is the auction closed on user
          if(tokenHolder.token)
          axios
            .post(
              "http://localhost:5000/auctions/payment",
              { auction_id: props.auctionId },
              {
                headers: {
                  Authorization: `Bearer ${tokenHolder.token}`,
                },
              }
            )
            .then((result) => {
              dispatch(setAmount(result.data.result[0].bid_value));
              setUserID(result.data.result[0].user_id);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
      if (!isTimerEnd) {
        //the timer will start
        const restDate = new Date(date - Date.parse(new Date()));
        const deadline = new Date(
          Date.parse(new Date()) + Date.parse(restDate) //26 * 1 * 60 * 60 * 1000
        );
        InitializeClock(deadline);
      }
    }, 500);

    return () => {
      clearInterval(timeinterval);
    };
  }, [startAgain]);

  //  const {setDays,setHours,setMinutes,setSeconds}=data.children

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function InitializeClock(endtime) {
    function updateClock() {
      const t = getTimeRemaining(endtime);
      setDays(t.days);
      setHours(("0" + t.hours).slice(-2));
      setMinutes(("0" + t.minutes).slice(-2));
      setSeconds(("0" + t.seconds).slice(-2));

      if (t.total <= 0) {
        clearInterval(timeinterval);

        if (!isTimerEnd) {
          setStartAgain(true);
        }
      }
    }
    updateClock();
    timeinterval = setInterval(updateClock, 0);
  }
  return (
    <>
      <div
        className="close_div"
        style={{ visibility: isTimerEnd ? "visible" : "hidden" }}
      >
        <h1 style={{color:"white"}}>this auction has been closed</h1>
        <button className="buttonpayment"
          onClick={() => {
            history.push(`/Home`);
          }}
        >
          back to home
        </button>
        {tokenHolder.token&&jwtDecode(tokenHolder.token).userId === userID && (
          <button className="buttonpayment"
            onClick={() => {
              history.push(`/payment`);
            }}
          >
            Payment
          </button>
        )}
      </div>
      <div id="clockdiv">
        <div>
          <div className="smalltext">Days</div>
          <span className="days">{days}</span>
        </div>
        <div>
          <div className="smalltext">Hours</div>
          <span className="hours">{hours}</span>
        </div>
        <div>
          <div className="smalltext">Minutes</div>
          <span className="minutes">{minutes}</span>
        </div>
        <div>
          <div className="smalltext">Seconds</div>
          <span className="seconds">{seconds}</span>
        </div>
      </div>
    </>
  );
}
export default CountDown;
