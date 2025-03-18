"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-700">Aashutosh Dhakal</div>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {[
                        { id: "home", label: "Home" },
                        { id: "about", label: "About" },
                        { id: "projects", label: "Projects" },
                        { id: "contact", label: "Contact" },
                    ].map((item) => (
                        <li key={item.id}>
                            <button onClick={() => handleScroll(item.id)} className="text-gray-700 hover:text-blue-600 text-lg relative group">
                                {item.label}
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </button>
                        </li>
                    ))}
                </ul>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={() => setIsOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>
            
            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}> 
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <span className="text-xl font-bold text-gray-700">Menu</span>
                    <button className="text-gray-700" onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>
                <ul className="flex flex-col items-center mt-8 space-y-6">
                    {[
                        { id: "home", label: "Home" },
                        { id: "about", label: "About" },
                        { id: "projects", label: "Projects" },
                        { id: "contact", label: "Contact" },
                    ].map((item) => (
                        <li key={item.id}>
                            <button onClick={() => handleScroll(item.id)} className="text-gray-700 text-lg hover:text-blue-600">
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
