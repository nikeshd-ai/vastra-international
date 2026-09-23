import { Link, NavLink } from "react-router-dom";
import "../../css/commonComponents/Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const isProductActive =
        location.pathname.startsWith("/products/") ||
        location.pathname.startsWith("/productdetail");
    return (
        <>
            <div className="nav-strip">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-6">
                            <p>
                                Garment Manufacturer & Exporter | Mumbai, India | Serving
                                Domestic & Overseas Buyers
                            </p>
                        </div>

                        <div className="col-lg-6 col-6 d-flex justify-content-lg-end justify-content-center">
                            <div className="nav-details">
                                <div className="detail">
                                    <img src="/icons/call_icon.png" alt="" />
                                    <a href="tel:+912240048080">
                                        +91 22 4004 8080
                                    </a>
                                </div>

                                <div className="detail">
                                    <img src="/icons/mail_icon.png" alt="" />
                                    <a href="mailto:sales@vastrainternational.com">
                                        sales@vastrainternational.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src="/logo/logosvg.svg"
                            alt="Vastra International"
                        />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            {/* Home */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>

                            {/* About */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>

                            {/* Products */}
                            <li className="nav-item products-dropdown">
                                {/* <span className="nav-link products-link d-flex">
                                    Products <img src="/icons/dropdown-arrow.png" alt="" className="pt-1 ps-1" />
                                </span> */}
                                <span
                                    className={`nav-link products-link d-flex ${isProductActive ? "active" : ""
                                        }`}
                                >Products <img src="/icons/dropdown-arrow.png" alt="" className="pt-1 ps-1" /></span>

                                <div className="products-menu">

                                    <Link
                                        to="/products/MensBlazer"
                                        className="product-menu-item"
                                    >
                                        <div className="product-menu-content">
                                            <h6>Men's Coats & Blazers</h6>
                                            <p>
                                                Structured tailoring, cut for everyday movement.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </Link>


                                    <Link
                                        to="/products/MensTrousers"
                                        className="product-menu-item"
                                    >
                                        <div className="product-menu-content">
                                            <h6>Men's Formal Trousers</h6>
                                            <p>
                                                Clean silhouettes in dependable suiting cloth.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </Link>

                                    <Link
                                        to="/products/NehruJacket"
                                        className="product-menu-item"
                                    >
                                        <div className="product-menu-content">
                                            <h6>Nehru Jackets</h6>
                                            <p>
                                                Modern Indian occasionwear with a sharp finish.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </Link>

                                    <Link
                                        to="/products/MensTshirt"
                                        className="product-menu-item"
                                    >
                                        <div className="product-menu-content">
                                            <h6>Men's T-Shirts</h6>
                                            <p>
                                                Reliable jersey staples for private labels.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </Link>

                                    <Link
                                        to="/products/LadiesBlazer"
                                        className="product-menu-item"
                                    >
                                        <div className="product-menu-content">
                                            <h6>Ladies' Blazers</h6>
                                            <p>
                                                Polished separates made for contemporary workwear.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </Link>

                                    <div className="product-menu-footer" type="button"

                                        data-bs-toggle="modal"
                                        data-bs-target="#requestQuoteModal">
                                        <span>Need a custom brief?</span>

                                        <span className="red">
                                            Request a quote
                                        </span>

                                    </div>

                                </div>
                            </li>

                            {/* Clients */}
                            {/* <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/clients"
                                >
                                    Clients
                                </NavLink>
                            </li> */}

                            {/* Contact */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>

                        {/* Request Quote */}
                        {/* <button className="common-btn">
                            <Link to="/ReqQuote">
                                Request a quote
                            </Link>
                        </button> */}
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
            </nav>
        </>
    );
};

export default Navbar;