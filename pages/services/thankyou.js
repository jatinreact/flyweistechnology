import React from 'react'
import Link from '../../utils/ActiveLink';


const thankyou = () => {
    return (
        <>
                  <section className="user-area-all-style log-in-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-form-action">
                                    <div className="form-heading text-center">
                                        <h3 className="form-title">Thankyou</h3>
                                    </div>

                                    <form>
                                        <div className="row">
                                            {/* <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button className="default-btn mb-30" type="submit">
                                                    <i className="bx bxl-google"></i> 
                                                    Google
                                                </button>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button className="default-btn mb-30" type="submit">
                                                    <i className="bx bxl-facebook"></i>
                                                    Facebook
                                                </button>
                                            </div> */}

                                            {/* <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button className="default-btn mb-30" type="submit">
                                                    <i className="bx bxl-twitter"></i>
                                                    Twitter
                                                </button>
                                            </div> */}

                                            {/* <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name="name" placeholder="Username or Email" />
                                                </div>
                                            </div> */}

                                            {/* <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" name="password" placeholder="Password" />
                                                </div>
                                            </div> */}

                                            {/* <div className="col-lg-6 col-sm-6 form-condition">
                                                <div className="agree-label">
                                                    <input type="checkbox" id="chb1" />
                                                    <label>Remember me</label>
                                                </div>
                                            </div> */}

                                            {/* <div className="col-lg-6 col-sm-6">
                                                <Link href="/recover-password">
                                                    <a className="forget">Forgot my password?</a>
                                                </Link>
                                            </div> */}

                                            <div className="col-12">

                                            <Link href="/contact">
                                                <button className="default-btn btn-two" type="submit">
                                                    OK
                                                </button>
                                                </Link>


                                            </div>

                                            {/* <div className="col-12">
                                                <p className="account-desc">
                                                    Not a member?
                                                    <Link href="/sign-up">
                                                        <a>Register</a>
                                                    </Link>
                                                </p>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
        </>
    )
}

export default thankyou
