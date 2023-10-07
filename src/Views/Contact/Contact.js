import "./Contact.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Contact(){
    return(
        <div>
            <Navbar/>
            <h1>Contact</h1>

            <p className="information"> Sales and Product Inquiries
Apple Online Store
Apple.com is a convenient place to purchase Apple products and accessories from Apple and other manufacturers. You can buy online or call (800) MY–APPLE (800–692–7753).
<br/> <br/>

Corporate and Government Sales:

Apple Enterprise Sales (877) 412–7753
Apple Government Sales (877) 418–2573
How to Buy for Education
If you are a student or teacher, visit the Apple Store for Education or call 1–800–692–7753.

If you are buying on behalf of an educational institution, visit the Apple Store for Education Institutions or call 1–800–800–2775, 7 days a week from 9 AM to 6 PM central time7 days a week from 9:00 a.m. to 6:00 p.m. Central time.
<br/> <br/>
Find Apple Authorized Resellers
Use our Reseller Locator to find an Apple Authorized Reseller in the U.S.
<br/> <br/>
Apple Authorized Resellers offer industry expertise, multi-platform services, and Mac-based solutions for a wide variety of organizations.
</p>
            <Footer/>
        </div>
    )

}