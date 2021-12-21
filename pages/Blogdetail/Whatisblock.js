import React from 'react'
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import AskQuestionForm from '../../components/ServiceDetails/AskQuestionForm'
import ServiceSidebar from '../../components/ServiceDetails/ServiceSidebar'

const Whatisblock = () => {
    return (
        <div>
             <Navbar />


        
<div className="blog_img_banner">
        <img src="/images/PagesImage/blockchain.png" alt=""  />
         </div>


<section className="service-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-wrap">


                            <h3>What is block chain and what does it look ?</h3>

                          <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved. Business runs on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.All network participants have access to the distributed ledger and its immutable record of transactions. With this shared ledger, transactions are recorded only once, eliminating the duplication of effort that’s typical of traditional business networks.No participant can change or tamper with a transaction after it’s been recorded to the shared ledger. If a transaction record includes an error, a new transaction must be added to reverse the error, and both transactions are then visible.Those transactions show the movement of an asset that can be tangible (a product) or intangible (intellectual). The data block can record the information of your choice: who, what, when, where, how much and even the condition — such as the temperature of a food shipment.These blocks form a chain of data as an asset moves from place to place or ownership changes hands. The blocks confirm the exact time and sequence of transactions, and the blocks link securely together to prevent any block from being altered or a block being inserted between two existing blocks.Operations often waste effort on duplicate record keeping and third-party validations. Record-keeping systems can be vulnerable to fraud and cyberattacks. Limited transparency can slow data verification. And with the arrival of IoT, transaction volumes have exploded. All of this slows business, drains the bottom line — and means we need a better way. Enter blockchain.With blockchain, we can imagine a world in which contracts are embedded in digital code and stored in transparent, shared databases, where they are protected from deletion, tampering, and revision. In this world every agreement, every process, every task, and every payment would have a digital record and signature that could be identified, validated, stored, and shared. Intermediaries like lawyers, brokers, and bankers might no longer be necessary. Individuals, organizations, machines, and algorithms would freely transact and interact with one another with little friction. This is the immense potential of blockchain.</p>
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

export default Whatisblock
