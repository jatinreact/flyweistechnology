import React from 'react'
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import AskQuestionForm from '../../components/ServiceDetails/AskQuestionForm'
import ServiceSidebar from '../../components/ServiceDetails/ServiceSidebar'

const Blockchaintamper = () => {
    return (

        <>
        <Navbar />


        
                <div className="blog_img_banner">
                        <img src="/images/app_dev.jpg" alt=""  />
                         </div>

            
            <section className="service-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-wrap">


                            <h3>Blockchain tamper proof</h3>

                         <p>The need for tamper-resistance log files is prevalent in many areas and is a concern raised by numerous regulators and standards, such as PCI , HIPAA  and GDPR . Examples include medical records whose reliability can have life-or-death consequences, financial information that must be accurate, and IT security files that are essential for identifying security incidents and carrying out forensics. The above use cases share a common file structure in which records are only being added over time, e.g., individuals have more medical procedures, more financial transactions, and more security events are logged. In addition, these files require high availability allowing a user to examine the records on demand. The log files are used for assessing fault analysis anomaly detection forensics and audits and many other purposes. During an attack, one of the first steps that hackers who manage to obta privileges take, is to clear the event logs from a compromised system in order to hide their tracks. As covering the attack traces has become standard practice for attackers, it is even integrated into the popular Metasploit meterpreter cyber attack tool and is invoked using the script ‘clearev’ As evidenced from the above use cases, the need to have a trustworthy copy of the log file is common to many organizations within the given fields. Naturally, trust between these organization is a major issue. Our primary focus here is on several actors in a semi-trusted environment seeking to improve the reliability and security of their logging information, ensuring that the logging information is tamper-resistant. In order to illustrate this, consider the case in which several banks are instructed by a regulator to secure their log files. These banks will likely be willing to collaborate in such a joint effort to secure their log files, but would not be willing to disclose the content of their files. Thus, we seek a solution that does not reveal the content of the files to the participating parties.However, we can safely assume that the collaborating banks are unlikely to actively try to hack each other. Ensuring consistency of the distributed records in the presence of multiple writers is not an easy task. Some parties may be offline, messages may be delayed or dropped due to network disruptions and as a result the different parties may not share the same system’s view at every given point in time. Furthermore, providing accuracy and tamper-resistance in the presence of some malicious parties is even more complicated. Thus, a solution must allow for distributing the information among the banks in a way that makes it available and tamper-resistant, but at the same time provides mutual confidentiality. demonstrate that the blockchain with appropriate modifications, optimally fulfills these requirements and that it can be used to facilitate distributed secure-logging among this set of actors. At its core, blockchain technology is designed to provide a replicated state over the Internet. We note that while blockchain technology assists in achieving the above requirements, decisions must be made about the type and reason for using the blockchain. First, blockchain technology requires the joint effort of the parties to guarantee security. Therefore the parties must have sufficient incentive to dedicate their resources. Furthermore, the amount of effort is dictated by the properties of the specific blockchain that is being implemented. For example, public blockchains, such as Bitcoin, require significant (and costly) computational effort from the miners who are motivated through receiving payment for their (successful) effort. Private blockchains, which only allow specific identities to interact with the blockchain can use much more efficient consensus algorithms such as PBFT [11], but still every participating party needs to contribute to the network by providing servers that participate in the protocol. Thus, trust and scalability issues must be considered before choosing the appropriate blockchain. Different use cases will also involve different levels of trust between the parties and thus have different requirements. After deciding on which blockchain to use to minimize overhead, it is worth briefly reviewing how the blockchain meets these requirements. The requirement of consistency is fulfilled by the blockchain’s consensus protocol and blocks are tamper-resistant since they are cryptographically sealed after writing. The distributed nature of the blockchain not only provides high availability and resilience, it also challenges the attacker to break into several security systems in different locations. However, the requirement of privacy is not typically fulfilled merely by using a blockchain . While a permissioned blockchain can limit the access to only authorized parties, it still grants full read-access to all of those who are authorized. We provide privacy between authorized parties by adding an additional encryption layer that encrypts the data prior to writing it to the blockchain. A further issue is that blockchain technology is typically limited in the size of the data that can be written to it in a single transaction. This means that storing large log files cannot be done efficiently and requires many transactions. In addition to adding a privacy layer, we therefore also add a mechanism that enables storing data off-the-chain to ensure high throughput, while managing the integrity of this data on the blockchain. All of the above allows us to achieve a solution that provides Confidentiality, Integrity and Availability. After solving the technical issues of using the blockchain, the key contribution is that it allows an organization to make copies of their log files and distribute them among multiple sites. This way attackers that manage to break into one of these devices and attain privileges may be able to locally compromise the storage of that device, but they will not be able to affect the other copies residing on devices that they do not control. This ensures that the file availability and integrity is maintained. At some point in time the compromised system will likely detect the attacker and remove them. Nonetheless, during the time period where the victim was compromised, the local copies of the log files are likely to have been corrupted. Therefore a recovery process is required to restore the file from the other uncompromised parties who still maintain a copy of the previous uncorrupted file.</p>
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

        </>
    )
}

export default Blockchaintamper
