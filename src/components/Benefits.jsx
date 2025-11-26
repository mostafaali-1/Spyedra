import React from 'react';
import { FaSitemap, FaSearchLocation, FaFilter, FaThLarge, FaLaptop } from 'react-icons/fa';
import benefitImg1 from '../assets/benefit_img_1.jpg';
import benefitImg2 from '../assets/benefit_img_2.jpg';
import benefitImg3 from '../assets/benefit_img_3.jpg';
import benefitImg4 from '../assets/benefit_img_4.jpg';
import benefitImg5 from '../assets/benefit_img_5.jpg';
import './Benefits.css';

const Benefits = () => {
    return (
        <section className="benefits-section" id="benefits">
            <div className="benefits-container">
                <h2 className="benefits-title">BENEFITS</h2>
                <p className="benefits-description">
                    Powered by advanced cybersecurity technology engineered to secure every layer of your digital ecosystem with precision and real-time protection.
                </p>

                <div className="benefits-grid">
                    {/* Card 1: Full Width */}
                    <div className="benefit-card card-full" style={{ backgroundImage: `url(${benefitImg1})` }}>
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <FaSitemap className="benefit-icon" />
                            <h3 className="benefit-card-title">Real-Time Network Visibility</h3>
                            <p className="benefit-card-description">
                                Instant clarity on every connection, protocol, and data flow happening now
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Wide */}
                    <div className="benefit-card card-wide" style={{ backgroundImage: `url(${benefitImg2})` }}>
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <FaSearchLocation className="benefit-icon" />
                            <h3 className="benefit-card-title">Smart Traffic Analysis</h3>
                            <p className="benefit-card-description">
                                Understands patterns, top talkers, and protocol usage with zero effort
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Narrow */}
                    <div className="benefit-card card-narrow" style={{ backgroundImage: `url(${benefitImg3})` }}>
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <FaFilter className="benefit-icon" />
                            <h3 className="benefit-card-title">Early Threat Detection</h3>
                            <p className="benefit-card-description">
                                Identifies unusual or risky behavior before it becomes a problem
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Half Width */}
                    <div className="benefit-card card-half" style={{ backgroundImage: `url(${benefitImg4})` }}>
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <FaThLarge className="benefit-icon" />
                            <h3 className="benefit-card-title">Clean & Simple Interface</h3>
                            <p className="benefit-card-description">
                                A clear dashboard designed to show only what matters
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Half Width */}
                    <div className="benefit-card card-half" style={{ backgroundImage: `url(${benefitImg5})` }}>
                        <div className="card-overlay"></div>
                        <div className="card-content">
                            <FaLaptop className="benefit-icon" />
                            <h3 className="benefit-card-title">Works on Single Device or Full Network</h3>
                            <p className="benefit-card-description">
                                Perfect for personal monitoring or multi-device environments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
