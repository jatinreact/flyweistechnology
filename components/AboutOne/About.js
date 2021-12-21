import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                {/* <span>About Us</span> */}
                                <h2>We Help Businesses to Scale Technical Capacity</h2>
                                <p>Now a days businesses are facing numerous challenges as every business depend for its growth to online. It is somewhere impossible for a business owner to be skillful in every part of technology, So this is what we Understand & Believe in Supporting businesses & create an environment for them to grow with full force.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Advanced caching
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Unlimited  applications
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP 7 ready transfer
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP ready serves
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                24/7 Free extra support
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Optimized stack
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;