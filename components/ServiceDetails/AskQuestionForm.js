import React, { useState } from "react";
import axios from "axios";
import { store } from "react-notifications-component";

const AskQuestionForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const SendContactData = () => {
    try {
      if (email === "" && phone == "") {
        return;
      }
      // let url = "https://nameless-sea-13764.herokuapp.com/addContactData";
      let url = "https://flywies.herokuapp.com/addContactData";
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
    <div className="ask-question">
      <h3 className="enquiry_heading">Enquire Now</h3>

      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              id="name"
              autoComplete="off"
              className="form-control"
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              autoComplete="off"
              name="email"
              name="name"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              id="email"
              className="form-control"
              required
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <input
              autoComplete="off"
              type="text"
              name="phone_number"
              id="phone_number"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              required
              className="form-control"
              placeholder="Your Phone"
            />
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              cols="30"
              rows="5"
              required
              placeholder="Tell us about your requirements"
            ></textarea>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <button className="default-btn btn-two" onClick={SendContactData}>
            <span className="label">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionForm;
