import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Email Us:</h3>
                <p>info@flyweis.technology</p>
                <p>support@flyweis.technology</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                {/* <i className="bx bx-phone-call"></i> */}
                <i className="bx bx-location-plus"></i>
                <h3>USA</h3>
                <p>USA-1104 Avenue C Bayonne, New Jersey-07002, USA</p>
                <p>Tel. +18562132132</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>India</h3>
                <p>
                  C-18 First Floor, Acharya Niketan, Mayur Vihar Phase-1, Delhi,
                  110091
                </p>
                <p>Tel. +91 9811124255</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Canada</h3>
                <p>4792, Factory Lane, Lumsden,Newfoundland & Labrador</p>
                <p>Tel. +17092605591</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
