import React from "react";

import "../../css/commonComponents/Footer.css";
import FooterStrip from "./FooterStrip";

const Footer = () => {
    return (
        <>
            <FooterStrip />

            <footer className="footer">

                <div className="container-fluid px-lg-5 footer-main">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 footer-brand">
                            <a href="/" className="footer-logo">
                                <img
                                    src="/logo/vastra_international.png"
                                    alt="Vastra International"
                                />
                            </a>

                            <p>
                                Readymade garment manufacturers and
                                exporters since 2009. Coats, blazers, shirts,
                                trousers, tees, shorts and complete uniform
                                programmes.
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 footer-column">
                            <h4>PRODUCTS</h4>

                            <ul className="list-unstyled">
                                <li><a href="#">Men's Coats</a></li>
                                <li><a href="#">Blazers</a></li>
                                <li><a href="#">Formal Shirts</a></li>
                                <li><a href="#">Casual Trousers</a></li>
                                <li><a href="#">Cotton T-Shirts</a></li>
                                <li><a href="#">Shorts</a></li>
                                <li><a href="#">School & Hospital Uniforms</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 footer-column">
                            <h4>COMPANY</h4>

                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about-us">About us</a></li>
                                <li><a href="/clients">Clients</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li>
                                    <a href="/request-a-quote">
                                        Request a quote
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 footer-column">
                            <h4>REACH US</h4>

                            <div className="footer-contact-item d-flex align-items-start">
                                <img src="/icons/location.png" alt="" />

                                <p>
                                    Office No. 1, Mukund Siddhi Vinayak Co-op.
                                    <br />
                                    Housing Society Ltd.
                                    <br />
                                    Ground Floor, Tata Colony, Off Nardas Road
                                    <br />
                                    Malad (East), Mumbai – 400 097,
                                    <br />
                                    Maharashtra, India
                                </p>
                            </div>

                            <div className="footer-contact-item d-flex align-items-center">
                                <img src="/icons/call.png" alt="" />

                                <a href="tel:+912240048080">
                                    +91 22 4004 8080
                                </a>
                            </div>

                            <div className="footer-contact-item d-flex align-items-center">
                                <img src="/icons/mail.png" alt="" />

                                <a href="mailto:sales@vastrainternational.com">
                                    sales@vastrainternational.com
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="container-fluid px-lg-5 footer-bottom">
                    <div className="d-flex justify-content-between align-items-center">

                        <p>
                            © 2026 Vastra International. All rights reserved.
                        </p>

                        <p>
                            @design_and_developed by parasightsolutions.com
                        </p>

                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;