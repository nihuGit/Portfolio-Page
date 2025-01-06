import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        <div></div> {/* Empty for alignment */}
        <div className="flex space-x-8">
          <a href="#home" className="text-gray-700 font-medium hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-700 font-medium hover:text-blue-500">About</a>
          <a href="#projects" className="text-gray-700 font-medium hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-700 font-medium hover:text-blue-500">Contact</a>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 items-center justify-center relative">
        {/* Social Icons */}
        <div className="absolute left-6 flex flex-col space-y-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-blue-500 text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-blue-500 text-2xl"></i>
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-behance text-blue-500 text-2xl"></i>
          </a>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-36 h-36 rounded-full border-4 border-blue-500 overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            UI & UX <br /> DESIGNER
          </h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600">
            <span>😎</span>
            <span>Nelson</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
