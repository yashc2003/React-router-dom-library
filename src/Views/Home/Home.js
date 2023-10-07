import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Home(){
    return(
        <div>
            <Navbar/>
            <h1>Home</h1>

            <p className="information">
            The home page of the Apple store website serves as the gateway to a world of innovation and technology. It's a dynamic hub that showcases the latest in Apple's diverse range of products and services. Visitors to the home page are greeted with a visually stunning layout that immediately captures the essence of Apple's commitment to excellence in technology.
            </p>

            <p className="information">
            Prominently featured are the latest flagship smartphones, cutting-edge televisions, home appliances, and an array of other innovative gadgets. The home page also provides quick access to Apple's ecosystem, including smart home solutions, wearables, and accessories.
            </p>

            <Footer/>
        </div>
    )

}