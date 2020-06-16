import React, { Component } from 'react';
import kcSupreme from "../images/kcsupremecrt.jpg";

export default class Header extends Component {
    render() {
    return (
        <div id="header">

        <div className="top">

            {/* <!-- Logo --> */}
                <div id="logo">
                    <span className="image avatar48"><img src={kcSupreme}alt=""/></span>
                    <h1 id="title">Kevin Cox</h1>
                    <p>Future Full-Stack Web Developer</p>
                </div>

            {/* <!-- Nav --> */}
                <nav id="nav">
                    <ul>
                        <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
                        <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                        <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
                        <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
                    </ul>
                </nav>

        </div>

        <div className="bottom">

            {/* <!-- Social Icons --> */}
                <ul className="icons">
                    
                    <li><a href="https://www.linkedin.com/in/kevin-lee-cox" target="_blank" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
                    <li><a href="https://github.com/KCIG88" target="_blank" className="icon brands fa-github"><span className="label">Github</span></a></li>							
                    
                    <li><a href="images/ResumeKLC2020.pdf" id="contact-link"><span className="icon solid fa-paperclip"></span></a></li>
                </ul>

        </div>

    </div>
                        );
                      
}
}