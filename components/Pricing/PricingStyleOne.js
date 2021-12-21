import React from 'react';
import Link from 'next/link';
import ServiceSidebar from '../ServiceDetails/ServiceSidebar'
import AskQuestionForm from '../ServiceDetails/AskQuestionForm'

const PricingStyleOne = (props) => {




    return (

        <section className="service-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-wrap">


                            <h3>SEO</h3>

                            <p>SEO is a component of an overall SEO strategy for a business which focuses on optimizing the business to be found in search results in a localized or confined geographical area, generally confined to a city or town. It is most beneficial for companies who are providing services or selling products to customers in a particular geographical region. Local SEO differs from SEO in the fact that for local SEO, if a customer is searching for a specific service, they will be shown the service providers nearest to their location. This is because local SEO makes use of geolocation through Google Maps and Bing Maps. We are specialized Local SEO service providers because we do thorough research into identifying the keywords which your target audience is using to search for your services/products in a particular area.</p>


                        </div>
                    </div>


                    <div className="col-lg-4">
                        <AskQuestionForm />
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
        </section>


    );
}


export default PricingStyleOne;