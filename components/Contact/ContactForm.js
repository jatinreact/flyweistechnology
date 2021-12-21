import React, { useState } from "react";
import axios from "axios";
import { store } from "react-notifications-component";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const SendContactData = () => {
    try {
      if (email === "" && phone == "") {
        return;
      }
      // let url = "https://nameless-sea-13764.herokuapp.com/addReviewData";
      let url = "https://flywies.herokuapp.com/addReviewData";
      let temp = {
        name,
        email,
        phone,
        subject,
        message,
      };
      axios.post(url, temp).then(
        (res) => {
          store.addNotification({
            title: "",
            message: `${res.data.msg}`,
            type: "success",
            insert: "top-right",
            container: "top-right",
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
          setemail("");
          setmessage("");
          setphone("");
          setname("");
          setsubject("");
          console.log("data response:::", res);
        },
        (error) => {
          store.addNotification({
            title: "",
            message: `${error}`,
            type: "danger",
            insert: "top-right",
            container: "top-right",
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
        insert: "top-right",
        container: "top-right",
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      console.log("data response error:::", error);
    }
  };

  return (
    <section className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
          {/* <span>Contact Us</span> */}
          <h2>Drop us a message for any query</h2>
          <p>
            Please Drop Message for your query, Our Team will respond you within
            3 Hours
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form" id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        autoComplete="off"
                        name="email"
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
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        autoComplete="off"
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

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        autoComplete="off"
                        className="form-control"
                        required
                        placeholder="Your Subject"
                        value={subject}
                        onChange={(e) => {
                          setsubject(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button
                      type="submit"
                      className="default-btn btn-two"
                      onClick={SendContactData}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
