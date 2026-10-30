
import React from "react";
import { Link } from "react-router-dom";
import "../../css/homeComponents/WhatWeManufacture.css";

const manufactureCards = [
    {
        id: 1,
        slug: "FormalWear",
        img: "/products/homePageProducts/formalwear.jpg",
        title: "Formal Wear",
        description:
            "Classic and professional apparel developed for business, formal and institutional requirements, with options across men's and women's wear.",
        var: "Trousers · Jackets · Blazers · Suits · Waistcoats · Formal Shirts",
        type: "large",
    },
    {
        id: 2,
        slug: "CorporateWear",
        img: "/products/homePageProducts/corporatewear.jpg",
        title: "Corporate Wear",
        description:
            "Professional corporate clothing designed around identity, employee requirements.",
        var: "Corporate Shirts · Trousers · Blazers",
        type: "small",
    },
    {
        id: 3,
        slug: "Uniforms",
        img: "/products/homePageProducts/uniforms.jpg",
        title: "Uniforms",
        description:
            "Uniform apparel developed for schools and institutional requirements.",
        var: "School Shirts · Trousers · Skirts",
        type: "small",
    },
    {
        id: 4,
        slug: "Workwear",
        img: "/products/homePageProducts/work-wear.jpg",
        title: "Work Wear",
        description:
            "Practical workwear solutions designed for organisations that need consistent apparel.",
        var: "Industrial Wear · Staff Uniforms",
        type: "bottom",
    },
    {
        id: 5,
        slug: "CasualWear",
        img: "/products/homePageProducts/casual.jpg",
        title: "Casual Wear",
        description:
            "Everyday apparel combining practical fabrics and comfortable construction.",
        var: "Casual Trousers · Chinos · Shorts",
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

    const renderCard = (card) => (
        <Link
            to={`/products/${card.slug}`}
            className="card manufacture-card-link"
            key={card.id}
            aria-label={`View ${card.title} products`}
        >
            <img
                src={card.img}
                alt={card.title}
            />

            <div className="card-body">
                <div className="card-body-top">
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                </div>

                <h6>{card.var}</h6>
            </div>
        </Link>
    );

    return (
        <section className="what-we-manufacture">
            <div className="container-fluid">

                {/* Section Heading */}
                <div className="row mb-lg-5 mb-md-5 mb-4">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="common-title">
                            <h6>What We Manufacture</h6>
                            <h2>View by category</h2>
                        </div>
                    </div>
                </div>

                {/* Top Cards */}
                <div className="row">

                    {/* Featured Card */}
                    {largeCard && (
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                            {renderCard(largeCard)}
                        </div>
                    )}

                    {/* Top Small Cards */}
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            {topCards.map((card) => (
                                <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12 mb-lg-4 mb-4"
                                    key={card.id}
                                >
                                    {renderCard(card)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="row">
                    {bottomCards.map((card) => (
                        <div
                            className="col-lg-6 col-md-6 col-sm-6 col-12 mb-lg-0 mb-4"
                            key={card.id}
                        >
                            {renderCard(card)}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatWeManufacture;
