import React, {} from "react";

import {Link} from "react-router-dom";

const Header = () => {
    return (
            <header>
                <div className="headerwrapper">
                    <nav>
                        <div className="logo"><h1 className="logoText">Graff <font color="#da8282"> pink </font></h1></div>
                        <ul className="navigation">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="aboutus" className="nav-link">About us</Link></li>
                            <li><Link to="services" className="nav-link">Services</Link></li>
                            <li><Link to="contact" className="nav-link">Contact</Link></li>
                            <li>
                                <button type="submit" className="button">
                                    <div className="but-div"><img src="https://img.icons8.com/ios-glyphs/20/000000/human-head.png" alt="dd"/>
                                    </div>
                                    <div><Link to="login" className="login">Login</Link></div>
                                </button>
                            </li>
                        </ul>
                    </nav>


                </div>
            </header>
    );
};

export default Header;