
import React from 'react'
import AboutBanner from '../components/aboutComponents/AboutBanner'
import Testimonial from '../components/homeComponents/Testimonial'
import OurStory from '../components/aboutComponents/OurStory'
import Promoter from '../components/aboutComponents/promoter'
import Why from '../components/aboutComponents/why'
import VastraOrganisation from '../components/aboutComponents/VastraOrganisation'

const About = () => {
    return (
        <>
            <AboutBanner />
            <OurStory />
            <VastraOrganisation />
            <Promoter />
            <Why />
            <Testimonial />

        </>
    )
}

export default About