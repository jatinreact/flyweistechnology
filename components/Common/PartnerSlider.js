import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    // autoplayHoverPause: false,
    // mouseDrag: true,
    // margin: 0,
    // center: false,
    dots: false,
    slidetransition: 'linear',
    autoplayTimeout: 1000,
    // autoplayHoverPause: false,
    autoplaySpeed: 500,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
    }
}

class PartnerSlider extends Component {

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
            <div className="brand-area-two ptb-70 pt-70">
                <div className="container">

                {this.state.display ? <OwlCarousel 
                    className="brand-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a1.png" alt="Image" />
                               
                                
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a2.png" alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a3.png" alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a4.png" alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a5.png" alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a6.png" alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a7.png" alt="Image" />
                            </a>
                        </div>

                        <div className="single-brand">
                            <a href="#" target="_blank">
                                <img src="/images/team/a8.png" alt="Image" />
                            </a>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default PartnerSlider;