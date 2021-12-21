import React, { useState, useEffect } from "react";
import axios from "axios";
import { store } from "react-notifications-component";
import Script from "next/script";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";

const Index4 = () => {
  const [show, setShow] = useState(false);

  const [amount, setamount] = useState(null);
  const [name, setname] = useState("");

  const [description, setdescription] = useState("");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 992) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const SendpaymentData = (des) => {
    try {
      let url = "https://flywies.herokuapp.com/sendPaymentData";
      let temp = {
        name: name,
        amount: amount,
        description: des + " \n" + description,
      };
      axios.post(url, temp).then(
        (res) => {
          console.log("data flyweis:::", res);
          // if (res.data.response.signatureIsValid === "false") {
          //   store.addNotification({
          //     title: "",
          //     message: "Payment Failed",
          //     type: "danger",
          //     insert: "top-right",
          //     container: "top-right",
          //     dismiss: {
          //       duration: 5000,
          //       onScreen: true,
          //     },
          //   });
          // } else {
          //   store.addNotification({
          //     title: "",
          //     message: "Payment Success",
          //     type: "success",
          //     insert: "top-right",
          //     container: "top-right",
          //     dismiss: {
          //       duration: 5000,
          //       onScreen: true,
          //     },
          //   });
          // }
        },

        (error) => {
          console.log("data response error:::", error);
        }
      );
    } catch (error) {
      console.log("data response error:::", error);
    }
  };

  const proceeds = (amount) => {
    if (amount !== "") {
      var options = {
        key: "rzp_live_szpETIIqZnUItv",
        amount: amount * 100,
        currency: "INR",
        name: "Flyweis Technology",
        description: "Transaction",
        first: "Transaction",

        image: "/images/logo_payment.png",
        order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          SendpaymentData("Payment Successfull");

          // console.log(response.razorpay_payment_id);
          // console.log(response.razorpay_order_id);
          // console.log(response.razorpay_signature);
          // alert(response.data.response.signatureIsValid);
        },
        // "prefill": {
        //     "name": "Gaurav Kumar",
        //     "email": "gaurav.kumar@example.com",
        //     "contact": "9999999999"
        // },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        SendpaymentData("Payment Not Successfull");
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
      });
      rzp1.open();
    } else {
      alert("Enter Valid Amount");
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <Navbar />
      <MainBanner />
      {/* <PageBanner
        pageTitle="Service "
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
      /> */}

      <div>
        {/* <nav class="navbar navbar-expand-lg main_header ">
          <div className="container">
            <a class="navbar-brand">
              <img src="/images/flyweis_logo.png" alt="logo" />
            </a>
          </div>
        </nav> */}
        {/* <div className="main_header_banner mt-5">
          <img src=" /images/service/paymentSecure.png" alt="" />
        </div> */}

        <div>
          <div className="ask-question col-lg-12 col-md-12">
            {/* <h3 className="enquiry_heading">DO YOU HAVE PROJECT IN MIND?</h3>
            <p className="text-center">
              Our Expert will Assist You About Your Project and Develop as Per
              Your Requirement
            </p> */}

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
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <input
                    type="number"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => {
                      setamount(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                <div className="form-group">
                  <textarea
                    rows="3"
                    autoComplete="off"
                    className="form-control"
                    required
                    placeholder="Description"
                    value={description}
                    onChange={(e) => {
                      setdescription(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button
                  className="default-btn btn-two"
                  onClick={() => proceeds(amount)}
                  // onClick={SendpaymentData}
                >
                  <span className="btn-whatsapp-pulse">
                    <i class="bx bxl-whatsapp"></i>
                  </span>
                  <span className="label">Pay Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index4;
