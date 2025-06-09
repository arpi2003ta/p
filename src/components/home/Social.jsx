import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/ms_cat_03/profilecard/?igsh=OWk3dzhtMWt2eW9m" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://www.github.com/arpi2003ta" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/arpita-nath-240949257" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;