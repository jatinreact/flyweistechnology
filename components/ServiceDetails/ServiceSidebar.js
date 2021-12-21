import React, { Component } from "react";
import Link from "next/link";

class ServiceSidebar extends Component {
  render() {
    return (
      <>
        <div className="service-sidebar-area">
          {/* <div className="service-list">
                    <h3 className="service-details-title">Facilities</h3>
                    <ul>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    Technology
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    Tips
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    AI & IT
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    Solution
                                    <i className='bx bx-check'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div> */}

          <div className="service-list">
            <h3 className="service-details-title">Contact Info</h3>
            <ul>
              <li className="cont_info">
                +91 9811124255/+18562132132
                <i className="bx bx-phone-call bx-rotate-270"></i>
              </li>
              <li className="cont_info">
                info@flyweis.technology
                <i className="bx bx-envelope"></i>
              </li>
              <li className="cont_info">
                Live chat with experts
                {/* <i className='bx bx-whatapp'></i> */}
                <a href="https://flyweis.technology/thank_yous.php?comments=Information">
                  <i class="bx bxl-whatsapp"></i>
                </a>
              </li>
              {/* <li>
                            10:00 AM – 7:00 PM
                            <i className='bx bx-time'></i>
                        </li> */}
            </ul>
          </div>

          {/* <div className="service-list">
                    <h3 className="service-details-title">Download Brochures</h3>
                    <ul>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (1)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (2)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (3)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details/#">
                                <a>
                                    PDF File (4)
                                    <i className='bx bxs-cloud-download'></i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div> */}
        </div>
      </>
    );
  }
}

export default ServiceSidebar;
