import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"; // Import icons from react-icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social media icons
import Footer from "./Footer"; // Import Footer component

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center text-center px-4">
            {/* Get in Touch Section */}
            <h4 className="text-4xl font-extrabold mb-6 text-center tracking-wide text-black">
                Get in Touch
            </h4>
            <p className="text-gray-600 text-center mb-8 text-lg">
                Have a question or want to collaborate? Feel free to reach out!
            </p>

            {/* Email Button */}
            <div className="flex justify-center mb-8">
                <a
                    href="mailto:dhakalaashutosh123@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-blue-600 hover:border-blue-600 transition-transform transform hover:scale-105"
                >
                    <FiMail className="text-xl" /> Send an Email
                </a>
            </div>

            {/* Contact Information Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {/* Email */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FiMail className="text-3xl text-blue-500 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Email</h5>
                    <p className="text-gray-600">dhakalaashutosh123@gmail.com</p>
                </div>

                {/* Location */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FiMapPin className="text-3xl text-blue-500 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Location</h5>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                </div>

                {/* Phone */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                    <FiPhone className="text-3xl text-blue-500 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Phone</h5>
                    <p className="text-gray-600">+977 984-1263536</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
