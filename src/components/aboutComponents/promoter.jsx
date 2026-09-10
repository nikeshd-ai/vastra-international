import React from "react";
import "../../css/aboutComponents/Promoter.css";

const Promoter = () => {
    return (
        <section className="promoter-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Image */}
                    <div className="col-lg-5">
                        <div className="promoter-image">
                            <img
                                src="/about/promoter.jpg"
                                alt="H. Prakash Iyer"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-lg-7">
                        <div className="promoter-content">

                            <div className="common-title">
                                <h6>
                                    PROMOTER
                                </h6>

                                <h2>
                                    H. Prakash Iyer
                                </h2>

                                <h5>
                                    Promoter &amp; Proprietor
                                </h5>
                            </div>

                            <p>
                                A technocrat with a strong background in textiles
                                and garments, holding a Master’s Degree in
                                Engineering. Four decades of hands-on experience
                                in sourcing, construction and export practice
                                shape how every order at Vastra is quoted,
                                sampled and shipped.
                            </p>

                            <div className="promoter-highlights">

                                <span>
                                    MASTER'S DEGREE IN ENGINEERING
                                </span>

                                <span>
                                    40+ YEARS IN TEXTILES &amp; GARMENTS
                                </span>

                                <span>
                                    LEADS THE BUYING HOUSE FUNCTION
                                </span>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Promoter;