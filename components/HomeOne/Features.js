import Link from "next/link";

const Features = () => {
  return (
    <div className="features-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 p-0">
            <div className="single-features">
              <i className="flaticon-cloud-computing-1"></i>
              <h3>Cyber Security</h3>
              <p>
                Phishing is a type of online scam that targets consumers by
                sending them an e-mail that appears to be from a well-known
                source – an internet service provider...
              </p>

              <Link href="/cybersecurity">
                <a className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 p-0">
            <div className="single-features">
              <i className="flaticon-engineer"></i>
              <h3>Block chain</h3>
              <p>
                Blockchain is a shared, immutable ledger that facilitates the
                process of recording transactions and tracking assets in a
                business network. An asset can be tangible...
              </p>

              <Link href="/Blogdetail/Whatisblock">
                <a className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
            <div className="single-features">
              <i className="flaticon-success"></i>
              <h3>Data Scientist</h3>
              <p>
                Work in data science or analytics, you’re probably well aware of
                the Python vs. R debate. Although both languages are bringing
                the future to life...
              </p>

              <Link href="/Blogdetail/datascientist">
                <a className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="features-area pt-100 pb-70">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-lg-4 col-sm-6 p-0">
    //                 <div className="single-features">
    //                     <i className="flaticon-cloud-computing-1"></i>
    //                     <h3>Data Science</h3>
    //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

    //                     <Link href="/services">
    //                         <a className="read-more-icon">
    //                             <span className="flaticon-right-arrow"></span>
    //                         </a>
    //                     </Link>
    //                 </div>
    //             </div>

    //             <div className="col-lg-4 col-sm-6 p-0">
    //                 <div className="single-features">
    //                     <i className="flaticon-engineer"></i>
    //                     <h3>Data Engineer</h3>
    //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

    //                     <Link href="/services">
    //                         <a className="read-more-icon">
    //                             <span className="flaticon-right-arrow"></span>
    //                         </a>
    //                     </Link>
    //                 </div>
    //             </div>

    //             <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
    //                 <div className="single-features">
    //                     <i className="flaticon-success"></i>
    //                     <h3>Facing AI Challenges</h3>
    //                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

    //                     <Link href="/services">
    //                         <a className="read-more-icon">
    //                             <span className="flaticon-right-arrow"></span>
    //                         </a>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Features;
