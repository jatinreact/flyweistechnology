import Link from 'next/link';

const About = () => {
    return (
        <section className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/about-img.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            {/* <span>ABOUT US</span> */}
                            <h2>We are an end-to-end IT services agency providing turnkey solutions for your business</h2>
                            <p>The world has come a long way with the use of digital services and platforms. Keeping in line with the digital transformation requirements of businesses, we provide solutions with the latest technologies and best practices so that your business can stay ahead of its competitors.</p>
                            
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            End-to-end services
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Multi-technology stack
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            A dedicated team of professionals
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            24/7 live support
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                        Latest tools and technologies
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Post-deployment support & training
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="/about-us">
                                <a className="default-btn">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About