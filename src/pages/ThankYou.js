import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="checkout-container">
      <h2 className="section-title">🎉 Thank You!</h2>
      <p>Your order has been placed successfully.</p>
      <p>We appreciate your purchase, and we'll get started right away!</p>
      <Link to="/">
        <button className="confirm-btn">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default ThankYou;
