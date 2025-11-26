import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaShieldAlt, FaLock, FaBolt, FaEye } from 'react-icons/fa';
import featureImg1 from '../assets/feature_img_1.jpg';
import featureImg2 from '../assets/feature_img_2.jpg';
import featureImg3 from '../assets/feature_img_3.jpg';
import featureImg4 from '../assets/feature_img_4.jpg';
import featureImg5 from '../assets/feature_img_5.jpg';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <FaShieldAlt className="feature-icon" />,
            title: "QUANTUM THREAT DETECTION",
            description: "AI-powered threat analysis detects anomalies in real-time across your entire network infrastructure."
        },
        {
            icon: <FaLock className="feature-icon" />,
            title: "MILITARY-GRADE SECURITY",
            description: "End-to-end encryption with zero-trust architecture. Your data stays protected, always."
        },
        {
            icon: <FaBolt className="feature-icon" />,
            title: "LIGHTNING PERFORMANCE",
            description: "Zero-latency monitoring with instant alerts. Process millions of network events per second."
        },
        {
            icon: <FaEye className="feature-icon" />,
            title: "TOTAL VISIBILITY",
            description: "AI-powered threat analysis detects anomalies in real-time across your entire network infrastructure."
        }
    ];

    const scrollImages = [featureImg1, featureImg2, featureImg3, featureImg4, featureImg5];

    // Auto-scroll Logic
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await controls.start({
                x: "-50%",
                transition: {
                    duration: 20, // Total duration for one full loop
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            });
        };
        sequence();
    }, [controls]);

    return (
        <section className="features-section" id="features">
            <h2 className="features-title">CORE FEATURES</h2>
            <p className="features-description">
                Powered by advanced cybersecurity technology engineered to secure every layer of your digital ecosystem with precision and real-time protection.
            </p>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="icon-wrapper">
                            {feature.icon}
                        </div>
                        <h3 className="feature-card-title">{feature.title}</h3>
                        <p className="feature-card-description">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="features-image-container">
                <h2 className="features-title">INTERFACE PREVIEW</h2>
                <p className="features-description">
                    Powered by advanced cybersecurity technology engineered to secure every layer of your digital ecosystem with precision and real-time protection.
                </p>

                <div className="horizontal-scroll-container">
                    <motion.div
                        className="horizontal-scroll-track"
                        animate={controls}
                    >
                        {/* Double the images to ensure enough length for scrolling effect */}
                        {[...scrollImages, ...scrollImages].map((img, index) => (
                            <div key={index} className="scroll-item">
                                <img src={img} alt={`Feature Preview ${index + 1}`} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
