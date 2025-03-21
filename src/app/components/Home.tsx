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
    <div className="flex flex-col min-h-screen bg-gray-100 text-black items-center justify-center p-6 sm:p-12">
      {/* Profile Image */}
      <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-black shadow-lg mb-6 sm:mb-8">
        <Image
          src="/images/my_pfp.jpeg"
          alt="Profile"
          width={224}
          height={224}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">Hello, I'm</h1>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-500 my-4 text-center">
        <span className="block sm:inline">Aashutosh</span>
        <span className="block sm:inline"> Dhakal</span>
      </h2>
      <p className="text-2xl sm:text-2xl md:text-3xl text-gray-800 mb-6 sm:mb-8 text-center">
        {text}
        <span className="blinking-cursor">|</span>
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-4 sm:gap-6 w-full justify-center items-center">
        <button
          onClick={handleScroll}
          className="px-6 sm:px-8 py-4 sm:py-5 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-base sm:text-lg"
        >
          Scroll Down
        </button>
        <a
          href="https://drive.google.com/file/d/11RBxsKpdI76jojYtg9LBj-imRmSijQ45/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="px-6 sm:px-8 py-4 sm:py-5 bg-blue-500 text-white font-semibold rounded-lg shadow-lg border-2 border-blue-500 hover:scale-105 transition-transform duration-300 text-base sm:text-lg"
          >
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;