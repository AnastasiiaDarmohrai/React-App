import React from "react";
import flower from "../asserts/flower.jpg";

const WelcomeBlock = () => {
    return (
        <div className="container">
            <img src={flower} className="img" alt="flower"/>
            <div className="centered">
                <h1 className="h1haas">WELCOME TO PINK</h1>
                <p className="h5main">A multi purpose theme from cssauthor.com</p>
            </div>
        </div>
    );
};
export default WelcomeBlock
