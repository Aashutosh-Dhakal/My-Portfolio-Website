"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ProfileCard: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Data Science Student", "AI and Machine Learning Engineer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div
        className="flex items-center justify-center"
        style={{
          margin: "5px",
          width: "calc(100% - 10px)",
          height: "calc(100vh - 10px)",
        }}
      >
        <div className="bg-white shadow-lg rounded-lg p-8 w-full h-full flex flex-col items-center justify-center text-center">
          {/* Image */}
          <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden border-2 border-black">
            <Image
              src="/images/my_pfp.jpeg"
              alt="Profile"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Hello, I'm</h1>
          <h2 className="text-6xl font-bold text-blue-600 mb-6">
            Aashutosh Dhakal
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
            {text}
            <span className="blinking-cursor">|</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleScroll}
              className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Scroll Down
            </button>
            <a href="https://drive.google.com/file/d/11RBxsKpdI76jojYtg9LBj-imRmSijQ45/view " target="_blank" rel="noopener noreferrer">
              <button
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
