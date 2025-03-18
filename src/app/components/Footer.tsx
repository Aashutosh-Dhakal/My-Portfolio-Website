import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const PortfolioFooter: React.FC = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aashutosh-dhakal/' },
        { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Aashutosh-Dhakal' },
        { icon: <FaTwitter />, label: 'Twitter', href: 'https://x.com/Asu_Aashutosh' },
        { icon: <FaEnvelope />, label: 'Email', href: 'mailto:dhakalaashutosh123@gmail.com' },
    ];

    return (
        <footer className="bg-white text-black dark:bg-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-8 py-12">
                {/* Divider Above Text */}
                <div className="border-b border-gray-300 mb-8"></div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center">
                    {/* Brand */}
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Aashutosh Dhakal</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI and Machine Learning Engineer</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6 mt-6 md:mt-0">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-3xl transform hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex justify-center items-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Aashutosh Dhakal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default PortfolioFooter;