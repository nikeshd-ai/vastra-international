import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/commonComponents/Navbar.css";

const Navbar = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const isProductActive =
        location.pathname.startsWith("/products/") ||
        location.pathname.startsWith("/productdetail");

    /*
     * Lock background page scrolling when mobile navbar is open
     */
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.classList.remove("mobile-menu-open");
        }

        return () => {
            document.body.classList.remove("mobile-menu-open");
        };
    }, [isMenuOpen]);

    /*
     * Close mobile menu when route changes
     */
    useEffect(() => {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
    }, [location.pathname]);

    /*
     * Toggle mobile navbar
     */
    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => {
            const newState = !prev;

            if (!newState) {
                setIsProductsOpen(false);
            }

            return newState;
        });
    };

    /*
     * Toggle Products dropdown only on mobile
     */
    const handleProductsToggle = (e) => {
        e.preventDefault();

        /*
         * CSS handles desktop hover.
         * This click handler is mainly for mobile.
         */
        if (window.innerWidth < 992) {
            setIsProductsOpen((prev) => !prev);
        }
    };

    /*
     * Close navbar when normal navigation link is clicked
     */
    const handleNavLinkClick = () => {
        if (window.innerWidth < 992) {
            setIsMenuOpen(false);
            setIsProductsOpen(false);
        }
    };

    /*
     * Close navbar when product link is clicked
     */
    const handleProductLinkClick = () => {
        if (window.innerWidth < 992) {
            setIsMenuOpen(false);
            setIsProductsOpen(false);
        }
    };

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
                    <Link
                        className="navbar-brand"
                        to="/"
                        onClick={handleNavLinkClick}
                    >
                        <img
                            src="/logo/vastra_international.png"
                            alt="Vastra International"
                        />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleMenuToggle}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation */}
                    <div
                        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""
                            }`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            {/* Home */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                    onClick={handleNavLinkClick}
                                >
                                    Home
                                </NavLink>
                            </li>

                            {/* About */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/about"
                                    onClick={handleNavLinkClick}
                                >
                                    About Us
                                </NavLink>
                            </li>

                            {/* Products */}
                            <li className="nav-item products-dropdown">

                                <span
                                    className={`nav-link products-link d-flex ${isProductActive ? "active" : ""
                                        }`}
                                    onClick={handleProductsToggle}
                                    role="button"
                                    tabIndex="0"
                                >
                                    <span>Products</span>

                                    <img
                                        src="/icons/dropdown-arrow.png"
                                        alt=""
                                        className="pt-1 ps-1"
                                    />
                                </span>

                                <div
                                    className={`products-menu ${isProductsOpen ? "mobile-products-open" : ""
                                        }`}
                                >

                                    {/* Men's Blazer */}
                                    <Link
                                        to="/products/MensBlazer"
                                        className="product-menu-item"
                                        onClick={handleProductLinkClick}
                                    >
                                        <div className="product-menu-content">
                                            <h6>Men's Coats & Blazers</h6>

                                            <p>
                                                Structured tailoring, cut for everyday movement.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">
                                            ›
                                        </span>
                                    </Link>

                                    {/* Men's Trousers */}
                                    <Link
                                        to="/products/MensTrousers"
                                        className="product-menu-item"
                                        onClick={handleProductLinkClick}
                                    >
                                        <div className="product-menu-content">
                                            <h6>Men's Formal Trousers</h6>

                                            <p>
                                                Clean silhouettes in dependable suiting cloth.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">
                                            ›
                                        </span>
                                    </Link>

                                    {/* Nehru Jacket */}
                                    <Link
                                        to="/products/NehruJacket"
                                        className="product-menu-item"
                                        onClick={handleProductLinkClick}
                                    >
                                        <div className="product-menu-content">
                                            <h6>Nehru Jackets</h6>

                                            <p>
                                                Modern Indian occasionwear with a sharp finish.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">
                                            ›
                                        </span>
                                    </Link>

                                    {/* Men's T-Shirt */}
                                    <Link
                                        to="/products/MensTshirt"
                                        className="product-menu-item"
                                        onClick={handleProductLinkClick}
                                    >
                                        <div className="product-menu-content">
                                            <h6>Men's T-Shirts</h6>

                                            <p>
                                                Reliable jersey staples for private labels.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">
                                            ›
                                        </span>
                                    </Link>

                                    {/* Ladies Blazer */}
                                    <Link
                                        to="/products/LadiesBlazer"
                                        className="product-menu-item"
                                        onClick={handleProductLinkClick}
                                    >
                                        <div className="product-menu-content">
                                            <h6>Ladies' Blazers</h6>

                                            <p>
                                                Polished separates made for contemporary workwear.
                                            </p>
                                        </div>

                                        <span className="product-menu-arrow">
                                            ›
                                        </span>
                                    </Link>

                                    {/* Request Quote */}
                                    <div
                                        className="product-menu-footer"
                                        role="button"
                                        tabIndex="0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#requestQuoteModal"
                                        onClick={() => {
                                            if (window.innerWidth < 992) {
                                                setIsMenuOpen(false);
                                                setIsProductsOpen(false);
                                            }
                                        }}
                                    >
                                        <span>
                                            Need a custom brief?
                                        </span>

                                        <span className="red">
                                            Request a quote
                                        </span>
                                    </div>

                                </div>
                            </li>

                            {/* Clients */}
                            {/* 
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/clients"
                                    onClick={handleNavLinkClick}
                                >
                                    Clients
                                </NavLink>
                            </li>
                            */}

                            {/* Contact */}
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/contact"
                                    onClick={handleNavLinkClick}
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>

                        {/* Request Quote */}
                        <button
                            type="button"
                            className="common-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#requestQuoteModal"
                            onClick={() => {
                                if (window.innerWidth < 992) {
                                    setIsMenuOpen(false);
                                    setIsProductsOpen(false);
                                }
                            }}
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