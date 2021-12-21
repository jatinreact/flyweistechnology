import React from 'react'
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import AskQuestionForm from '../../components/ServiceDetails/AskQuestionForm'
import ServiceSidebar from '../../components/ServiceDetails/ServiceSidebar'

const RemoteWorkforce = () => {
    return (
        <div>
             <Navbar />


        
<div className="blog_img_banner">
        <img src="/images/app_dev.jpg" alt="" className="blog_img_banner" />
         </div>

<section className="service-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-wrap">


                            <h3>Adapting to a Remote Workforce</h3>

                           <p>The survey reveals a massive shift toward remote and homebased work environments due to the COVID-19 pandemic. While a majority of 63% of organizations had up to a quarter of employees working in remote/at home environments before the crisis, a whopping three quarters of the same organizations report that over 75% of their workforce is now working from home. A majority of organizations say they successfully expanded capacity to fully support the expanded workforce in seven days or less. While 79% of organizations believe they had adequate WFH security preparations, two-thirds of organizations in this survey are concerned with the security risks by users working from home. The top security controls in place to protect remote work/work from home are anti-virus/ anti-malware solutions, firewalls , virtual private networks and multi-factor authentication (User awareness ranks highest on the list of key security challenges facing organizations that are increasing their remote workforces. This is followed by accessing through home or unsecure public networks and the use of personal devices Malware, phishing, unauthorized user/device access, and unpatched systems were identified as top attack vectors due to employees working from home. Among applications contributing to productivity and collaboration, organizations have the most security concerns with file sharing, web applications,video conferencing  and messaging A majority of confirm they enforce the same level of security controls for all roles that access remotelyNearly three-quarters of organizations allowed access from personal, unmanaged devices to support work from home, while at least 27% see this scenario as a significant security risk. A majority of 54% confirm that the COVID pandemic accelerated migration of workflows to cloudbased apps. Organizations are most concerned with protection of sensitive data, especially when accessed by unmanaged endpoints followed by added exposure to malware .Two-thirds of organizations see remote work environments having an impact on their compliance postureThirty-eight percent of organizations expressed they see higher productivity and other benefits from remote work. Only 16% see lower productivity. A majority of 84% of organizations consider it likely (44% very likely) that they will continue increased work from home capabilities in the future, taking advantage of increased productivity and other business benefits. A majority  of organizations expect budgets for remote workforce security to increase over the next 12 months). For a quarter of respondents, these security budgets will stay flat and only see budgets shrinking. The study, titled Future of Secure Remote Work, aims to better understand the challenges that organizations faced in transitioning to remote work, while uncovering the state of their cybersecurity readiness, as well as the shifts in their priorities, policies, and investments as they prepare for a hybrid work environment that is likely here to stay.</p>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <AskQuestionForm />
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
        </section>

        <Footer />
            
        </div>
    )
}

export default RemoteWorkforce
