import React from "react";
import { NavLink } from "react-router-dom";

const WhyVastra = () => {

    const whyBox = [
        {
            id: 1,
            title: "In-depth industry knowledge",
            disc: "Over four decades of promoter experience across textiles and garment construction."
        },
        {
            id: 2,
            title: "Timely completion of orders",
            disc: "Production planning built around your delivery date, not ours."
        },
        {
            id: 3,
            title: "Transparent business dealings",
            disc: "Clear costing, approved samples and honest lead times before commitment."
        },
        {
            id: 4,
            title: "Qualified and trained team",
            disc: "Professionals across merchandising, cutting, stitching and quality control."
        },
        {
            id: 5,
            title: "Market leading prices",
            disc: "Down-to-earth pricing supported by direct sourcing and in-group manufacturing."
        }
    ];

    return (
        <section className="why-vastra section-cream">
            <div className="container-fluid">

                <div className="row">

                    {/* Left Content */}
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-4">

                        <div className="common-title mb-4">
                            <h6>WHY US</h6>
                            <h2>
                                Nothing clever. Just
                                kept promises.
                            </h2>
                            <p>
                                By providing quality product and having experienced
                                knowledge of the market, we have been able to
                                attain a huge client base. The factors responsible for
                                our success are simple and unchanged:
                            </p>
                        </div>




                        <button className="common-btn">
                            <NavLink
                                className="nav-link"
                                to="/contact"
                            >
                                Start an enquiry
                            </NavLink>
                            <img src="/icons/right_arrow.png" alt="" />
                        </button>


                    </div>


                    {/* Right Content */}
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">

                        <div className="row">

                            {whyBox.map((box) => (
                                <div
                                    className="col-lg-6 col-md-6 col-12"
                                    key={box.id}
                                >
                                    <div className="why-strip pt-3">

                                        <h5>
                                            {box.title}
                                        </h5>

                                        <p>
                                            {box.disc}
                                        </p>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyVastra;