import React from "react";
import "../../css/homeComponents/VastraMethod.css";

const VastraMethod = () => {

    const methodSteps = [
        {
            id: 1,
            number: "01",
            title: "Understand",
            description: "Your brief, audience and intended use.",
        },
        {
            id: 2,
            number: "02",
            title: "Develop",
            description: "Patterns, fabrics and first samples.",
        },
        {
            id: 3,
            number: "03",
            title: "Refine",
            description: "Quality checks at every meaningful step.",
        },
        {
            id: 4,
            number: "04",
            title: "Deliver",
            description: "Packed with care, ready for its next place.",
        },
    ];

    return (
        <section className="vastra-method">
            <div className="container-fluid px-lg-5">

                <div className="row mb-lg-5 mb-md-5 mb-4">
                    <div className="common-title mb-4">
                        <h6>The Vastra Method</h6>
                        <h2>One clear thread from idea to invoice.</h2>
                    </div>
                </div>

                {/* Method Steps */}
                <div className="row vastra-method-row">
                    {methodSteps.map((step) => (
                        <div
                            className="col-lg-3 col-md-6 col-12"
                            key={step.id}
                        >
                            <div className="vastra-method-card">

                                <span className="vastra-method-number">
                                    {step.number}
                                </span>

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VastraMethod;