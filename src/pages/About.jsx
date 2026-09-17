
import React from 'react'
import AboutBanner from '../components/aboutComponents/AboutBanner'
import Testimonial from '../components/homeComponents/Testimonial'
import OurStory from '../components/aboutComponents/OurStory'
import Promoter from '../components/aboutComponents/promoter'
import Why from '../components/aboutComponents/why'
import VastraOrganisation from '../components/aboutComponents/VastraOrganisation'
import CounterSection from '../components/aboutComponents/CounterSection'

const About = () => {
    return (
        <>
            <AboutBanner />
            <CounterSection />
            <OurStory />
            <VastraOrganisation />
            <Promoter />
            <Why />
            <Testimonial />

        </>
    )
}

export default About