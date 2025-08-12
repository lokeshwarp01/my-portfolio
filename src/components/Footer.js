import React from 'react';
import './Footer.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>PANUGANTI LOKESHWAR</h3>
                        <p>Front-End Developer</p>
                    </div>
                    
                    <div className="footer-contact">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>
                                <a href="panugantilokeshwar@gmail.com">
                                    <FaEnvelope /> panugantilokeshwar@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919177621222">
                                    +91 91776 21222
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />My Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Panuganti Lokeshwar</p>
                    <p>Made with ❤️ using React</p>
                </div>
            </div>
        </footer>
    );
}