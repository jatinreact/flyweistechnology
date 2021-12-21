import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";
import Footer from "../components/Layouts/Footer";

class Contact2 extends Component {
  render() {
    return (
      <>
        <section className="main-banner-area main-banner-area-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="banner-text">
                  <h1>World’s Leading Machine Learning Company</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida risus
                    commodo
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida risus
                    commodo
                  </p>

                  <div className="banner-btn">
                    {/* <Link href="/about-1">
                      <a className="default-btn">Learn More</a>
                    </Link>

                    <Link href="/contact">
                      <a className="default-btn">Contact Us</a>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ask-question">
                  <h3 className="enquiry_heading">Enquire Now</h3>

                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
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
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button className="default-btn btn-two">
                        <span className="label">Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact2;
