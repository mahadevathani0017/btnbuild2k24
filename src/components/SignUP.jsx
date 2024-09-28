import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../firebase'; // Adjust the import based on your project structure
import { useHistory } from 'react-router-dom';

const auth = getAuth(app);

const SignUP = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '+1',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registration successful!"); // Notify user
        // Navigate to User Inventory page
        history.push('/user-inventory');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup-container flex items-center justify-center min-h-screen bg-[rgb(160,198,247)]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Create an Account</h1>

        <div className="space-y-6">
          {/* First Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              onChange={handleChange}
              value={formData.firstName}
              name="firstName"
              type="text"
              required
              placeholder="John"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Last Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              onChange={handleChange}
              value={formData.lastName}
              name="lastName"
              type="text"
              required
              placeholder="Doe"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              required
              placeholder="john.doe@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="flex">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input
                onChange={handleChange}
                value={formData.phoneNumber}
                name="phoneNumber"
                type="tel"
                required
                placeholder="123 456 7890"
                className="w-full p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              onChange={handleChange}
              value={formData.password}
              name="password"
              type="password"
              required
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              onChange={handleChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              required
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
