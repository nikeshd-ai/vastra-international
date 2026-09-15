import React from 'react'
import BannerStrip from './BannerStrip.jsx'
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-0 mb-4 pe-lg-5">
                            <div className="banner-content d-flex flex-column gap-4">
                                <div className="common-title">
                                    <h6>VASTRA INTERNATIONAL · MANUFACTURERS & EXPORTERS</h6>
                                    <h1>Uniforms of <br />
                                        ambition, made in <br />
                                        Mumbai.</h1>
                                </div>
                                <p>Vastra International is a Mumbai-based garment manufacturer and exporter serving domestic and overseas buyers with formal wear, corporate apparel, uniforms, workwear and casual garments. From product specifications and sourcing to manufacturing and delivery, we support buyers with a dependable B2B apparel supply process.</p>
                                <div className="btn-group d-flex gap-3">
                                    {/* <button className="common-btn">
                                        <Link to="/ReqQuote">
                                            Request a Quote
                                        </Link>
                                        <img src='/icons/right_arrow.png' />
                                    </button> */}
                                    <button
                                        type="button"
                                        className="common-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#requestQuoteModal"
                                    >
                                        Request a Quote
                                        <img src='/icons/right_arrow.png' />

                                    </button>
                                    <button className="common-btn transparent">
                                        <Link to="/products/MensBlazer">
                                            Explore Products
                                        </Link>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 ps-lg-5">
                            <div className="banner-img ps-lg-5 ">
                                <img src="/banner/banner-image.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <BannerStrip image="/banner/banner-strip.png" />
        </>
    )
}

export default Banner