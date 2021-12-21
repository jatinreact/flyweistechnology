import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
}

class Testimonials extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="client-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Testimonials</span> */}
                        <h2>What Clients Say About Us</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>I was bit confused before choosing company for my social media marketing task, so I came across few companies everyone was giving big comitments so I got confused but I have to choose someone among them. I was dealing with varun he gave his full effort to guide luckily I made right choice. Thanks Flyweis</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/1.png" alt="Image" />
                                <h3>Smita Joshi</h3>
                                <span>Business Woman</span>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>I am digital marketing manager in travel company, I have suggested my owner to outsource our daily development work because due to less technical knowledge it is very difficult for us to get output from any employee if we hire. My friend suggested me flyweis and we are happy that we went to right place</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/2.png" alt="Image" />
                                <h3>Imran Khan</h3>
                                <span>Digital Marketing</span>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>I made the website from Flyweis Technology. Team was absolutely great and very prompt in terms of services. Whenever I call they were prompt in receiving my calls. They were available 24*7. I must recommend to use their services.</p>
                            
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/3.png" alt="Image" />
                                <h3>Vivek Sharma</h3>
                                <span>Business Owner</span>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>I was bit confused before choosing company for my social media marketing task, so I came across few companies everyone was giving big comitments so I got confused but I have to choose someone among them. I was dealing with varun he gave his full effort to guide luckily I made right choice. Thanks Flyweis</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/2.png" alt="Image" />
                                <h3>Imran Khan</h3>
                                <span>Digital Marketing</span>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;