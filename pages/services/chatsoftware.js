// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const chatsoftware = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/service/CHAT.png" alt="" />
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

                <h3>Chat Software</h3>
                <p>
                  Real-time communication has become very important to engage
                  and retain customers, more so when they are browsing your
                  company website or using its mobile application. This has put
                  a lot of emphasis on the use of robust and secure chat
                  software which can be integrated with websites and mobile
                  apps. This software allows company representatives to interact
                  with the website visitor whilst he/she is browsing the website
                  and helps the business in improving lead generation. We offer
                  custom chat software development and integration services for
                  businesses.
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
                        <img src="/images/chat.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Chat Software</h1>
        <p className="blog_marg">Real-time communication has become very important to engage and retain customers, more so when they are browsing your company website or using its mobile application. This has put a lot of emphasis on the use of robust and secure chat software which can be integrated with websites and mobile apps. This software allows company representatives to interact with the website visitor whilst he/she is browsing the website and helps the business in improving lead generation. We offer custom chat software development and integration services for businesses.</p>
              </div> */}

      <Footer />
    </>
  );
};

export default chatsoftware;
