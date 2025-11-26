import React from 'react';
import './Hero.css';
import laptopImg from '../assets/spydra_laptop.png';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-bg"></div>

            <div className="hero-content">
                <h1 className="hero-title">Spyedra</h1>
                <h2 className="hero-subtitle">Secure your<br />system, effortlessly</h2>
                <p className="hero-description">
                    A desktop cybersecurity tool designed to detect, block, and monitor threats in real-time
                </p>

                <div className="hero-buttons">
                    <button className="btn-download btn-mac">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="btn-icon"
                        >
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.23-.93.63 0 2.45.41 3.24 1.51-2.84 1.37-2.37 5.23 1 6.58-.61 1.8-1.46 3.53-2.55 5.07zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.16 2.29-2.06 4.27-3.74 4.25z" />
                        </svg>
                        <span>Download For Mac</span>
                    </button>
                    <button className="btn-download btn-windows">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.651L24 0v11.4H10.949V1.798zm-10.949 10.8h9.75v9.451L0 20.551v-7.952zm10.949 0H24v11.4l-13.051-1.798v-9.602z" />
                        </svg>
                        <span>Download for windows</span>
                    </button>
                </div>
            </div>

            <div className="hero-image-container">
                <img src={laptopImg} alt="Spydra Dashboard on Laptop" className="hero-laptop-img" />
            </div>
        </section>
    );
};

export default Hero;
