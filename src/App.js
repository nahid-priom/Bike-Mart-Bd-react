import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />}></Route>
         
        </Routes>
        <Footer />
       
      </Router>
    </div>
  );
};

export default App;
