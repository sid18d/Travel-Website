import Navbar from "../Component/Navbar";
import Main from "../Component/Main";
import AboutImg from "../assets/night.jpg";
import Trip from "../Component/Trip";
import Footer from "../Component/Footer";
function Service(){
    document.title="Trippy Service"
    return(
        <>
        <Navbar/>
        <Main 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btn="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )

}

export default Service;