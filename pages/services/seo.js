// import React from 'react'
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import React, { Component } from 'react';
import ServiceSidebar from '.././../components/ServiceDetails/ServiceSidebar'
import AskQuestionForm from '.././../components/ServiceDetails/AskQuestionForm'

const seo = () => {
    return (
        <>

<Navbar />


<div className="blog_img_banner">
                        <img src="/images/service/SEO.png" alt=""  />
                        
                        </div>

         <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-wrap">
                                <div className="service-img">
                                    <img src="/images/services-details/services-details.jpg" alt="Image" />
                                </div>

                                <h3>SEO</h3>

                                <p>SEO is a component of an overall SEO strategy for a business which focuses on optimizing the business to be found in search results in a localized or confined geographical area, generally confined to a city or town. It is most beneficial for companies who are providing services or selling products to customers in a particular geographical region. Local SEO differs from SEO in the fact that for local SEO, if a customer is searching for a specific service, they will be shown the service providers nearest to their location. This is because local SEO makes use of geolocation through Google Maps and Bing Maps. We are specialized Local SEO service providers because we do thorough research into identifying the keywords which your target audience is using to search for your services/products in a particular area.</p>
                               
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
                        <img src="/images/seo banner.png" alt=""  />
                        
                        </div>
                        <div className="container">
         <h1 className="app_mar">Local SEO</h1>
        <p className="blog_marg">Local SEO is a component of an overall SEO strategy for a business which focuses on optimizing the business to be found in search results in a localized or confined geographical area, generally confined to a city or town. It is most beneficial for companies who are providing services or selling products to customers in a particular geographical region. Local SEO differs from SEO in the fact that for local SEO, if a customer is searching for a specific service, they will be shown the service providers nearest to their location. This is because local SEO makes use of geolocation through Google Maps and Bing Maps. We are specialized Local SEO service providers because we do thorough research into identifying the keywords which your target audience is using to search for your services/products in a particular area.</p>
              </div> */}
        
            <Footer /> 
        </>
    )
}

export default seo;
