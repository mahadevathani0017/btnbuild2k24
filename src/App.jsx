import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUP"; // Adjust the path according to your project structure
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUP from "./components/SignUP";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/register" element={<SignUP />} />
        <Route path="/login" element={<SignIn />} />
       
      </Routes>
    </Router>
  );
}

export default App;
