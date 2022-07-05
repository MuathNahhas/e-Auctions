import "./CreateItem.css";
import React, { useState, useRef } from "react";
import "../createItem/CreateItem.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { storage } from "./firebase";
import swal from "sweetalert";
import { Toast } from "primereact/toast";
function CreateItem() {
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

      default:
        break;
    }
  };
  const state = useSelector((state) => {
    return {
      token: state.tokenReducer.token,
    };
  });
  const [images, setImages] = useState(null); //for complete the fuction of firebase
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(); //to send name of photo to database
  const Title = (t) => {
    setTitle(t.target.value);
  };
  const Details = (d) => {
    setDetails(d.target.value);
  };
  const handleChange = (e) => {
    if (state.token) {
      if (e.target.files[0]) {
        setImages(e.target.files[0]);
        setImage(e.target.files[0].name);
      }
    } else {
      showMsg(6);
    }
  };
  const handelUpload = () => {
    if (state.token) {
      const uploadTask = storage.ref(`/images/${images.name}`).put(images);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(images.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              axios
                .post(
                  "http://localhost:5000/items",
                  { title, details, image: url },
                  {
                    headers: {
                      Authorization: `Bearer ${state.token}`,
                    },
                  }
                )

                .then((result) => {
                  swal("Good job!", "Item Created Successfuly", "success");
                  setTitle("");
                  setDetails("");
                })
                .catch((err) => {
                  swal("Try Again!");
                  console.log(err);
                });
            });
        }
      );
    } else {
      showMsg(6);
    }
  };
  return (
    <>
      <div className="Body-FORM">
        <div className="container">
          <div className="form">
            <img src="./images/a-1.png" alt="" />
            <h1>Create Item</h1>
            <div className="container-form">
              <input
                value={title}
                type="text"
                placeholder="Title"
                required
                onChange={Title}
              />
              <input type="file" onChange={handleChange} />
              <textarea
                value={details}
                onChange={Details}
                className="textarea"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="description"
              ></textarea>
              <div className="clearfix">
                <button
                  type="submit"
                  className="signupbtn"
                  onClick={handelUpload}
                >
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
export default CreateItem;
