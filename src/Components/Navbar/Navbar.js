import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div className="navbar">
            <h2 className="nav-brand">Apple Store.com</h2>

            <Link className="nav-menu" to="/">Home</Link>
            <Link className="nav-menu" to="/about">About</Link>
            <Link className="nav-menu" to="/contact">Contact</Link>
            <Link><img className="user-profile" src="https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png" alt="user"/></Link>
        </div>
    )
}