
import { useParams } from "react-router-dom";

import "../../css/productComponents/categoryStyles.css";

import ContactBanner from "../../components/contactComponents/ContactBanner";

import products from "../../data/Products";

const ProductPage = () => {

    const { slug } = useParams();

    const product = products[slug];

    if (!product) {
        return (
            <section className="py-5">
                <div className="container">
                    <h2>Product Not Found</h2>
                    <p>The requested product could not be found.</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <ContactBanner
                breadcrumb={product.breadcrumb}
                title={product.title}
                heading={product.heading}
                description={product.description}
            />

            <section className="category-styles-section">

                <div className="container-fluid px-lg-5">

                    {/* INTRO */}

                    <div className="row mb-3">

                        <p>
                            {product.intro}
                        </p>

                    </div>


                    <div className="row g-5">

                        {/* LEFT */}

                        <div className="col-lg-4 col-md-4 col-sm-12">

                            <div className="category-sidebar">

                                <div className="category-product-image">

                                    <img
                                        src={product.image}
                                        alt={product.heading}
                                    />

                                </div>


                                <button
                                    type="button"
                                    className="common-btn mt-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#requestQuoteModal"
                                >
                                    Request a Quote
                                </button>

                            </div>

                        </div>


                        {/* RIGHT */}

                        <div className="col-lg-8 col-md-8 col-sm-12">

                            <div className="styles-content">

                                <h2 className="styles-heading">
                                    Styles in this category
                                </h2>


                                <div className="styles-list">

                                    {product.styles.map((style) => (

                                        <div
                                            className="style-item"
                                            key={style.id}
                                        >

                                            <div className="style-info">

                                                <div className="style-title">

                                                    <span className="style-number">
                                                        {style.id}
                                                    </span>

                                                    <h3>
                                                        {style.name}
                                                    </h3>

                                                </div>


                                                <p className="style-description">
                                                    {style.description}
                                                </p>


                                                <p className="style-description">
                                                    {style.secdescription}
                                                </p>

                                            </div>


                                            <div className="style-actions">

                                                <button
                                                    type="button"
                                                    className="common-btn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#requestQuoteModal"
                                                >
                                                    Request a Quote
                                                </button>

                                            </div>

                                        </div>

                                    ))}

                                </div>


                                {/* OTHER CATEGORIES */}

                                <div className="other-categories">

                                    <span className="other-heading">
                                        OTHER CATEGORIES
                                    </span>


                                    <div className="category-tags">

                                        {product.otherCategories.map(
                                            (category) => (

                                                <a
                                                    href="#"
                                                    key={category}
                                                    className="category-tag"
                                                >
                                                    {category}
                                                </a>


                                            )
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default ProductPage;