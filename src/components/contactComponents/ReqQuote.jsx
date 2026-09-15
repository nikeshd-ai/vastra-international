import { useState } from "react";
import "../../css/contactComponents/requestQuote.css";

const ReqQuote = () => {

    const [formData, setFormData] = useState({
        organisation: "",
        contactPerson: "",
        email: "",
        phone: "",
        buyerType: "",
        category: "",
        product: "",
        quantity: "",
        neededBy: "",
        notes: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Remove error when user starts correcting the field
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };


    // Validate form
    const validateForm = () => {

        const newErrors = {};

        if (!formData.organisation.trim()) {
            newErrors.organisation = "Organisation is required";
        }

        if (!formData.contactPerson.trim()) {
            newErrors.contactPerson = "Contact person is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone / WhatsApp number is required";
        }

        if (!formData.category) {
            newErrors.category = "Please select a category";
        }

        if (!formData.quantity.trim()) {
            newErrors.quantity = "Approx. quantity is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    // Handle submit
    const handleSubmit = async (e) => {

        e.preventDefault();

        setStatus("");

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        try {

            setStatus("sending");

            /*
             * FOR NOW
             * This shows the complete data in the browser console.
             *
             * Later replace this with your backend/API request.
             */

            console.log("Request Quote Data:", formData);


            /*
             * Example API request:
             *
             * const response = await fetch(
             *     "YOUR_API_URL_HERE",
             *     {
             *         method: "POST",
             *         headers: {
             *             "Content-Type": "application/json",
             *         },
             *         body: JSON.stringify(formData),
             *     }
             * );
             *
             * if (!response.ok) {
             *     throw new Error("Something went wrong");
             * }
             */


            // Temporary success
            await new Promise((resolve) => setTimeout(resolve, 800));

            setStatus("success");

            // Clear form
            setFormData({
                organisation: "",
                contactPerson: "",
                email: "",
                phone: "",
                buyerType: "",
                category: "",
                product: "",
                quantity: "",
                neededBy: "",
                notes: "",
            });

            setErrors({});

        } catch (error) {

            console.error("Form submission error:", error);

            setStatus("error");
        }
    };


    return (
        <div className="request-quote-section">

            <div className="container-fluid">

                <div className="row g-5">

                    <div className="col-lg-12">

                        <div className="quote-form-box">

                            <form onSubmit={handleSubmit} noValidate>

                                <div className="row g-4">

                                    {/* ORGANISATION */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            ORGANISATION <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="organisation"
                                            value={formData.organisation}
                                            onChange={handleChange}
                                            className={`form-control quote-input ${errors.organisation
                                                ? "quote-input-error"
                                                : ""
                                                }`}
                                            placeholder="School, hospital or company name"
                                        />

                                        {errors.organisation && (
                                            <small className="quote-error">
                                                {errors.organisation}
                                            </small>
                                        )}

                                    </div>


                                    {/* CONTACT PERSON */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            CONTACT PERSON <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            className={`form-control quote-input ${errors.contactPerson
                                                ? "quote-input-error"
                                                : ""
                                                }`}
                                            placeholder="Full name"
                                        />

                                        {errors.contactPerson && (
                                            <small className="quote-error">
                                                {errors.contactPerson}
                                            </small>
                                        )}

                                    </div>


                                    {/* EMAIL */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            EMAIL <span>*</span>
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-control quote-input ${errors.email
                                                ? "quote-input-error"
                                                : ""
                                                }`}
                                            placeholder="you@company.com"
                                        />

                                        {errors.email && (
                                            <small className="quote-error">
                                                {errors.email}
                                            </small>
                                        )}

                                    </div>


                                    {/* PHONE */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            PHONE / WHATSAPP <span>*</span>
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`form-control quote-input ${errors.phone
                                                ? "quote-input-error"
                                                : ""
                                                }`}
                                            placeholder="+91 98200 00000"
                                        />

                                        {errors.phone && (
                                            <small className="quote-error">
                                                {errors.phone}
                                            </small>
                                        )}

                                    </div>


                                    {/* BUYER TYPE */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            YOU ARE
                                        </label>

                                        <select
                                            name="buyerType"
                                            value={formData.buyerType}
                                            onChange={handleChange}
                                            className="form-select quote-input"
                                        >
                                            <option value="">
                                                Select buyer type
                                            </option>

                                            <option value="School">
                                                School
                                            </option>

                                            <option value="Hospital">
                                                Hospital
                                            </option>

                                            <option value="Corporate">
                                                Corporate
                                            </option>

                                            <option value="Retailer">
                                                Retailer
                                            </option>

                                            <option value="Distributor">
                                                Distributor
                                            </option>

                                        </select>

                                    </div>


                                    {/* CATEGORY */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            CATEGORY <span>*</span>
                                        </label>

                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className={`form-select quote-input ${errors.category
                                                ? "quote-input-error"
                                                : ""
                                                }`}
                                        >
                                            <option value="">
                                                Select category
                                            </option>

                                            <option value="Blazers">
                                                Blazers
                                            </option>

                                            <option value="Shirts">
                                                Shirts
                                            </option>

                                            <option value="Trousers">
                                                Trousers
                                            </option>

                                            <option value="Polos">
                                                Polos
                                            </option>

                                            <option value="T-Shirts">
                                                T-Shirts
                                            </option>

                                            <option value="Shorts">
                                                Shorts
                                            </option>

                                        </select>

                                        {errors.category && (
                                            <small className="quote-error">
                                                {errors.category}
                                            </small>
                                        )}

                                    </div>


                                    {/* PRODUCT */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            STYLE OR PRODUCT
                                        </label>

                                        <input
                                            type="text"
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                            className="form-control quote-input"
                                            placeholder="e.g. School House Blazer"
                                        />

                                    </div>


                                    {/* QUANTITY */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            APPROX. QUANTITY <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className={`form-control quote-input ${errors.quantity
                                                ? "quote-input-error"
                                                : ""
                                                }`}
                                            placeholder="e.g. 1,200 pcs"
                                        />

                                        {errors.quantity && (
                                            <small className="quote-error">
                                                {errors.quantity}
                                            </small>
                                        )}

                                    </div>


                                    {/* NEEDED BY */}
                                    <div className="col-md-6">

                                        <label className="quote-label">
                                            NEEDED BY
                                        </label>

                                        <input
                                            type="date"
                                            name="neededBy"
                                            value={formData.neededBy}
                                            onChange={handleChange}
                                            className="form-control quote-input"
                                        />

                                    </div>


                                    {/* NOTES */}
                                    <div className="col-12">

                                        <label className="quote-label">
                                            SPECIFICATION NOTES
                                        </label>

                                        <textarea
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleChange}
                                            className="form-control quote-textarea"
                                            rows="4"
                                            placeholder="Fabric preference, colours, size break-up, branding, packing, delivery city..."
                                        ></textarea>

                                    </div>

                                </div>


                                {/* SUBMIT */}
                                <div className="quote-submit-row mt-4">

                                    <button
                                        type="submit"
                                        className="common-btn"
                                        disabled={status === "sending"}
                                    >

                                        <img
                                            src="/icons/send-enquiry.png"
                                            alt=""
                                        />

                                        {status === "sending"
                                            ? "Sending..."
                                            : "Request a quote"}

                                    </button>


                                    <span className="quote-note">
                                        Reply within 1 working day · MOQ from
                                        300 pcs per style
                                    </span>

                                </div>


                                {/* SUCCESS */}
                                {status === "success" && (
                                    <div className="quote-success">
                                        Thank you! Your quote request has been
                                        submitted successfully.
                                    </div>
                                )}


                                {/* ERROR */}
                                {status === "error" && (
                                    <div className="quote-submit-error">
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReqQuote;