import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const customizedsoftware = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/service/CUSTOM_SOFTWARE.png" alt="" />
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

                <h3>Customized Software</h3>

                <p>
                  Many businesses need customized software to manage their
                  operations effectively. These businesses can vary from small
                  departmental stores to large corporations and manufacturing
                  industries. Automation is the need of the hour. Keeping this
                  in mind, we are offering custom software development where we
                  understand your business requirements in detail and
                  accordingly design, develop and deploy a fully-customized
                  software that meets your business requirements and is robust
                  and secure. To know more about how custom software can help
                  your business, kindly get in touch and we will be happy to
                  consult you.
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
                        <img src="/images/banner 1.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Customized Software</h1>
        <p className="blog_marg">Many businesses need customized software to manage their operations effectively. These businesses can vary from small departmental stores to large corporations and manufacturing industries. Automation is the need of the hour. Keeping this in mind, we are offering custom software development where we understand your business requirements in detail and accordingly design, develop and deploy a fully-customized software that meets your business requirements and is robust and secure. To know more about how custom software can help your business, kindly get in touch and we will be happy to consult you.</p>
              </div>
         */}
      <Footer />
    </>
  );
};

export default customizedsoftware;
