import React from "react";
import "../../css/contactComponents/Contact.css";
import { Link } from "react-router-dom";


const ContactDetails = () => {
    return (
        <section className="contact-location">
            <div className="container-fluid px-lg-5">
                <div className="row g-4">

                    {/* LEFT SIDE */}
                    <div className="col-lg-5">
                        <div className="contact-info">

                            {/* ADDRESS */}
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <img src="/icons/location.png" alt="" />
                                </div>

                                <div>
                                    <h6>OFFICE & UNIT 1</h6>

                                    <p>
                                        Office No. 1, Mukund Siddhi Vinayak Co-op.
                                        Housing Society Ltd.
                                        <br />
                                        Ground Floor, Tata Colony, Off Nardas Road
                                        <br />
                                        Malad (East), Mumbai - 400 097,
                                        Maharashtra, India
                                    </p>
                                </div>
                            </div>

                            {/* PHONE */}
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <img src="/icons/call.png" alt="" />
                                </div>

                                <div>
                                    <h6>PHONE & WHATSAPP</h6>

                                    <p>
                                        +91 22 4004 8080
                                        <br />
                                        +91 98200 45678
                                    </p>
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <img src="/icons/mail.png" alt="" />
                                </div>

                                <div>
                                    <h6>EMAIL</h6>

                                    <p>
                                        sales@vastrainternational.com
                                    </p>
                                </div>
                            </div>

                            {/* WORKING HOURS */}
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <img src="/icons/clock.png" alt="" />
                                </div>

                                <div>
                                    <h6>WORKING HOURS</h6>

                                    <p>
                                        Mon - Sat · 10:00 - 19:00 IST
                                    </p>
                                </div>
                            </div>

                            {/* QUOTE BOX */}
                            <div className="quote-box mt-4">
                                <h4>Ready with quantities?</h4>

                                <p>
                                    The quote form captures fabric, sizes and
                                    packing in one go, so our first reply already
                                    has pricing in it.
                                </p>

                                <button
                                    type="button"
                                    className="common-btn mt-3"

                                >
                                    <Link to="/ReqQuote">
                                        Request a Quote
                                    </Link>
                                </button>

                            </div>

                        </div>
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="col-lg-7">

                        {/* STATIC LOCATION BOX */}
                        <div className="location-box">

                            {/* Zoom Buttons */}
                            {/* <div className="zoom-buttons">
                                <button type="button">+</button>
                                <button type="button">−</button>
                            </div> */}

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2438576919603!2d72.8463758348877!3d19.184548500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6fd42a65af1%3A0x85e45a42e0a8e0d2!2sOMCON%20REAL%20ESTATE%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1788770917837!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>


                        {/* UNITS */}
                        <div className="row g-4 mt-2">

                            <div className="col-md-4">
                                <div className="unit-card">
                                    <h5>Malad (E)</h5>
                                    <p>
                                        Office, sampling & shirting line
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="unit-card">
                                    <h5>Bhiwandi</h5>
                                    <p>
                                        Blazers, coats & trousers
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="unit-card">
                                    <h5>Tarapur</h5>
                                    <p>
                                        Knits — tees, polos, shorts
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactDetails;