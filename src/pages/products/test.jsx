import React from "react";
import "../../css/productComponents/productSpecification.css";

const ProductSpecification = () => {

    const product = {
        name: "Casual Cotton Short",
        image: "/images/products/casual-cotton-short.jpg",

        fabric: "Peach-finish cotton 230 GSM",
        details: "Flat front, YKK zip, garment washed",
        sizes: "28 – 40 waist",
        moq: "300 pcs per style",

        relatedProducts: [
            {
                name: "School Twill Short",
                description:
                    "Half-elastic waist school short in cotton twill with a mock fly, two side pockets and a reinforced double-stitched crotch seam."
            },
            {
                name: "Sports Knit Short",
                description:
                    "Drawcord jersey or micro-polyester short for sports houses and gym programmes, with side panels available in contrast house colours."
            }
        ]
    };

    return (
        <section className="product-specification">

            <div className="container-fluid px-lg-5">

                {/* ================= TOP ================= */}

                <div className="row g-5 align-items-start">

                    {/* IMAGE */}
                    <div className="col-lg-5">

                        <div className="product-detail-image">
                            <img
                                src={product.image}
                                alt={product.name}
                            />
                        </div>

                    </div>


                    {/* RIGHT CONTENT */}
                    <div className="col-lg-7">

                        <div className="specification-content">

                            <h2>Specification</h2>

                            {/* SPECIFICATION */}

                            <div className="specification-table">

                                <div className="spec-row">
                                    <span>FABRIC</span>
                                    <p>{product.fabric}</p>
                                </div>

                                <div className="spec-row">
                                    <span>DETAILS</span>
                                    <p>{product.details}</p>
                                </div>

                                <div className="spec-row">
                                    <span>SIZES</span>
                                    <p>{product.sizes}</p>
                                </div>

                                <div className="spec-row">
                                    <span>MOQ</span>
                                    <p>{product.moq}</p>
                                </div>

                            </div>


                            {/* INCLUDED AS STANDARD */}

                            <div className="included-section">

                                <h3>Included as standard</h3>

                                <div className="row g-2">

                                    <div className="col-md-6">

                                        <div className="included-item">
                                            <span>✓</span>
                                            <p>
                                                Physical fit sample before bulk
                                            </p>
                                        </div>

                                        <div className="included-item">
                                            <span>✓</span>
                                            <p>
                                                Your labels, tags and packing
                                            </p>
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="included-item">
                                            <span>✓</span>
                                            <p>
                                                Fabric swatch card for approval
                                            </p>
                                        </div>

                                        <div className="included-item">
                                            <span>✓</span>
                                            <p>
                                                4-point AQL 2.5 final inspection
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* PRICING */}

                            <div className="pricing-box">

                                <h3>Get pricing for this style</h3>

                                <p>
                                    Share your quantity, size break-up and
                                    branding. A merchandiser replies within
                                    one working day with indicative pricing
                                    and a sampling timeline.
                                </p>

                                <div className="pricing-buttons">

                                    <button
                                        type="button"
                                        className="btn pricing-quote-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quoteModal"
                                    >
                                        Request a quote
                                    </button>

                                    <a
                                        href="/contact"
                                        className="btn talk-btn"
                                    >
                                        Talk to us
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= MORE IN SHORTS ================= */}

                <div className="more-products">

                    <div className="more-products-heading">
                        MORE IN SHORTS
                    </div>

                    <div className="row g-4">

                        {product.relatedProducts.map((item, index) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                            >

                                <div className="related-product-card">

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                    <a href="#">
                                        View specification
                                        <span>→</span>
                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductSpecification;