// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const appdevelopment = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
          <img src="/images/service/ARDROID.jpg" alt="" />
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

                <h3>App Development</h3>
                <p>
                  The 21st century is the era of smartphones, and mobile
                  applications are taking over the internet with a bang. Today,
                  there are millions of apps available across multiple app
                  stores such as Google Play Store, Apple App Store, Windows
                  Store, and other such platforms. The foundations for mobile
                  app development lies in the progressively conventional
                  programming based development. Mobile apps are also known to
                  leverage the specific features provided by the hardware
                  specifications of mobile devices such as accelerometers or
                  temperature sensors in a smart watch. While earlier each
                  application was developed specific to one particular device
                  type, today there are hundreds of different models available
                  which more or less provide the same functionality. This has
                  forced companies to now develop a mobile app which can run
                  seamlessly across multiple devices of varying configurations
                  and still provide the same user experience. To hire the best
                  mobile application development company in Noida, you need to
                  consider various factors such as experience, expertise,
                  budget, technology, number of projects delivered, support
                  terms and conditions, etc. Also, never disclose your app idea
                  in its entirety to an app development company without signing
                  an NDA. As a trusted mobile app development company, our
                  project managers remain in constant communication with the
                  clients and the stakeholders to appraise them of all
                  development and updates in their project. Our technical teams
                  are well qualified and experienced to see each project to
                  successful completion. Wherever required, we even hire third
                  party consultants who can consult us and the clients on best
                  practices or new features to incorporate into the app being
                  developed. And this is all done while working within the
                  framework of data protection policies.
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
                        <img src="/images/app de banner.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">App Development</h1>
        <p className="blog_marg">The 21st century is the era of smartphones, and mobile applications are taking over the internet with a bang. Today, there are millions of apps available across multiple app stores such as Google Play Store, Apple App Store, Windows Store, and other such platforms. The foundations for mobile app development lies in the progressively conventional programming based development. Mobile apps are also known to leverage the specific features provided by the hardware specifications of mobile devices such as accelerometers or temperature sensors in a smart watch. While earlier each application was developed specific to one particular device type, today there are hundreds of different models available which more or less provide the same functionality. This has forced companies to now develop a mobile app which can run seamlessly across multiple devices of varying configurations and still provide the same user experience. To hire the best mobile application development company in Noida, you need to consider various factors such as experience, expertise, budget, technology, number of projects delivered, support terms and conditions, etc. Also, never disclose your app idea in its entirety to an app development company without signing an NDA. As a trusted mobile app development company, our project managers remain in constant communication with the clients and the stakeholders to appraise them of all development and updates in their project. Our technical teams are well qualified and experienced to see each project to successful completion. Wherever required, we even hire third party consultants who can consult us and the clients on best practices or new features to incorporate into the app being developed. And this is all done while working within the framework of data protection policies.</p>
              </div>
         */}
      <Footer />
    </>
  );
};

export default appdevelopment;
