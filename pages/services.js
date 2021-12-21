import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";
import Footer from "../components/Layouts/Footer";

class Services extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <PageBanner 
                    pageTitle="Services Style One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style One" 
                />  */}

        <div className="blog_img_banner">
          <img src="/images/service/Services.jpg" alt="" />
        </div>

        <ServicesStyleOne />
        <Footer />
      </>
    );
  }
}

export default Services;
