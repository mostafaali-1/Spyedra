import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';
import logoImg from '../assets/logo.jpg';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const formSectionRef = useRef(null);

    const handleContactClick = () => {
        setShowForm(true);
    };

    useEffect(() => {
        if (showForm && formSectionRef.current) {
            formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [showForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent to Spydra!');
    };

    return (
        <>
            <section className="contact-section" id="contact">
                <div className="contact-container">
                    <p className="contact-eyebrow">UPSKILL FOR A BETTER FUTURE</p>
                    <h2 className="contact-heading">Request More Information</h2>
                    <p className="contact-description">
                        A desktop cybersecurity tool designed to detect, block, and
                        <br />monitor threats in real-time
                    </p>
                    <button className="contact-btn" onClick={handleContactClick}>Contact Us</button>
                    <p className="contact-copyright">&copy;2025 Lift Media, spydra</p>
                </div>
            </section>

            {showForm && (
                <section className="getintouch-section" ref={formSectionRef} id="getintouch">
                    <div className="getintouch-header">
                        <h2 className="getintouch-title">
                            Get in <span className="getintouch-highlight">touch</span>
                        </h2>
                        <p className="getintouch-subtitle">
                            Reach out, and let's create a universe of possibilities together!
                        </p>
                    </div>

                    <div className="getintouch-content">
                        <div className="getintouch-form-side">
                            <h3 className="form-side-title">Let's connect constellations</h3>
                            <p className="form-side-desc">
                                Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
                            </p>
                            <form className="getintouch-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input type="text" placeholder="Last Name" className="form-input" required />
                                    <input type="text" placeholder="First Name" className="form-input" required />
                                </div>
                                <input type="email" placeholder="Email" className="form-input form-input-full" required />
                                <input type="tel" placeholder="Phone Number" className="form-input form-input-full" />
                                <textarea placeholder="Message" className="form-textarea" rows="4" required></textarea>
                                <button type="submit" className="form-submit-btn">
                                    Send it to spydra &nbsp;➤
                                </button>
                            </form>
                        </div>

                        <div className="getintouch-card-side">
                            <div className="spydra-card">
                            
                                <div className="spydra-card-img-wrapper">
                                    <img src={logoImg} alt="Spydra Spider" className="spydra-card-img" />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Contact;
