import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsGridCard from '../components/News/NewsGridCard';
import Footer from '../components/Layouts/Footer';

class NewsGrid extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/* <PageBanner 
                    pageTitle="News Grid" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="News Grid" 
                />  */}

                        <div className='banner_blog'>
                        <img className="blog_img" src="/images/blog 2.png" alt=""  />
                        
                        </div>


                <NewsGridCard />
                <Footer />
            </>
        );
    }
}

export default NewsGrid;