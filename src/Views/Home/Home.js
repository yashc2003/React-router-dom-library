import "./Home.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Home(){
    return(
        <div>
            <Navbar/>
            <h1>Home</h1>

            <p className="information">
            The home page of the Samsung website serves as the gateway to a world of innovation and technology. It's a dynamic hub that showcases the latest in Samsung's diverse range of products and services. Visitors to the home page are greeted with a visually stunning layout that immediately captures the essence of Samsung's commitment to excellence in technology.
            </p>

            <p className="information">
            Prominently featured are the latest flagship smartphones, cutting-edge televisions, home appliances, and an array of other innovative gadgets. The home page also provides quick access to Samsung's ecosystem, including smart home solutions, wearables, and accessories.
            </p>

            <p className="information">In addition to product highlights, the home page offers valuable information about Samsung's sustainability initiatives, corporate responsibility, and commitment to the environment. It may also include news and updates on Samsung's partnerships, events, and community engagement.
            </p>
            <Footer/>
        </div>
    )

}