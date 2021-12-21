import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner";

class Index2 extends Component {
  render() {
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
            <div className="container">
              <div className="ask-question col-lg-12 col-md-12 main_form_header">
                <h3 className="enquiry_heading">
                  DO YOU HAVE PROJECT IN MIND?
                </h3>
                <p className="text-center">
                  Our Expert will Assist You About Your Project and Develop as
                  Per Your Requirement
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      {/* <input
                        type="text"
                        autoComplete="off"
                        name="Description"
                        className="form-control"
                        required
                        placeholder="
                      Description"
                      /> */}

                      <textarea
                        rows="3"
                        autoComplete="off"
                        className="form-control"
                        required
                        placeholder="Description"
                      />
                    </div>
                  </div>

                  {/* <div className="col-lg-12 col-md-12">
                    <button className="default-btn btn-two">
                      <span className="label">Send</span>
                    </button>
                  </div> */}

                  <div className="col-lg-12 col-md-12">
                    <button className="default-btn btn-two">
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
        </div>
      </>
    );
  }
}

export default Index2;
