import React, { Component } from 'react';
import Link from 'next/link';

const WhatWeOffer = () => {

    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    return (
        <section className="industries-area pb-100">
            <div className="container">
                <div className="section-title">
                    {/* <span>What We Offer</span> */}
                    <h2>INDUSTRIES WE SERVE</h2>
                    <p>We are providing services for different industry verticals and each solution developed is highly customized to meet your business requirements.</p>
                </div>

                <div className="tab industries-list-tab">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            {/* Tabs navs */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3>Heavy Industry</h3>
                                        <p>All kind of industry</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Transportation</h3>
                                        <p>All kind of industry</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Health Care</h3>
                                        <p>All kind of industry</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3>Manufacturing</h3>
                                        <p>All kind of industry</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-9">
                            <div className="tab_content">
                                {/* Tab item #1 */}
                                <div id="tab1" className="tabs_item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/offer1.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>E-Commerce </h3>
                                                <p>Ecommerce has taken the world by boom with new entrants paving a way for themselves in the market every day and competing with established players. The Ecommerce industry is already a multi-billion dollar industry globally and is poised to grow leaps and bound in the coming future.</p>
                                                
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Secure & Scalable
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Payment Methods
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Order Tracking
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Inventory Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Shipping Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Multi-Vendor
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                {/* <div className="text-center">
                                                    <Link href="#">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tab item #2 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Logistics and Transportation</h3>
                                                <p>The boom in ecommerce and a high level of globalization has resulted in the exponential growth of the Logistics and Transportation industry. We can develop solutions for the logistics and transportation industry to streamline and manage operations.</p>
                                               

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Scalable & Secure
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fleet Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                GPS Tracking
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Order Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Payroll Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Support
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                {/* <div className="text-center">
                                                    <Link href="#">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/offer2.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #3 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/offer3.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Healthcare</h3>
                                                <p>The healthcare industry is a technically advanced industry and telemedicine has completely revolutionized how medical practitioners deliver services to patients. We provide healthcare IT solutions, including MIS (management information system) platforms.</p>
                                                
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Telemedicine
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Health Services on Demand
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Online Pharmacy
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Case History Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fitness Apps
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Video Consulting
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="#">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #4 */}
                                <div id="tab4" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Manufacturing</h3>
                                                <p>Manufacturing industries are adopting digital solutions at a fast pace and as such are poised for massive investments into the digital arena. We have expertise in developing digital platforms for manufacturing companies so that they can manage their entire supply chain, operations, marketing, and support from a single paltform</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Supply Chain Management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Customer Relationship Management (CRM)
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Sales and Invoice Management
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Analytics & Reporting
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Shipment Tracking
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Enterprise Resource Planning (ERP)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="#">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/offer4.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer;