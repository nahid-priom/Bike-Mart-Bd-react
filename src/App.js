import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About"

import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FloatingCallButton from "./components/FloatingCallButton";
import BikeDetails from "./components/BikeDetails";
import ScrollToTop from "./components/ScrollToTop";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import ChildCategoryPage from "./pages/ChildCategoriesPage";


const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <ScrollToTop/>
        <Header />
       
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/bike/:bikeName" element={<BikeDetails />} />
          <Route path="/all-categories" element ={<AllCategoriesPage />} />
          <Route path="/category/:name" element={<ChildCategoryPage />} />

         
        </Routes>
        <FloatingCallButton/>
        <Footer />
       
      </Router>
    </div>
  );
};

export default App;
