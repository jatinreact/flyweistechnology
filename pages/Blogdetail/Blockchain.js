import React from 'react'
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import AskQuestionForm from '../../components/ServiceDetails/AskQuestionForm'
import ServiceSidebar from '../../components/ServiceDetails/ServiceSidebar'

const Blockchain = () => {
    return (
        <>

        <Navbar />


        
        <div className="blog_img_banner">
                        <img src="/images/blog/Block_Chain.jpg" alt=""  />
                         </div>

            
            <section className="service-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-details-wrap">


                            <h3>Blockchain and Cryptocurrency Attacks</h3>

                         <p>Cryptocurrencies are based on blockchain technology, which are considered immutable. However, the rise in popularity of cryptocurrencies has encouraged cybercriminals to find innovative ways to attack the underlying blockchain. One of these ways is 51% attack”, which has evolved in recent years and has been quite successful. Numerous 51% attacks have taken place in recent years. In August 2021, Bitcoin SV (BSV) slid about 5 per cent value after an attack. Another Bitcoin fork, Bitcoin Gold (BTG), suffered a 51% attack in 2019. Ethereum Classic (ETC), which forked from the original Ethereum blockchain after the infamous DAO hack of 2016, has seen 51% attacks several times. A hack in cryptocurrency can be many things. In simple words, if an attacker is able to exploit some area of a chain, smart contract, exchange or illegitimately withdraw cryptocurrency, it would be deemed as a hack or stealing. cryptocurrencies are encrypted using blockchain technology, which is a public ledger that helps verify and record transactions. Blockchain is constantly reviewed by a network of users, which makes it difficult to hack.When it comes to blockchains that use proof of work , 51% of attacks involve the attacker being able to gain control of more than 50 per cent of the hashing power. By doing so, he or she is able to manipulate the data in the blockchain,. it’s almost impossible to pull that off in established blockchains like Bitcoin and Ethereum. This phenomenon has been experienced by some small chains that are not really decentralised, he added.attacks help hackers use one digital token more than once by duplicating the file. 51% attack enables them to rewrite transaction history and carry out double spends. In a double spend, transactions are erased once the goods are received. This means that the tokens can be used again. Each crypto account is locked down by unbreakable cryptography and a private key — a string of letters and numbers — that serves as an identification code for each crypto account holder. But hackers have shown that blockchains are not immutable.poorly coded smart contract can be hacked by someone sending certain instructions to it. In short, the smart contract itself can be hacked, but not the blockchain.If hackers get access to a wallet, they will be able to crack the private key to the account, which is another way of crypto hacking.the data in the blockchain is immutable. Even in these hacks, the blockchain is mostly not compromised, he added.Many countries have deemed crypto hacking illegal. The most common types of crypto hacking are phishing and social engineering attacks. However, when it comes to 51% attacks, there are not many laws that prevent miners from taking control of more than 50 per cent of a network’s computing power.Though rare, more devastating attacks happen where smart contracts get hacked or exploited, giving the hacker access to large parts of a crypto company's accounts and systems, said Huobi Global. “They are able to steal crypto tokens worth millions at one go,” he added.However, hackings can be goodwill gestures, too. For example, when a hacker does it to point out a security vulnerability in a smart contract so that a spiteful person does not hack and steal the funds, causing losses to everyone.</p>
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

export default Blockchain
