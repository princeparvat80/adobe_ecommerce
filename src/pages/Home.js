// ✅ Cleaned & ESLint-Valid Home.js
import React from "react";
import { Link } from 'react-router-dom';
import {
  VIDEO_BANNER,
  IMG_WOMEN,
  IMG_MEN,
  IMG_EQUIPMENT,
  IMG_MAT,
  IMG_SHOES,
  IMG_TSHIRT,
  IMG_DUMBBELLS,
  BLOG1,
  BLOG2,
  BLOG3
} from "../assets/assets.js";

const Home = () => {
  return (
    <div className="home-container">
      {/* VIDEO BANNER */}
      <section className="video-banner">
        <video
          className="banner-video"
          src={VIDEO_BANNER}
          autoPlay
          loop
          muted
          controls
        />
      </section>

      {/* CATEGORY GRID */}
      <section className="category-grid">
        <div
          className="category-card women"
          style={{ backgroundImage: `url(${IMG_WOMEN})` }}
        >
          <div className="overlay">
            <h2>VIEW OUR WOMEN'S CATALOG</h2>
            <Link to="/women">
              <button>WOMEN →</button>
            </Link>
          </div>
        </div>

        <div
          className="category-card men"
          style={{ backgroundImage: `url(${IMG_MEN})` }}
        >
          <div className="overlay">
            <h2>VIEW OUR MEN'S CATALOG</h2>
            <Link to="/men">
              <button>MEN →</button>
            </Link>
          </div>
        </div>

        <div
          className="category-card equipment"
          style={{ backgroundImage: `url(${IMG_EQUIPMENT})` }}
        >
          <div className="overlay">
            <h2>VIEW ALL OUR BEST GEAR</h2>
            <Link to="/equipment">
              <button>EQUIPMENT →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={IMG_MAT} alt="EcoFit Yoga Mat" />
            <h3>EcoFit Yoga Mat</h3>
            <p className="price">₹999</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={IMG_SHOES} alt="Performance Shoes" />
            <h3>Performance Shoes</h3>
            <p className="price">₹2,499</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={IMG_TSHIRT} alt="Flex T-Shirt" />
            <h3>Flex T-Shirt</h3>
            <p className="price">₹699</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img src={IMG_DUMBBELLS} alt="Grip Dumbbells" />
            <h3>Grip Dumbbells</h3>
            <p className="price">₹1,299</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
      <h2 className="section-title">📝 Our Top Blog Stories</h2>
      <div className="blog-grid">
          <div className="blog-card">
            <img src={BLOG1} alt="Beginner's Luck" />
            <h3>Beginner's Luck</h3>
          </div>

          <div className="blog-card">
            <img src={BLOG2} alt="Warming Up" />
            <h3>Warming Up</h3>
          </div>

          <div className="blog-card">
            <img src={BLOG3} alt="Keep Moving" />
            <h3>Keep Moving</h3>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <div className="footer-links">
          <Link to="/blogs">Blog</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/about">About Us</Link>
          <Link to="/community">Community</Link>
        </div>

        <p className="copyright">
          © 2025 ALL RIGHTS RESERVED BY PRINCE PARVAT INC.
        </p>

        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO TOP ⬆
        </button>
        
      </section>
    </div>
  );
};

export default Home;