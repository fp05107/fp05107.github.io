import React from "react";
import '../Styles/Contact.css';
import {
    FaLinkedinIn,
    FaGithub,
    FaMailBulk,
    FaMobileAlt,
    FaHome,
    FaWhatsapp
} from "react-icons/fa";


export const Contact = () => {
    return (
        <div className="ContactContainer" id="contactSection">
            <div>
                <h1>Contact Me</h1>
                <div>
                    <h3><FaMobileAlt className="contactlogotop" />&nbsp;Contact No.&nbsp; › &nbsp;<span>6371238379</span></h3>
                    <h3>
                        <a href="mailto:subham.sahoo.soro@gmail.com">
                            <FaMailBulk className="contactlogotop" />&nbsp;&nbsp;Email Id &nbsp; › &nbsp;<span>subham.sahoo.soro@gmail.com</span>
                        </a>
                    </h3>
                    <h3><FaHome className="contactlogotop" />&nbsp;&nbsp; Address&nbsp; › <span>Balasore, Odisha</span></h3>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/subham-sahoo-37089222b/" target="_blank"><FaLinkedinIn className="contactlogo" /></a>
                    <a href="https://github.com/fp05107" target="_blank"><FaGithub className="contactlogo" /></a>
                    <a href="mailto:subham.sahoo.soro@gmail.com"><FaMailBulk className="contactlogo" /></a>
                    <a href="https://wa.me/+916371238379" target="_blank"><FaWhatsapp className="contactlogo" /></a>
                </div>
                <div>
                    <p className="thank-you">Thank you for visiting my portfolio!</p>
                </div>
            </div>
        </div>
    );
}