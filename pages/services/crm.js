import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";

import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const crm = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/service/CRM.png" alt="" />
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

                <h3>CRM</h3>
                <p>
                  All businesses that are serving end customers need some form
                  of a Customer Relationship Management (CRM) tool to manage the
                  customer support and sales process effectively. We provide CRM
                  development and integration services for all businesses from
                  startups to enterprises. We can develop custom CRM
                  applications and also work on integrating existing popular CRM
                  solutions such as Salesforce, Zoho, and HubSpot. We consult
                  all stakeholders to understand your business requirements and
                  accordingly provide the best possible solution. To know more
                  about our CRM services, kindly get in touch!
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
                        <img src="/images/crm.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">CRM</h1>
        <p className="blog_marg">All businesses that are serving end customers need some form of a Customer Relationship Management (CRM) tool to manage the customer support and 
            sales process effectively. We provide CRM development and integration services for all businesses from startups to enterprises.
             We can develop custom CRM applications and also work on integrating existing popular CRM solutions such as Salesforce, Zoho, and HubSpot. We consult all stakeholders to
              understand your business requirements and accordingly provide the best possible solution. To know more about our CRM services, kindly get in touch!</p>
              </div>
            */}

      <Footer />
    </>
  );
};

export default crm;
