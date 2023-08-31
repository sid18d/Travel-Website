import Navbar from "../Component/Navbar";
import Main from "../Component/Main";
import HomeImg from "../assets/mainpage.jpg"
import Destination from "../Component/Destination";
import Trip from "../Component/Trip";
import Footer from "../Component/Footer";
function Home(){
    document.title="Trippy Home"
    return(
        <>
        <Navbar/>
        <Main 
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        url="/"
        btn="show"
        btnText="Travel Plan"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )

}

export default Home;