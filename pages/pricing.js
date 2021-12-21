import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Footer from "../components/Layouts/Footer";

class Pricing extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <PageBanner 
                    pageTitle="Services Style Four" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style Four" 
                />  */}
        <div className="blog_img_banner">
          <img src="/images/service/Services.jpg" alt="" />
        </div>
        <ServicesStyleTwo />
        <Footer />
      </>
    );
  }
}

export default Pricing;
