import React from 'react';
import '../css/herosection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
      <h1>LET'S BRING YOUR DREAM TO REALITY</h1>
     <p>Discover and get inspired by the best interior design ideas. 
        Our platform offers a vast collection of beautiful and innovative interior designs to help you transform your space.
         Explore our curated galleries, save your favorite designs, and share your own creations with our community.
       </p>
        <div className="hero-buttons">
          <Link to ="/design">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
          <Link to ="/upload">
          <button className="btn upload-btn">Upload Your Design</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
