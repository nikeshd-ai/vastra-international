import React from "react";
import Breadcrumb from "../commonComponents/Breadcrumb";
import "../../css/contactComponents/Contact.css";

const ContactBanner = ({
    breadcrumb,
    title,
    heading,
    description,
}) => {
    return (
        <section className="contact-banner">
            <div className="container-fluid">

                <Breadcrumb currentPage={breadcrumb} />

                <div className="row">

                    <div className="col-lg-6">
                        <div className="common-title">

                            <h6>{title}</h6>

                            <h1>{heading}</h1>

                        </div>
                    </div>

                    <div className="col-lg-6 ps-lg-5">
                        <div className="common-title">

                            <p>{description}</p>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactBanner;