

import "../../css/commonComponents/Footer.css";
import FooterStrip from "./FooterStrip";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <FooterStrip />

            <footer className="footer">

                <div className="container-fluid footer-main">
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
                                <li><Link to="/products/FormalWear">Formal Wear</Link></li>
                                <li><Link to="/products/CorporateWear">Corporate Wears</Link></li>
                                <li><Link to="/products/Uniforms">Uniforms</Link></li>
                                <li><Link to="/products/Workwear">Workwear</Link></li>
                                <li><Link to="/products/CasualWear">Casual Wear</Link></li>


                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6 footer-column">
                            <h4>COMPANY</h4>


                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 footer-column">
                            <h4>REACH US</h4>

                            <div className="footer-contact-item d-flex align-items-start">
                                <img src="/icons/location.png" alt="" />

                                {/* <p>
                                    Office No. 1, Mukund Siddhi Vinayak Co-op.
                                    <br />
                                    Housing Society Ltd.
                                    <br />
                                    Ground Floor, Tata Colony, Off Nardas Road
                                    <br />
                                    Malad (East), Mumbai – 400 097,
                                    <br />
                                    Maharashtra, India
                                </p> */}
                                <a href="https://maps.app.goo.gl/M1iRaAH2wfizb8es5" target="_blank" rel="noopener noreferrer">
                                    <p><strong>Head office: <br /></strong>

                                        Ground Floor, MULUND SIDDHIVINAYAK, CHS, A1, Tata Colony, Mulund East, Maharashtra 400081.</p>
                                </a>
                            </div>

                            <div className="footer-contact-item d-flex align-items-center">
                                <img src="/icons/call.png" alt="" />

                                <div className="div d-flex gap-2 ">
                                    <a href="tel:919324281489" target="_blank" >
                                        +91 93 2428 1489 /
                                    </a>
                                    <a href="tel:919769541114" target="_blank" >
                                        +91 97 6954 1114
                                    </a>
                                </div>
                            </div>


                            <div className="footer-contact-item d-flex align-items-center">
                                <img src="/icons/mail.png" alt="" />

                                <a href="mailto:piyer@vastrainternational.com" target="_blank" >
                                    piyer@vastrainternational.com
                                </a>
                            </div>

                            <div className="footer-contact-item d-flex align-items-center">
                                <img src="/icons/mail.png" alt="" />

                                <a href="mailto:vastra.operations@gmail.com" target="_blank" >
                                    vastra.operations@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="container-fluid footer-bottom">
                    <div className="d-flex justify-content-between align-items-center">

                        <p>
                            © 2026 Vastra International. All rights reserved.
                        </p>

                        <p>
                            @design_and_developed by <a href="http://parasightsolutions.com" target="_blank" rel="noopener noreferrer">parasightsolutions.com</a>
                        </p>

                    </div>
                </div>

            </footer>
            <div className="sticky-contact">
                <a href="tel:+919324281489" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatsapp.png" alt="Call" />
                </a>

            </div>
        </>
    );
};

export default Footer;