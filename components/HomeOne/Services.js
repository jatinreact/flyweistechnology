import Link from 'next/link'

const Services = () => {
    
    return (
        <section className="offer-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    {/* <span>Services</span> */}
                    <h2>OUR PROFESSIONAL SERVICES FOR YOU</h2>
                    <p>We are working with new-age and modern technologies to stay in sync with the evolving requirements of businesses in terms of technical implementation.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-chip"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>ROBOTICS & DRONES</a>
                                </Link>
                            </h3>
                            <p>AI-powered robots are the future of industrial processes. Our engineering design team is an expert in robotics and drone programming to fulfill your industrial or business needs with the latest technological advancements.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-vr"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>VIRTUAL REALITY</a>
                                </Link>
                            </h3>
                            <p>Virtual Reality has changed the way how situations and events are perceived by people. We work on developing virtual reality applications so that you can provide a seamless experience to your customers.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-blockchain"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>BLOCKCHAIN PROJECT</a>
                                </Link>
                            </h3>
                            <p>Blockchain has been at the forefront of modern technologies and is being used aggressively in everything from cryptocurrencies to healthcare management to banking and finance processes while providing security.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-target"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>IMAGE PROCESSING</a>
                                </Link>
                            </h3>
                            <p>Image Processing technologies have come a long way and are being aggressively used by both private and government agencies around the world. It has certain benefits and can be used constructively for many applications.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-choice"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>ORDER MANAGEMENT</a>
                                </Link>
                            </h3>
                            <p>With the boom in the ecommerce industry globally, there has been an increased requirement for order management solutions and we are fulfilling these requirements by providing bespoke solutions for ecommerce players.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-deep-learning"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>MACHINE LEARNING</a>
                                </Link>
                            </h3>
                            <p>We leverage machine learning to develop solutions for solving complex business problems on the back of data-driven analytics. Our machine learning services include deep learning, predictive analysis, and neural network development.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="offer-shape">
                <img src="/images/shape/services-shape/1.png" alt="Image" />
                <img src="/images/shape/services-shape/2.png" alt="Image" />
                <img src="/images/shape/services-shape/3.png" alt="Image" />
                <img src="/images/shape/services-shape/4.png" alt="Image" />
                <img src="/images/shape/services-shape/5.png" alt="Image" />
                <img src="/images/shape/services-shape/6.png" alt="Image" />
            </div>
        </section>
    )
}

export default Services;