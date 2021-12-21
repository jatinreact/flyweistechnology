// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const orm = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/service/ORM.png" alt="" />
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

                <h3>Online Reputation Management (ORM)</h3>
                <p>
                  Today it is not just feasible for a company to have an online
                  presence. It is equally important to continuously monitor what
                  the audience is speaking about them and accordingly, connect
                  with the audience. If the audience is posting positive
                  content, then your business should appreciate and thank them
                  for the support. If the audience is posting negative content,
                  then you should immediately reach out to the aggrieved persons
                  and understand their pain points to effectively resolve those
                  pain points and assure them of better services moving ahead.
                  ORM is the art of understanding your audience and customers,
                  empathizing with them, and showing them that you genuinely
                  care for them. As a reputed online reputation management
                  service provider, we understand this and ensure that we build
                  your brand with strong roots.
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
                        <img src="/images/orm banner.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Online Reputation Management (ORM)</h1>
        <p className="blog_marg">Today it is not just feasible for a company to have an online presence. It is equally important to continuously monitor what the audience is speaking about them and accordingly, connect with the audience. If the audience is posting positive content, then your business should appreciate and thank them for the support. If the audience is posting negative content, then you should immediately reach out to the aggrieved persons and understand their pain points to effectively resolve those pain points and assure them of better services moving ahead. ORM is the art of understanding your audience and customers, empathizing with them, and showing them that you genuinely care for them. As a reputed online reputation management service provider, we understand this and ensure that we build your brand with strong roots.</p>
              </div> */}

      <Footer />
    </>
  );
};

export default orm;
