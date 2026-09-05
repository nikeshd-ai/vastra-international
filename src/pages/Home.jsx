import React from "react";


import Banner from "../components/homeComponents/Banner";
import Testimonial from "../components/homeComponents/Testimonial";
import VastraMethod from "../components/homeComponents/VastraMethod";
import WhatWeManufacture from "../components/homeComponents/WhatWeManufacture";
import WhyVastra from "../components/homeComponents/WhyVastra";

const Home = () => {
    return (
        <>

            <main>
                <Banner />
                <WhatWeManufacture />
                <WhyVastra />
                <VastraMethod />
                <Testimonial />
            </main>

        </>
    );
};

export default Home;