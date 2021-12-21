import React, { Component } from 'react';
import Link from 'next/link';

class PageBanner extends Component {
    render() {

        let { pageTitle, homePageUrl, homePageText, activePageText } = this.props;

        return (
            <div className="page-title-area item-bg1">
               
                {/* <div className="container"> */}
                    <div className="page-title-content">
                    
                       
                        <div className='banner_img'>
                        <img src="/images/PagesImage/contact.png" alt=""  />
                        
                        </div>
                        <div className="container">
                        <div className="banner-heading">
                        {/* <h2>{pageTitle}</h2> */}
                        <ul>
                            <li>
                                {/* <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link> */}
                            </li>
                            {/* <li>{activePageText}</li> */}
                        </ul>
                        </div>
                        </div>

                       
                    </div>
                </div>
            // </div>
        );
    }
}

export default PageBanner;