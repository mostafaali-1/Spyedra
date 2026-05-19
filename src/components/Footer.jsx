import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-accent"></div>

            <div className="footer-container">
                <div className="footer-logo">spydra</div>

                <nav className="footer-nav">
                    <a href="#" className="footer-link">Team</a>
                    <a href="#" className="footer-link">Case Studies</a>
                    <a href="#" className="footer-link">Publications</a>
                </nav>

                <div className="footer-social">
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="social-icon" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" className="social-icon" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
