import React from 'react'
import '../../css/homeComponents/WhyVastra.css'

const WhyVastra = () => {
    const whyVastraBox = [
        {
            id: 1,
            num: "01",
            title: "Low MOQs that respect your first order",
            disc: "Most factories at our scale start at 1,000 pieces. We open at 300 pieces per style, so a school, a hospital or a young label can start small and grow."
        },
        {
            id: 2,
            num: "02",
            title: "One person owns your order",
            disc: "A named merchandiser sends you a WhatsApp update at every stage — fabric in, cutting done, 50% stitched, QC cleared, dispatched."
        },
        {
            id: 3,
            num: "03",
            title: "Fit sample before you commit",
            disc: "You approve a physical fit sample and a fabric swatch card before a single metre is cut for bulk.No surprises at delivery."
        },
        {
            id: 4,
            num: "04",
            title: "Repeat orders in 15 days",
            disc: "Patterns, graded sizes and approved fabrics stay on file, so your second order ships in half the time of your first."
        }

    ]
    return (
        <section className="why-vastra section-cream ">
            <div className="container-fluid px-lg-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-4">
                        <div className="common-title mb-4">
                            <h6>Why Vastra</h6>
                            <h2>The four things
                                buyers tell us made
                                the difference</h2>
                        </div>
                        <button className="common-btn">
                            <a href="#">Request a quote</a>
                            <img src='/icons/right_arrow.png' />
                        </button>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="row">
                            {whyVastraBox.map((box) => (
                                <div className="col-12 mb-4" key={box.id}>
                                    <div className="row why-strip">
                                        <div className="col-lg-1">
                                            <h6>{box.num}</h6>
                                        </div>
                                        <div className="col-lg-4">
                                            <h5>{box.title}</h5>
                                        </div>
                                        <div className="col-lg-7">
                                            <p>{box.disc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyVastra