import { useRef } from "react";
import Contact from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function ContactPage() {
    const heatherSection = useRef(null);

    return (
        <>
            <Header headerSectionRef={heatherSection} />
            <Contact />
            <Footer heatherSectionRef={heatherSection} />
       </>
    )
};

export default ContactPage; 