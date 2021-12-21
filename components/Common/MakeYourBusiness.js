import React, { Component } from "react";
import Link from "next/link";

class MakeYourBusiness extends Component {
  render() {
    return (
      <section className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>Make Your Business More Competitive And Enduring</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>Our Mission</h3>
                <p>
                  Our Mission is seeing businesses growing with our skills &
                  efforts, Which makes us more happy is that a business which
                  was associated with us and shows a growth that makes us more
                  motivated to do so.
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>Our Vision</h3>
                <p>
                  Our Vision is to create a name in the Industry which
                  associated with creating an environment for Businesses in
                  which they feel Confident, Independent in this growing techy
                  world. Most of the businesses who comes to us feels helpless &
                  our Vision to make them feel Confident.
                </p>
              </div>
              {/* 
                            <div className="business-btn">
                                <Link href="#">
                                    <a className="default-btn">
                                        Know Details
                                    </a>
                                </Link>
                            </div> */}
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">3840</span>
                    </h2>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">350</span>
                    </h2>
                    <p>Team Members</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">93%</span>
                    </h2>
                    <p>Happy Clients</p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 counter-nth">
                  <div className="single-counter">
                    <h2>
                      <span className="target">24*7</span>
                    </h2>
                    <p>Customer Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MakeYourBusiness;
