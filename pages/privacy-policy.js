import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="blog_img_banner">
          <img src="/images/Fernie-Privacy-Policy.jpg" alt=""  className="native_image_height" />
        </div>
        {/* <PageBanner 
                    pageTitle="Privacy Policy" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Privacy Policy" 
                />  */}

        <div className="text-container ptb-100">
          <div className="container">
            <h2>Privacy Policy</h2>

            <p>What personal data we collect and why we collect it</p>
            <p>
              Comments :- When visitors leave comments on the site we collect
              the data shown in the comments form, and also the visitor’s IP
              address and browser user agent string to help spam detection.
            </p>
            <h3>Media</h3>
            <p>
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </p>
            <h3>Contact forms</h3>
            <p>Cookies :-</p>
            <p>
              If you leave a comment on our site you may opt-in to saving your
              name, email address and website in cookies. These are for your
              convenience so that you do not have to fill in your details again
              when you leave another comment. These cookies will last for one
              year.
            </p>
            <p>
              If you visit our login page, we will set a temporary cookie to
              determine if your browser accepts cookies. This cookie contains no
              personal data and is discarded when you close your browser.
            </p>
            <p>
              When you log in, we will also set up several cookies to save your
              login information and your screen display choices. Login cookies
              last for two days, and screen options cookies last for a year. If
              you select “Remember Me”, your login will persist for two weeks.
              If you log out of your account, the login cookies will be removed.
            </p>
            <p>
              If you edit or publish an article, an additional cookie will be
              saved in your browser. This cookie includes no personal data and
              simply indicates the post ID of the article you just edited. It
              expires after 1 day.
            </p>
            <h3>Embedded content from other websites</h3>
            <p>
              Articles on this site may include embedded content (e.g. videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your inte
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default PrivacyPolicy;
