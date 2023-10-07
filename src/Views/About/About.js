import "./About.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function About(){
    return(
        <div>
            <Navbar/>
            <h1 className="about-name">About</h1>
            <p className="information">
            Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple is the world's largest technology company by revenue, with US$394.3 billion in 2022 revenue. As of March 2023, Apple is the world's biggest company by market capitalization. As of June 2022, Apple is the fourth-largest personal computer vendor by unit sales; the largest manufacturing company by revenue; and the second-largest mobile phone manufacturer in the world. It is considered one of the Big Five American information technology companies, alongside Alphabet (parent company of Google), Amazon, Meta Platforms, and Microsoft.
            </p>

           
            <Footer/>
        </div>
    )

}