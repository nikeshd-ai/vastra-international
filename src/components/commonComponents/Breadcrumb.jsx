import React from "react";
import { Link } from "react-router-dom";
import "../../css/commonComponents/breadcrumb.css";

const Breadcrumb = ({ currentPage }) => {
    return (
        <div className="breadcrumb-wrapper">
            <Link to="/" className="breadcrumb-home">
                HOME
            </Link>

            <span className="breadcrumb-arrow">›</span>

            <span className="breadcrumb-current">
                {currentPage}
            </span>
        </div>
    );
};

export default Breadcrumb;