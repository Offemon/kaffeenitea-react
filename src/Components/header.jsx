import "./header.css"
import cart from "/shopping_basket.svg"
import burgerMenu from "/Burger Menu.svg"
import { Link } from "react-router-dom"

const PageHeader = () => {
    return (
        <div name="header" id="header">
            <h1><Link to="/" className="home-button">Kaffeenitea</Link></h1>
                <img src={burgerMenu} alt=""/>
            <div id="header-links">
                <div id="header-link-top">
                    <a href="#">Log In</a>
                    <a href="#">Join</a>
                    <a href="#">P 0.00</a>
                    <img src={cart} alt=""/>
                </div>
                <div id="header-link-bottom">
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/contactus">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;