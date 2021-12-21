import React, { useState } from "react";
import axios from "axios";
import { store } from "react-notifications-component";

const Index3 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const SendContactData = () => {
    try {
      if (email === "" && phone == "") {
        return;
      }
      let url = "https://nameless-sea-13764.herokuapp.com/addContactData";
      let temp = {
        name,
        email,
        phone,
        subject: message,
      };
      axios.post(url, temp).then(
        (res) => {
          store.addNotification({
            title: "",
            message: `${res.data.msg}`,
            type: "success",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          setemail("");
          setmessage("");
          setphone("");
          setname("");

          // alert(res.data.message)
          console.log("data response:::", res);
        },
        (error) => {
          store.addNotification({
            title: "",
            message: `${error}`,
            type: "danger",
            insert: "bottom-right",
            container: "bottom-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });

          console.log("data response error:::", error);
        }
      );
    } catch (error) {
      store.addNotification({
        title: "",
        message: `${error}`,
        type: "danger",
        insert: "bottom-right",
        container: "bottom-right",
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      console.log("data response error:::", error);
    }
  };

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg main_header ">
          <div className="container">
            <a class="navbar-brand">
              <img src="/images/flyweis_logo.png" alt="logo" />
            </a>
          </div>
        </nav>
        <div className="main_header_banner">
          <img src=" /images/service/Services.jpg" alt="" />
        </div>

        <div>
          <div className="ask-question col-lg-12 col-md-12">
            <h3 className="enquiry_heading">DO YOU HAVE PROJECT IN MIND?</h3>
            <p className="text-center">
              Our Expert will Assist You About Your Project and Develop as Per
              Your Requirement
            </p>

            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    autoComplete="off"
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    required
                    className="form-control"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    name="name"
                    id="email"
                    className="form-control"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    rows="3"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Description"
                    value={message}
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button
                  className="default-btn btn-two"
                  onClick={SendContactData}
                >
                  <span className="btn-whatsapp-pulse">
                    <i class="bx bxl-whatsapp"></i>
                  </span>
                  <span className="label">Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index3;
