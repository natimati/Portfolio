import Contact from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function ContactPage() {
    return (
        <>
            <Header onMainPage={false} />
            <Contact />
            <Footer />
       </>
    )
};

export default ContactPage; 