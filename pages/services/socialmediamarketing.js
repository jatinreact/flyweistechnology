// import React from 'react'
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import React, { Component } from "react";
import ServiceSidebar from ".././../components/ServiceDetails/ServiceSidebar";
import AskQuestionForm from ".././../components/ServiceDetails/AskQuestionForm";

const socialmediamarketing = () => {
  return (
    <>
      <Navbar />

      <div className="blog_img_banner">
        <img src="/images/service/SOCIAL_MARKETING.png" alt="" />
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

                <h3>Social Media Marketing</h3>

                <p>
                  Social media marketing makes use of popular social media
                  platforms including, but not limited to, Facebook, LinkedIn,
                  Twitter, Instagram, YouTube, and Pinterest. Social media
                  marketing includes creating and sharing content about your
                  business on social media where it can be used to specifically
                  target your custom audience, and build a base of loyal
                  customers. It is one of the easiest and quickest ways to reach
                  your customers. The team of social media experts at our
                  company make sure to leverage the full power of social media
                  platforms for your business. We understand your business
                  requirements and accordingly then use the benefits of each
                  platform to our advantage by targeting highly specific
                  audiences in a cost-effective manner. Brand recognition plays
                  a very important role for any business and hence social media
                  marketing for a business should make use of a proper content
                  strategy so as to streamline the flow of information. This
                  generally helps businesses to garner positive reviews from
                  followers. Social media is a powerful tool for your business
                  in order to increase website traffic and raise awareness among
                  the target audience.
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
                        <img src="/images/social med marketing banner3.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Social Media Marketing</h1>
        <p className="blog_marg">Social media marketing makes use of popular social media platforms including, but not limited to, Facebook, LinkedIn, Twitter, Instagram, YouTube, and Pinterest. Social media marketing includes creating and sharing content about your business on social media where it can be used to specifically target your custom audience, and build a base of loyal customers. It is one of the easiest and quickest ways to reach your customers. The team of social media experts at our company make sure to leverage the full power of social media platforms for your business. We understand your business requirements and accordingly then use the benefits of each platform to our advantage by targeting highly specific audiences in a cost-effective manner. Brand recognition plays a very important role for any business and hence social media marketing for a business should make use of a proper content strategy so as to streamline the flow of information. This generally helps businesses to garner positive reviews from followers. Social media is a powerful tool for your business in order to increase website traffic and raise awareness among the target audience.</p>
              </div> */}

      <Footer />
    </>
  );
};

export default socialmediamarketing;
