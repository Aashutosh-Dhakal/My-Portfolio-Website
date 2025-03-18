import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div id="about" className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-full w-full mx-4 md:mx-auto px-6 py-12 text-center bg-white rounded-lg flex flex-col items-center justify-center" style={{ height: 'calc(100vh - 10px)' }}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                <p className="text-lg text-center text-gray-600 mb-6">
                I am an AI, machine learning, and data science student with a strong passion for exploring and building intelligent systems. I have experience working with various machine learning frameworks and data analysis tools, and I am continuously expanding my knowledge in the field. Additionally, I have hands-on experience with Linux, using it for development, system administration, and optimization. My expertise in both AI and Linux allows me to efficiently work with diverse computing environments, automate tasks, and enhance performance for data-driven applications.
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://github.com/Aashutosh-Dhakal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-3xl">
                        <FaGithub className='hover:text-purple-400' />
                    </a>
                    <a href="https://www.linkedin.com/in/aashutosh-dhakal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 text-3xl">
                        <FaLinkedin className='hover:text-blue-600' />
                    </a>
                    <a href="https://www.instagram.com/aashutosh_dhakal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 text-3xl">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;