import React from "react";
import { FiMail } from "react-icons/fi"; // Import mail icon from react-icons
import Footer from "./Footer"; // Import Footer component

const Contact = () => {
    return (
        <div className="bg-white flex flex-col justify-between min-h-screen m-5">
            <div
                className="flex-grow flex items-center justify-center text-black p-5 text-left font-sans"
                style={{ margin: "5px" }}
            >
                <div className="max-w-screen-sm mx-auto"> {/* Center the content */}
                    <h4 className="text-4xl font-extrabold mb-6 text-center tracking-wide">
                        Get in Touch
                    </h4>
                    <p className="text-gray-600 text-center mb-8 text-lg">
                        Have a question or want to collaborate? Feel free to reach out!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="mailto:dhakalaashutosh123@gmail.com"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-md"
                        >
                            <FiMail className="text-xl" /> Send an Email
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;