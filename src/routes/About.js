import Navbar from "../Component/Navbar";
import Main from "../Component/Main";
import AboutImg from "../assets/night.jpg"
import Footer from "../Component/Footer";
import AboutUs from "../Component/AboutUs";
function About(){
    document.title="Trippy About"
    return(
        <>
        <Navbar/>
        <Main 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btn="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )

}

export default About;