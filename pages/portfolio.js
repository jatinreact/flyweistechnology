import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Portfoliobanner from '../components/Common/Portfoliobanner';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />
{/* 
                <div className='banner_blog'>
                        <img src="/images/contact 2.png" alt=""  />
                        
                        </div>  */}
                 <Portfoliobanner 
                    pageTitle="Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Team" 
                /> 
                  {/* <div className='banner_blog'>
                        <img src="/images/portfo_1.jpg" alt=""  />
                        
                        </div> */}

                <TeamCard />
                <Footer />
            </>
        );
    }
}

export default Team;