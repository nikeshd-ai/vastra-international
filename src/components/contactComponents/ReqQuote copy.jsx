import ContactBanner from "./ContactBanner"
import "../../css/contactComponents/requestQuote.css";


const ReqQuote = () => {
    return (
        <>
            <ContactBanner
                breadcrumb="REQUEST A QUOTE"
                title="REQUEST A QUOTE"
                heading="Tell us what you need made"
                description="One form, one working day, one named merchandiser on your account. MOQ starts at 300 pieces per style."
            />
            <section className="request-quote-section">
                <div className="container-fluid">
                    <div className="row g-5">

                        <div className="col-lg-7">

                            <div className="quote-form-box">

                                <form>

                                    {/* ROW 1 */}
                                    <div className="row g-4">

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                ORGANISATION <span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control quote-input"
                                                placeholder="School, hospital or company name"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                CONTACT PERSON <span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control quote-input"
                                                placeholder="Full name"
                                            />
                                        </div>

                                        {/* ROW 2 */}

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                EMAIL <span>*</span>
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control quote-input"
                                                placeholder="you@company.com"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                PHONE / WHATSAPP <span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control quote-input"
                                                placeholder="+91 98200 00000"
                                            />
                                        </div>

                                        {/* ROW 3 */}

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                YOU ARE
                                            </label>

                                            <select className="form-select quote-input">
                                                <option value="">
                                                    Select buyer type
                                                </option>
                                                <option>School</option>
                                                <option>Hospital</option>
                                                <option>Corporate</option>
                                                <option>Retailer</option>
                                                <option>Distributor</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                CATEGORY <span>*</span>
                                            </label>

                                            <select className="form-select quote-input">
                                                <option value="">
                                                    Select category
                                                </option>
                                                <option>Blazers</option>
                                                <option>Shirts</option>
                                                <option>Trousers</option>
                                                <option>Polos</option>
                                                <option>T-Shirts</option>
                                                <option>Shorts</option>
                                            </select>
                                        </div>

                                        {/* ROW 4 */}

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                STYLE OR PRODUCT
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control quote-input"
                                                placeholder="e.g. School House Blazer"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                APPROX. QUANTITY <span>*</span>
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control quote-input"
                                                placeholder="e.g. 1,200 pcs"
                                            />
                                        </div>

                                        {/* NEEDED BY */}

                                        <div className="col-md-6">
                                            <label className="quote-label">
                                                NEEDED BY
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control quote-input"
                                                placeholder="dd-mm-yyyy"
                                            />
                                        </div>

                                        {/* NOTES */}

                                        <div className="col-12">
                                            <label className="quote-label">
                                                SPECIFICATION NOTES
                                            </label>

                                            <textarea
                                                className="form-control quote-textarea"
                                                rows="4"
                                                placeholder="Fabric preference, colours, size break-up, branding, packing, delivery city..."
                                            ></textarea>
                                        </div>

                                    </div>


                                    {/* BUTTON */}
                                    <div className="quote-submit-row mt-4">

                                        <button
                                            type="submit"
                                            className="common-btn"
                                        >
                                            <img src="/icons/send-enquiry.png" alt="" />
                                            Request a quote
                                        </button>

                                        <span className="quote-note">
                                            Reply within 1 working day · MOQ from 300 pcs per style
                                        </span>

                                    </div>

                                </form>

                            </div>

                        </div>


                        {/* ================= RIGHT : WHAT HAPPENS NEXT ================= */}
                        <div className="col-lg-5">

                            <div className="quote-process">

                                <h2>What happens next</h2>

                                {/* STEP 1 */}
                                <div className="process-item">

                                    <div className="process-icon">
                                        <img src="/icons/note-req.png" alt="" />
                                    </div>

                                    <div className="process-content">
                                        <div className="process-title">
                                            <span>01</span>
                                            You send the brief
                                        </div>

                                        <p>
                                            Quantity, sizes, fabric preference,
                                            branding and delivery city.
                                        </p>
                                    </div>

                                </div>


                                {/* STEP 2 */}
                                <div className="process-item">

                                    <div className="process-icon">
                                        <img src="/icons/message.png" alt="" />
                                    </div>

                                    <div className="process-content">
                                        <div className="process-title">
                                            <span>02</span>
                                            We quote in 1 day
                                        </div>

                                        <p>
                                            Indicative price per piece, fabric
                                            options and a sampling timeline.
                                        </p>
                                    </div>

                                </div>


                                {/* STEP 3 */}
                                <div className="process-item">

                                    <div className="process-icon">
                                        <img src="/icons/scissor.png" alt="" />
                                    </div>

                                    <div className="process-content">
                                        <div className="process-title">
                                            <span>03</span>
                                            Sample in 7–10 days
                                        </div>

                                        <p>
                                            A physical fit sample plus a swatch
                                            card for your approval.
                                        </p>
                                    </div>

                                </div>


                                {/* STEP 4 */}
                                <div className="process-item">

                                    <div className="process-icon">
                                        <img src="/icons/box.png" alt="" />
                                    </div>

                                    <div className="process-content">
                                        <div className="process-title">
                                            <span>04</span>
                                            Bulk in 20–35 days
                                        </div>

                                        <p>
                                            Progress updates at 25%, 50% and 100%,
                                            then QC and dispatch.
                                        </p>
                                    </div>

                                </div>


                                {/* CONTACT BOX */}

                                <div className="talk-box">

                                    <span className="talk-label">
                                        PREFER TO TALK FIRST?
                                    </span>

                                    <p>
                                        Call <strong>+91 22 4004 8080</strong> or
                                        WhatsApp <strong>+91 98200 45678.</strong>
                                        <br />
                                        Mon – Sat · 10:00 – 19:00 IST.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ReqQuote