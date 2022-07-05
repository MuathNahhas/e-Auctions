import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../createAuction/CreateAuction.css";
import moment from "moment";
import "../createItem/CreateItem.css";
import swal from "sweetalert";
import { Toast } from "primereact/toast";
function CreateAuction() {
  const [starterBid, setStarterBid] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [bidJump, setBidJump] = useState();
  const [select, setSelect] = useState();
  const [item, setItem] = useState();
  const [empty, setEmpty] = useState();
  const token = localStorage.getItem("token");
  const toast = useRef(null);
  const showMsg = (msgNumber) => {
    switch (msgNumber) {
      case 6:
        toast.current.show({
          severity: "error",
          summary: "Error Message",
          detail: "you have to logIn first",
          life: 5000,
        });
        break;
        case 8:
          toast.current.show({
            severity: "info",
            summary: "info Message",
            detail: "there is no items added yet to open auction",
            life: 5000,
          });
          break;
     
        default:
        break;
    }
  };
  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:5000/items`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.items.length) {
            setItem(res.data.items);
          } else {
            showMsg(8)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      showMsg(6);
    }
  }, [token]);
  const starter_bid = (s) => {
    setStarterBid(s.target.value);
  };
  const start_date = (t) => {
    setStartDate(t.target.value);
  };
  const end_date = (e) => {
    setEndDate(e.target.value);
  };
  const bid_jump = (b) => {
    setBidJump(b.target.value);
  };
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const click = () => {
    console.log("muath", moment(startDate).format("YYYY-MM-DD HH:mm:ss"));
    axios
      .post(
        `http://localhost:5000/auctions`,
        {
          starter_bid: starterBid,
          start_date: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
          end_date: moment(endDate).format("YYYY-MM-DD HH:mm:ss"),
          bid_jump: bidJump,
          item_id: select,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setEmpty("");
        swal("Good job!", "Auction Created Successfuly", "success");
      })
      .catch((err) => {
        swal("Try Again!");
      });
  };
  return (
    <>
      <div className="Body-FORM">
        <div className="container">
          <div className="form">
            <img src="./images/a-1.png" alt="#" />
            <h1>Create Auction</h1>
            <div className="container-form">
              <select onChange={handleChange}>
                <option>Please Select Item</option>
                {item &&
                  item.map((element) => {
                    return (
                      <option value={element.item_id}>{element.title}</option>
                    );
                  })}
              </select>
              <input
                value={empty}
                type="number"
                placeholder="starter_bid"
                onChange={starter_bid}
              />
              <input
                value={empty}
                type="datetime-local"
                placeholder="start_date"
                onChange={start_date}
              />{" "}
              <input
                value={empty}
                type="datetime-local"
                placeholder="end_date"
                required
                onChange={end_date}
              />
              <input
                value={empty}
                type="number"
                placeholder="bid_jump"
                required
                onChange={bid_jump}
              />
              <div className="clearfix">
                <button type="submit" className="signupbtn" onClick={click}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toast ref={toast} />
      </div>
    </>
  );
}
export default CreateAuction;
