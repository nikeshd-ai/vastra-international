
import ContactBanner from '../components/contactComponents/ContactBanner'
import ContactDetails from '../components/contactComponents/ContactDetails'

const Contact = () => {
    return (
        <>
            <ContactBanner
                breadcrumb="Contact"
                title="CONTACT"
                heading="Talk to the people who run the floor"
                description="Call, email or WhatsApp us with your requirement. If you would rather see the units first, visitors are welcome at Malad any working morning."
            />
            <ContactDetails />

        </>
    )
}

export default Contact