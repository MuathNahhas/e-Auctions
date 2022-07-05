import React, { useState } from "react";
import GoogleBtn from "./googleAuth";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Avatar } from "primereact/avatar";
import "./loginForm.css";
import "./loginBtn.css";

const SignUp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [disable, setDisable] = useState(true);
  const history = useHistory();

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.phone) {
      errors.phone = "Phone is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }
    if (errors) {
      setDisable(false);
    }
    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(false);

    console.log(formData);
    console.log(data);
    axios
      .post("http://localhost:5000/users", {
        user_name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.data.success) {
          history.push("/login");
        }

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="p-mt-2">Suggestions</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="register_div">
      <img
        className="register_image"
        style={{
          width: "55%",
        }}
        alt="person"
        src="./images/preview.jpg"
      ></img>

      <Divider layout="vertical">
        <div className="p-d-inline-flex p-ai-center">
          <i className="pi pi-lock"></i>
        </div>
      </Divider>
      <div className="p-d-flex">
        <div className="form-demo">
          <Dialog
            visible={showMessage}
            onHide={() => setShowMessage(false)}
            position="top"
            footer={dialogFooter}
            showHeader={false}
            breakpoints={{ "960px": "80vw" }}
            style={{ width: "30vw" }}
          >
            <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
              <i
                className="pi pi-check-circle"
                style={{ fontSize: "5rem", color: "var(--green-500)" }}
              ></i>
              <h5>Registration Successful!</h5>
            </div>
          </Dialog>

          <div className="p-d-flex p-jc-center">
            <div className="card">
              <div style={{ textAlign: "center" }}>
                <h5 className="p-text-center">Sign-Up </h5>
                <Avatar
                  icon="pi pi-user"
                  className="p-mr-2 avatar"
                  size="large"
                  style={{
                    backgroundColor: "#574B8A",
                    color: "#ffffff",
                  }}
                  shape="circle"
                />
              </div>
              <Form
                onSubmit={onSubmit}
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={validate}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} className="p-fluid">
                    <Field
                      name="name"
                      render={({ input, meta }) => (
                        <div className="p-field">
                          <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-users" />
                            <InputText
                              id="name"
                              {...input}
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                              })}
                            />
                            <label
                              htmlFor="name"
                              className={classNames({
                                "p-error": isFormFieldValid(meta),
                              })}
                            >
                              Name*
                            </label>
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="phone"
                      render={({ input, meta }) => (
                        <div className="p-field">
                          <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-phone" />
                            <InputText
                              id="phone"
                              {...input}
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                              })}
                            />
                            <label
                              htmlFor="phone"
                              className={classNames({
                                "p-error": isFormFieldValid(meta),
                              })}
                            >
                              Phone No.*
                            </label>
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />

                    <Field
                      name="email"
                      render={({ input, meta }) => (
                        <div className="p-field">
                          <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-envelope" />
                            <InputText
                              id="email"
                              {...input}
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                              })}
                            />
                            <label
                              htmlFor="email"
                              className={classNames({
                                "p-error": isFormFieldValid(meta),
                              })}
                            >
                              Email*
                            </label>
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="password"
                      render={({ input, meta }) => (
                        <div className="p-field">
                          <span className="p-float-label">
                            <Password
                              id="password"
                              {...input}
                              toggleMask
                              className={classNames({
                                "p-invalid": isFormFieldValid(meta),
                              })}
                              header={passwordHeader}
                              footer={passwordFooter}
                            />
                            <label
                              htmlFor="password"
                              className={classNames({
                                "p-error": isFormFieldValid(meta),
                              })}
                            >
                              Password*
                            </label>
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />
                    <Field
                      name="accept"
                      type="checkbox"
                      render={({ input, meta }) => (
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="accept"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="accept"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            I agree to the terms and conditions*
                          </label>
                        </div>
                      )}
                    />

                    <Button
                      disabled={disable}
                      type="submit"
                      label="Submit"
                      className="p-mt-2 submit_btn"
                    />
                    <div
                      style={{
                        fontSize: "10px",
                        paddingTop: "10%",
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center",
                        gap: "1%",
                      }}
                    ></div>
                    <div
                      style={{
                        fontSize: "10px",
                        paddingTop: "1%",
                        display: "flex",
                        flexDirection: "row",
                        textAlign: "center",
                      }}
                    >
                      <GoogleBtn></GoogleBtn>

                      <img
                        style={{ width: "80px" }}
                        src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
                        alt=""
                      ></img>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
