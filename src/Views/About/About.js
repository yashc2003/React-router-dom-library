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

            <p className="information">
            Apple was founded as Apple Computer Company on April 1, 1976, by Steve Wozniak, Steve Jobs (1955–2011) and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977. The company's second computer, the Apple II, became a best seller and one of the first mass-produced microcomputers. Apple went public in 1980 to instant financial success. The company developed computers featuring innovative graphical user interfaces, including the 1984 original Macintosh, announced that year in a critically acclaimed advertisement called "1984". By 1985, the high cost of its products, and power struggles between executives, caused problems. Wozniak stepped back from Apple and pursued other ventures, while Jobs resigned and founded NeXT, taking some Apple employees with him.
            </p>
            <Footer/>
        </div>
    )

}