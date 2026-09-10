import React from 'react'
import "../../css/productComponents/categoryStyles.css";
import { Link } from "react-router-dom";


import ContactBanner from "../../components/contactComponents/ContactBanner"


const Shorts = () => {

    const styles = [
        {
            id: "01",
            name: "School Twill Short",
            description:
                "Half-elastic waist school short in cotton twill with a mock fly, two side pockets and a reinforced double-stitched crotch seam.",
            fabric: "Cotton twill 240 GSM, navy / grey / khaki",
            details: "Half-elastic waist, mock fly, twin-needle seams",
            sizes: '20” – 34” waist',
            moq: "300 pcs, size-wise packed",
        },
        {
            id: "02",
            name: "Casual Cotton Short",
            description:
                "Above-knee flat-front short in peach-finish cotton with slanted pockets, a single back welt pocket and a 2 cm turned hem.",
            fabric: "Peach-finish cotton 230 GSM",
            details: "Flat front, YKK zip, garment washed",
            sizes: '28 – 40 waist',
            moq: "300 pcs per style",
        },
        {
            id: "03",
            name: "Sports Knit Short",
            description:
                "Drawcord jersey or micro-polyester short for sports houses and gym programmes, with side panels available in contrast house colours.",
            fabric: "Jersey 180 GSM or micro-polyester 140 GSM",
            details: "Elastic drawcord waist, contrast side panel",
            sizes: 'Kids 22” – 32”, adults S – 3XL',
            moq: "300 pcs per style",
        },
        {
            id: "04",
            name: "Sports Knit Short",
            description:
                "Drawcord jersey or micro-polyester short for sports houses and gym programmes, with side panels available in contrast house colours.",
            fabric: "Jersey 180 GSM or micro-polyester 140 GSM",
            details: "Elastic drawcord waist, contrast side panel",
            sizes: 'Kids 22” – 32”, adults S – 3XL',
            moq: "300 pcs per style",
        },
    ];

    const otherCategories = [
        "Men's Coats",
        "Blazers",
        "Formal Shirts",
        "Casual Trousers",
        "Cotton T-Shirts",
        "School & Hospital Uniforms",
    ];


    return (
        <>
            <ContactBanner
                breadcrumb="Shorts"
                title="3 STYLES · MOQ 300 PCS PER STYLE"
                heading="Shorts"
                description="Elastic, half-elastic and flat-front shorts across cotton will, jersey and micro-polyester. Every school short carries a double-stitched crotch seam — the seam that fails first on a playground."
            />
            <section className="category-styles-section">

                <div className="container-fluid px-lg-5">

                    <div className="row g-5">

                        {/* ================= LEFT ================= */}

                        <div className="col-lg-3">

                            <div className="category-sidebar">

                                {/* Product Image */}
                                <div className="category-product-image">
                                    <img
                                        src="/products/shorts.jpg"
                                        alt="School Shorts"
                                    />
                                </div>


                                {/* MOQ */}
                                <div className="sidebar-detail">
                                    <span>MOQ</span>
                                    <strong>300 pcs per style</strong>
                                </div>


                                {/* LEAD TIME */}
                                <div className="sidebar-detail">
                                    <span>LEAD TIME</span>
                                    <strong>15–20 days</strong>
                                </div>


                                {/* FABRICS */}
                                <div className="sidebar-fabrics">

                                    <span className="sidebar-heading">
                                        FABRICS WE RUN
                                    </span>

                                    <div className="fabric-tags">

                                        <span>Cotton twill 240 GSM</span>
                                        <span>Jersey knit 180 GSM</span>
                                        <span>Micro-polyester</span>
                                        <span>Peach-finish cotton</span>

                                    </div>

                                </div>


                                {/* Quote Button */}
                                <button
                                    className="common-btn mt-3"
                                >
                                    <Link to="/ReqQuote">
                                        Request a Quote
                                    </Link>
                                </button>

                            </div>

                        </div>


                        {/* ================= RIGHT ================= */}

                        <div className="col-lg-9">

                            <div className="styles-content">

                                <h2 className="styles-heading">
                                    Styles in this category
                                </h2>


                                {/* PRODUCT LIST */}

                                <div className="styles-list">

                                    {styles.map((style) => (

                                        <div
                                            className="style-item"
                                            key={style.id}
                                        >

                                            {/* Product Information */}
                                            <div className="style-info">

                                                <div className="style-title">

                                                    <span className="style-number">
                                                        {style.id}
                                                    </span>

                                                    <h3>{style.name}</h3>

                                                </div>


                                                <p className="style-description">
                                                    {style.description}
                                                </p>


                                                <div className="style-meta">

                                                    <div>
                                                        <span>FABRIC:</span>
                                                        <p>{style.fabric}</p>
                                                    </div>

                                                    <div>
                                                        <span>DETAILS:</span>
                                                        <p>{style.details}</p>
                                                    </div>

                                                    <div>
                                                        <span>SIZES:</span>
                                                        <p>{style.sizes}</p>
                                                    </div>

                                                    <div>
                                                        <span>MOQ:</span>
                                                        <p>{style.moq}</p>
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Buttons */}
                                            <div className="style-actions">

                                                <button
                                                    className="common-btn"
                                                >
                                                    <Link to="/ReqQuote">
                                                        Request a Quote
                                                    </Link>
                                                </button>

                                                <button
                                                    className="common-btn transparent"
                                                >
                                                    <img src="/icons/note-req.png" alt="" />
                                                    <Link to="/ProductDetail">
                                                        Full Specs
                                                    </Link>
                                                </button>

                                            </div>

                                        </div>

                                    ))}

                                </div>


                                {/* ================= OTHER CATEGORIES ================= */}

                                <div className="other-categories">

                                    <span className="other-heading">
                                        OTHER CATEGORIES
                                    </span>

                                    <div className="category-tags">

                                        {otherCategories.map((category) => (
                                            <a
                                                href="#"
                                                key={category}
                                                className="category-tag"
                                            >
                                                {category}
                                            </a>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Shorts