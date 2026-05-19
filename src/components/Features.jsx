import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import featureImg1 from '../assets/feature_img_1.jpg';
import featureImg2 from '../assets/feature_img_2.jpg';
import featureImg3 from '../assets/feature_img_3.jpg';
import featureImg4 from '../assets/feature_img_4.jpg';
import featureImg5 from '../assets/feature_img_5.jpg';
import './Features.css';

const ShieldIcon = () => (
    <div className="feature-icon-wrapper">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L6 12V22C6 33.1 13.68 43.48 24 46C34.32 43.48 42 33.1 42 22V12L24 4Z" fill="#8B5CF6" />
            <circle cx="24" cy="28" r="3" fill="white" />
            <rect x="22.5" y="16" width="3" height="8" rx="1.5" fill="white" />
        </svg>
    </div>
);

const LockIcon = () => (
    <div className="feature-icon-wrapper">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20V16C14 10.48 18.48 6 24 6C29.52 6 34 10.48 34 16V20" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" fill="none" />
            <rect x="10" y="20" width="28" height="22" rx="4" fill="#8B5CF6" />
            <circle cx="24" cy="30" r="3" fill="white" />
            <rect x="22.5" y="32" width="3" height="4" rx="1.5" fill="white" />
        </svg>
    </div>
);

const BoltIcon = () => (
    <div className="feature-icon-wrapper">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 4L12 28H22L18 44L38 18H26L28 4Z" fill="#8B5CF6" />
        </svg>
    </div>
);

const EyeIcon = () => (
    <div className="feature-icon-wrapper">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12C14 12 5.46 18.22 2 27C5.46 35.78 14 42 24 42C34 42 42.54 35.78 46 27C42.54 18.22 34 12 24 12Z" fill="#8B5CF6" />
            <circle cx="24" cy="27" r="7" fill="white" />
            <circle cx="24" cy="27" r="3.5" fill="#8B5CF6" />
        </svg>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: <ShieldIcon />,
            title: "QUANTUM THREAT DETECTION",
            description: "AI-powered threat analysis detects anomalies in real-time across your entire network infrastructure."
        },
        {
            icon: <LockIcon />,
            title: "MILITARY-GRADE SECURITY",
            description: "End-to-end encryption with zero-trust architecture. Your data stays protected, always."
        },
        {
            icon: <BoltIcon />,
            title: "LIGHTNING PERFORMANCE",
            description: "Zero-latency monitoring with instant alerts. Process millions of network events per second."
        },
        {
            icon: <EyeIcon />,
            title: "TOTAL VISIBILITY",
            description: "AI-powered threat analysis detects anomalies in real-time across your entire network infrastructure."
        }
    ];

    const scrollImages = [featureImg1, featureImg2, featureImg3, featureImg4, featureImg5];


    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await controls.start({
                x: "-50%",
                transition: {
                    duration: 20,
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
