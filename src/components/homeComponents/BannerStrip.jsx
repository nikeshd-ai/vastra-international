import React from "react";

const BannerStrip = ({ image }) => {
    return (
        <div className="banner-strip" style={{ width: "100%" }}>
            <img src={image} alt="" />
        </div>
    );
};

export default BannerStrip;