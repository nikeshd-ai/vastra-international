import React from 'react'
import '../../css/commonComponents/Footer.css'

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
                    <button className="common-btn">
                        <a href="#">Request a quote</a>
                        <img src='/icons/black-right-arrow.png' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FooterStrip