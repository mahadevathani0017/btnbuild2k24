import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg';
import '../App.css'; // Ensure you import the CSS file for animations

const Home = () => {
  const [isTextVisible, setIsTextVisible] = useState(false); // State to manage text visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // Set the text to be visible after a short delay
    }, 100); // Adjust delay if needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to right, #D2FF72, #15B392)' }}>
      {/* Header */}
      <header
        className="sticky top-0 w-full h-20 flex items-center justify-between shadow-md px-5 z-50"
        style={{ background: 'rgba(255, 255, 255, 0.8)' }} // Optional: make header slightly transparent
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 md:w-28 rounded-full" />
        </div>

        {/* Centered Title */}
        <h1 className="text-purple-600 text-lg md:text-5xl font-bold flex-grow text-center" style={{ width: '50%' }}>
          EasyWardrobe
        </h1>

        {/* Buttons on the right */}
        <div className="flex space-x-4">
 
          
          {/* Register Button */}

          <Link to="/register">
            <div className="flex items-center justify-center h-12 w-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg cursor-pointer transition-transform transform hover:-translate-y-1 active:translate-y-0">
              <p className="text-white font-bold text-base">SignUp</p>
            </div>
          </Link>
          {/* Other buttons like Login and Contact Us can be added here */}
          <Link to="/login">
            <div className="flex items-center justify-center h-12 w-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg cursor-pointer transition-transform transform hover:-translate-y-1 active:translate-y-0">
              <p className="text-white font-bold text-base">Login</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Body */}
      <div className="flex-grow w-full flex items-center justify-center mt-10">
        <p className={`text-white text-3xl font-lobster ${isTextVisible ? 'pop-up-animation' : ''}`}>
          Welcome to the EasyWardrobe 😎 {/* Full text displayed here */}
        </p>
      </div>
    </div>
  );
};

export default Home;
