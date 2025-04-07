import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Equipment from "./pages/Equipment";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import NavbarTop from "./components/NavbarTop";
import NavbarMain from "./components/NavbarMain";
import ProductDetail from "./pages/ProductDetail";
import CartProvider from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarTop />
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/About" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={1500} />
      </Router>
    </CartProvider>
  );
}

export default App;
