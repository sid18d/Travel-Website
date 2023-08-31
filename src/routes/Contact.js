import Navbar from "../Component/Navbar";
import Main from "../Component/Main";
import AboutImg from "../assets/2.jpg"
import Footer from "../Component/Footer";
import ContactForm from "../Component/ContactForm";
function Contact(){
    document.title="Trippy Contact"
    return(
        <>
        <Navbar/>
        <Main 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btn="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )

}

export default Contact;