import React from 'react'
import '../../css/commonComponents/Footer.css'
import { Link } from "react-router-dom";


const FooterStrip = () => {
    return (
        <section className="footer-strip">
            <div className="container-fluid px-lg-5">
                <div className="row text-center justify-content-center">
                    <div className="common-title mb-3">
                        <h6>HAVE A BRIEF IN MIND?</h6>
                        <h2>Let’s make the next piece count.</h2>
                    </div>
                    <p className="mb-4">Tell us what you are looking for. We’ll bring the right questions.</p>
                    {/* <button className="common-btn">
                        <Link to="/ReqQuote">
                            Request a Quote
                        </Link>
                        <img src='/icons/black-right-arrow.png' />
                    </button> */}
                    <button
                        type="button"
                        className="common-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#requestQuoteModal"
                        style={{ color: "black" }}
                    >
                        Request a Quote
                        <img src='/icons/black-right-arrow.png' />

                    </button>
                </div>
            </div>
        </section>
    )
}

export default FooterStrip