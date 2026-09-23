import React from "react";
import "../../css/aboutComponents/OurStory.css";

const OurStory = () => {
    return (
        <section className="our-story-section">
            <div className="container-fluid">
                <div className="row">

                    {/* Left Content */}
                    <div className="col-lg-4">
                        <div className="our-story-left">

                            <div className="common-title">
                                <h6>
                                    OUR STORY
                                </h6>

                                <h2>
                                    It started with one
                                    <br className="d-none d-lg-block" />
                                    product category, done
                                    <br className="d-none d-lg-block" />
                                    properly.
                                </h2>
                            </div>

                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="col-lg-8">
                        <div className="our-story-rig">

                            <p>
                                The Vastra Group was conceived in 2006 in Mumbai, India,
                                with the sole purpose of covering every aspect of offering
                                formal wear garments — trousers, jackets, blazers, suits,
                                vests and skirts — to domestic and overseas markets.
                            </p>

                            <p>
                                Our target buyers have always been the quality-conscious
                                buyer, in India and abroad. As demand for casual wear grew,
                                Vastra enlarged its product base to include casual trousers
                                and chinos alongside the formal range.
                            </p>

                            <p>
                                To keep focus on individual areas, the Group divided its
                                activities into three clear functions: sourcing,
                                manufacturing and buying-house support. Each one is owned
                                end to end, so a buyer deals with one accountable team
                                rather than a chain of intermediaries.
                            </p>


                            {/* Quote */}
                            <div className="our-story-quote mt-4">

                                <div className="our-story-quote-line"></div>

                                <div className="our-story-quote-content">

                                    <blockquote>
                                        “We would rather be the manufacturer a buyer keeps
                                        than the cheapest quote in the inbox.”
                                    </blockquote>

                                    <span>
                                        VASTRA INTERNATIONAL
                                    </span>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;