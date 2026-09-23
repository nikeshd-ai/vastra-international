import React from "react";
import "../../css/aboutComponents/VastraOrganisation.css";

const VastraOrganisation = () => {

    const organisationBox = [
        {
            id: 1,
            num: "01",
            title: "Buying house",
            disc: "High-quality products at down-to-earth prices. Handled by the group company Vastra International and spearheaded by Prakash H. Iyer, who brings over four decades of experience in textiles and garments."
        },
        {
            id: 2,
            num: "02",
            title: "Manufacturing facility",
            disc: "A strong backup function handled by a group company based at Bhiwandi in the suburbs of Mumbai, giving us direct control over cutting, stitching, finishing and timelines."
        },
        {
            id: 3,
            num: "03",
            title: "Sourcing & merchandising",
            disc: "Fabric sourcing, costing and buyer communication run in-house, so specifications, swatch approvals and shipment updates come from the same named team throughout."
        }
    ];

    return (
        <section className="vastra-organisation section-cream">

            <div className="container-fluid">

                {/* Top Section */}
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-6 col-md-6 col-12 pe-lg-5">

                        <div className="common-title">

                            <h6>
                                How we are organised                            </h6>

                            <h2>
                                Three functions, one accountable team.                            </h2>

                        </div>

                        <p className="mt-4">
                            The Group split its activities so each area stays focused. For you, it means one point of contact across sourcing, sampling, production and dispatch                        </p>

                    </div>


                    {/* Right Image */}
                    <div className="col-lg-6 col-md-6 col-12">

                        <div className="organisation-image">

                            <img
                                src="/about/about-organization.jpg"
                                alt="Vastra manufacturing facility"
                            />

                        </div>

                    </div>

                </div>


                {/* Functions */}
                <div className="row organisation-boxes ">

                    {organisationBox.map((box) => (

                        <div
                            className="col-lg-4 col-md-6 col-12"
                            key={box.id}
                        >

                            <div className="organisation-box">

                                <h6>
                                    {box.num}
                                </h6>

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

        </section>
    );
};

export default VastraOrganisation;