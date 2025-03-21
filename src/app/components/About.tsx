import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPython, FaLinux, FaTable, FaBook } from 'react-icons/fa';
import { SiNumpy, SiPandas, SiTensorflow, SiPytorch, SiScikitlearn, SiPlotly } from 'react-icons/si';

const About = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl text-justify">
                I am an AI, machine learning, and data science student passionate about building intelligent systems. 
                With experience in various ML frameworks and data analysis tools, I am continuously expanding my expertise. 
                Additionally, I have hands-on experience with Linux for development, system administration, and optimization.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 mt-6">
                <a href="https://github.com/Aashutosh-Dhakal" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-purple-600 text-4xl transition duration-300 transform hover:scale-110">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/aashutosh-dhakal/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-blue-700 text-4xl transition duration-300 transform hover:scale-110">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/aashutosh_dhakal/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-pink-600 text-4xl transition duration-300 transform hover:scale-110">
                    <FaInstagram />
                </a>
            </div>

            {/* Skills Section */}
            <h3 className="text-4xl font-semibold text-gray-800 mt-10 mb-8">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl">
                {[
                    { icon: <FaPython className="mr-2" />, text: "Python" },
                    { icon: <SiNumpy className="mr-2" />, text: "Numpy" },
                    { icon: <SiPandas className="mr-2" />, text: "Pandas" },
                    { icon: <SiPlotly className="mr-2" />, text: "Matplotlib" },
                    { icon: <SiTensorflow className="mr-2" />, text: "Tensorflow" },
                    { icon: <SiPytorch className="mr-2" />, text: "Pytorch" },
                    { icon: <SiScikitlearn className="mr-2" />, text: "Scikit-learn" },
                    { icon: <FaBook className="mr-2" />, text: "Mathematics" },
                    { icon: <FaLinux className="mr-2" />, text: "Linux" },
                    { icon: <FaTable className="mr-2" />, text: "Excel" },
                ].map((skill, index) => (
                    <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-md"
                    >
                        {skill.icon} {skill.text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default About;
