import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../../css/homeComponents/Testimonial.css";

const testimonials = [
    {
        id: 1,
        text: "The strongest partnerships are the ones where the manufacturer understands the brief, not just the measurement sheet.",
        name: "Apparel sourcing partner",
        category: "Private label program",
    },
    {
        id: 2,
        text: "Vastra brings the practical thinking and consistency we need to keep a collection moving.",
        name: "Procurement team",
        category: "Institutional apparel",
    },
    {
        id: 3,
        text: "The team understands quality, timelines and the importance of getting every detail right.",
        name: "Fashion brand",
        category: "Private label program",
    },
    {
        id: 4,
        text: "A reliable manufacturing partner who understands our requirements and consistently delivers.",
        name: "Sourcing manager",
        category: "Apparel manufacturing",
    },
];

const Testimonial = () => {
    return (
        <section className="testimonial-section">
            <div className="container-fluid px-lg-5">

                <div className="row testimonial-row">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-5 common-title">

                        <h6 className="testimonial-label">
                            TESTIMONIALS
                        </h6>

                        <div className="testimonial-quote">
                            “
                        </div>

                        <h2>
                            Clear communication
                            <br />
                            makes good work better.
                        </h2>

                    </div>


                    {/* RIGHT SLIDER */}
                    <div className="col-lg-7 testimonial-slider-wrapper">

                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={2}
                            spaceBetween={0}
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="testimonial-swiper"
                        >

                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>

                                    <div className="testimonial-card">

                                        <p className="testimonial-text">
                                            “{testimonial.text}”
                                        </p>

                                        <div className="testimonial-author">

                                            <h4>
                                                {testimonial.name}
                                            </h4>

                                            <span>
                                                {testimonial.category}
                                            </span>

                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Testimonial;