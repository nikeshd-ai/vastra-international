import React from 'react'
import "../../css/commonComponents/Navbar.css"


const Navbar = () => {
    return (
        <>

            <div className="nav-strip">
                <div className="container-fluid px-lg-5">
                    <div className="row">
                        <div className="col-lg-8 col-6">
                            <p>Garment Manufacturer & Exporter | Mumbai, India | Serving Domestic & Overseas Buyers</p>
                        </div>
                        <div className="col-lg-4 col-6 d-flex justify-content-lg-end justify-content-center">
                            <div className="nav-details">
                                <div className="detail">
                                    <img src="public/icons/call_icon.png" alt="" />
                                    <a href="#" target="_blank" rel="noopener noreferrer">+91 22 4004 8080</a>
                                </div>
                                <div className="detail">
                                    <img src="public/icons/mail_icon.png" alt="" />
                                    <a href="#" target="_blank" rel="noopener noreferrer">sales@vastrainternational.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid px-lg-5">
                    <a className="navbar-brand" href="#">
                        <img src="/logo/vastra_international.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown products-dropdown">
                                <a className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Products
                                </a>

                                <div className="dropdown-menu products-menu">

                                    <a href="#" className="product-menu-item">
                                        <div className="product-menu-content">
                                            <h6>Men's Coats & Blazers</h6>
                                            <p>Structured tailoring, cut for everyday movement.</p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </a>

                                    <a href="#" className="product-menu-item">
                                        <div className="product-menu-content">
                                            <h6>Men's Formal Trousers</h6>
                                            <p>Clean silhouettes in dependable suiting cloth.</p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </a>

                                    <a href="#" className="product-menu-item">
                                        <div className="product-menu-content">
                                            <h6>Nehru Jackets</h6>
                                            <p>Modern Indian occasionwear with a sharp finish.</p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </a>

                                    <a href="#" className="product-menu-item">
                                        <div className="product-menu-content">
                                            <h6>Men's T-Shirts</h6>
                                            <p>Reliable jersey staples for private labels.</p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </a>

                                    <a href="#" className="product-menu-item">
                                        <div className="product-menu-content">
                                            <h6>Ladies' Blazers</h6>
                                            <p>Polished separates made for contemporary workwear.</p>
                                        </div>

                                        <span className="product-menu-arrow">›</span>
                                    </a>

                                    <div className="product-menu-footer">
                                        <span>Need a custom brief?</span>
                                        <a href="#">Request a quote</a>
                                    </div>

                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contact</a>
                            </li>

                        </ul>
                        <button className="common-btn">
                            <a href="#">Request a quote</a>
                        </button>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;