import React from "react";
import "../../css/homeComponents/WhatWeManufacture.css";

const manufactureCards = [
    {
        id: 1,
        img: "/what-we-card/whatwecard.png",
        title: "Formal Wear",
        description:
            "Classic and professional apparel developed for business, formal and institutional requirements, with options across men's and women's wear.",
        var: "Trousers · Jackets · Blazers · Suits · Waistcoats · Formal Shirts",
        type: "large",
    },
    {
        id: 2,
        img: "/what-we-card/whatwecard-sec.png",
        title: "Corporate Wear",
        description:
            "Professional corporate clothing designed around identity, employee requirements.",
        var: "Corporate Shirts · Trousers · Blazers",
        type: "small",
    },
    {
        id: 3,
        img: "/what-we-card/whatwecard-third.png",
        title: "School & Institutional Uniforms",
        description:
            "Uniform apparel developed for schools and institutional requirements.",
        var: "School Shirts · Trousers · Skirts",
        type: "small",
    },
    {
        id: 4,
        img: "/what-we-card/whatwecard-fourth.png",
        title: "Work Wear",
        description:
            "Practical workwear solutions designed for organisations that need consistent apparel",
        var: "Industrial Wear · Staff Uniforms",
        type: "bottom",
    },
    {
        id: 5,
        img: "/what-we-card/whatwecard-fifth.png",
        title: "Casual Wear",
        description:
            "Everyday apparel combining practical fabrics, comfortable construction",
        var: "Casual Trousers · Chinos · Shorts",
        type: "bottom",
    },
    {
        id: 6,
        img: "/what-we-card/whatwecard-sixth.png",
        title: "Branded & Private-Label Apparel",
        description:
            "Apparel developed around buyer specifications for brands",
        var: "Custom Styles · Buyer Specifications",
        type: "bottom",
    },
    {
        id: 7,
        img: "/what-we-card/whatwecard-seventh.png",
        title: "Work Wear",
        description:
            "Practical workwear solutions designed for organisations that need consistent apparel",
        var: "Industrial Wear · Staff Uniforms",
        type: "bottom",
    },
];

const WhatWeManufacture = () => {
    const largeCard = manufactureCards.find(
        (card) => card.type === "large"
    );

    const topCards = manufactureCards.filter(
        (card) => card.type === "small"
    );

    const bottomCards = manufactureCards.filter(
        (card) => card.type === "bottom"
    );

    return (
        <section className="what-we-manufacture">
            <div className="container-fluid px-lg-5">

                {/* Section Heading */}
                <div className="row mb-lg-5 mb-md-5 mb-4">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="common-title">
                            <h6>What We Manufacture</h6>
                            <h2>View by category</h2>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-12  d-flex justify-content-lg-end justify-content-sm-end justify-content-start align-items-end">
                        <button className="common-btn transparent">
                            <a href="#">Full catalogue</a>
                        </button>
                    </div>
                </div>

                {/* Top Cards */}
                <div className="row">

                    {/* Featured Card */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-4">
                        <div className="card">
                            <img
                                src={largeCard.img}
                                alt={largeCard.title}
                            />

                            <div className="card-body">
                                <h5>{largeCard.title}</h5>

                                <p>{largeCard.description}</p>

                                <h6>{largeCard.var}</h6>
                            </div>
                        </div>
                    </div>

                    {/* Top Small Cards */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">

                            {topCards.map((card) => (
                                <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12 mb-lg-4 mb-4"
                                    key={card.id}
                                >
                                    <div className="card">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                        />

                                        <div className="card-body">
                                            <h5>{card.title}</h5>

                                            <p>{card.description}</p>

                                            <h6>{card.var}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="row">

                    {bottomCards.map((card) => (
                        <div
                            className="col-lg-3 col-md-3 col-sm-6 col-12 mb-lg-0 mb-4"
                            key={card.id}
                        >
                            <div className="card">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                />

                                <div className="card-body">
                                    <h5>{card.title}</h5>

                                    <p>{card.description}</p>

                                    <h6>{card.var}</h6>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default WhatWeManufacture;