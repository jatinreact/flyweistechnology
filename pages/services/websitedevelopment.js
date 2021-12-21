// import React from 'react'
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';

import React, { Component } from 'react';
import ServiceSidebar from '.././../components/ServiceDetails/ServiceSidebar'
import AskQuestionForm from '.././../components/ServiceDetails/AskQuestionForm'

const websitedevelopment = () => {
    return (
        <>

<Navbar />


<div className="blog_img_banner">
        <img src="/images/service/WEB_DEVELOPMENT.png" alt="" />
      </div>

         <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/services-details/services-details.jpg" alt="Image" />
                                </div>

                                <h3>Website Development</h3>

                                <p>With the ongoing Covid-19 pandemic, it is evident that businesses need to transform into a digital working environment. The basis step for this digital transformation to take place is to get a professional website developed for your business that will allow your existing and potential customers to find you, get in touch with you, and avail of your services. We are a leading Web Development company that can design and develop visually appealing, functional, and secure websites for your business as per your business requirements.</p>
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
                        <img src="/images/website dev baner.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Website Development</h1>
        <p className="blog_marg">With the ongoing Covid-19 pandemic, it is evident that businesses need to transform into a digital working environment. The basis step for this digital transformation to take place is to get a professional website developed for your business that will allow your existing and potential customers to find you, get in touch with you, and avail of your services. We are a leading Web Development company that can design and develop visually appealing, functional, and secure websites for your business as per your business requirements.</p>
              </div> */}
        
            <Footer /> 
        </>
    )
}

export default websitedevelopment
