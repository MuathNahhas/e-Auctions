import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyItem.css";
import swal from "sweetalert";

export const MyItem = () => {
  const [item, setItem] = useState();
  const [title, setTitlem] = useState();
  const [details, setDetails] = useState();
  const token = localStorage.getItem("token");
  const updateTitle = (u) => {
    setTitlem(u.target.value);
  };
  const updateDetail = (u) => {
    setDetails(u.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.items);
        setItem(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const click = (e, index) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/items/${e}`)
          .then((result) => {
            if (result.data.success) {
              let arr = [...item];
              arr.splice(index, 1);
              setItem([...arr]);
              swal("successfully Deleted", {
                icon: "success",
              });
            } else {
              swal(`${result.data.message}`);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        swal("Your item is safe!");
      }
    });
  };
  const toUpdate = (e, index) => {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Update Item Title And Detail",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        axios
          .put(`http://localhost:5000/items/${e}`, { title, details })
          .then((result) => {
            if (result.data.success) {
              swal(`${result.data.message}`);
            }
          })
          .catch((err) => {
            swal(`${err}`);
          });
      } else {
        swal("Your information of item was safe!");
      }
    });
  };
  return (
    <>
      <div className="word">
        <div className="sec title-page">
          <h2>
            <span>My Items</span>
          </h2>
        </div>
      </div>
      <div className="container_item">
        {item &&
          item.map((element, index) => {
            return (
              <div className="cardd">
                <div className="image">
                  <img alt="Card" src={`${element.image}`} />
                </div>
                <div className="info">
                  <h3>Update Title</h3>
                  <input
                    defaultValue={element.title}
                    onChange={updateTitle}
                  ></input>
                  <h3>Update Detail</h3>
                  <textarea rows="6" onChange={updateDetail}>
                    {element.details}
                  </textarea>
                  <div className="btn">
                    <button
                      className="btn-2"
                      onClick={() => toUpdate(element.item_id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn-1"
                      onClick={() => click(element.item_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
