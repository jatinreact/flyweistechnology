// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const leadgeneration = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/service/LEADGENERATION.png" alt="" />
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <img
                    src="/images/services-details/services-details.jpg"
                    alt="Image"
                  />
                </div>

                <h3>Lead Generation</h3>

                <p>
                  PPC is a marketing technique to target a very specific portion
                  of the internet users and convert them into possible
                  customers. In PPC campaigns, you have to pay a small amount of
                  money every time your website or ad gets a click or a visitor.
                  It is a way to generate instant and highly targeted traffic
                  for your business. It provides instant results but comes with
                  a cost. PPC marketing is generally not affordable for smaller
                  companies due to the high costs associated with it. Our PPC
                  experts work on leading PPC platforms such as Google Ads,
                  Facebook Ads, Bing Ads, and Quora Ads. They know how to devise
                  strategies which will help to provide the maximum results on
                  your investment into paid ads. Our professionals are also
                  certified in Google Ads which adds to their credibility.
                </p>

                {/* <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img src="/images/services-details/services-details2.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Engine bay cleaned and dressed
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Door card panels cleaned
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Plastic trim enhanced
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Paint surface clay barred
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Alloy wheel treatment inside and out
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                {/* <AskQuestionForm /> */}
              </div>
            </div>

            <div className="col-lg-4">
              <AskQuestionForm />
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* <div className='banner_blog'>
                        <img src="/images/lead generation banner.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Lead Generation</h1>
        <p className="blog_marg">PPC is a marketing technique to target a very specific portion of the internet users and convert them into possible customers. In PPC campaigns, you have to pay a small amount of money every time your website or ad gets a click or a visitor. It is a way to generate instant and highly targeted traffic for your business. It provides instant results but comes with a cost. PPC marketing is generally not affordable for smaller companies due to the high costs associated with it. Our PPC experts work on leading PPC platforms such as Google Ads, Facebook Ads, Bing Ads, and Quora Ads. They know how to devise strategies which will help to provide the maximum results on your investment into paid ads. Our professionals are also certified in Google Ads which adds to their credibility.</p>
              </div> */}

      <Footer />
    </>
  );
};

export default leadgeneration;
