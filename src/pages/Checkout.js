import React, { useState, useEffect } from "react";
import "../App.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });

  // Load data from sessionStorage on first render
  useEffect(() => {
    const savedData = sessionStorage.getItem("checkoutData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data to sessionStorage on every change
  useEffect(() => {
    sessionStorage.setItem("checkoutData", JSON.stringify(formData));
  }, [formData]);

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleConfirm = () => {
    // alert("✅ Order placed successfully!");
    sessionStorage.removeItem("checkoutData");
    // window.location.href = "/";
    window.location.href = "/thank-you";

  };

  return (
    <div className="checkout-container">
      <h2 className="section-title">Checkout</h2>

      <div className="checkout-form">
        <label>
          Full Name:
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Phone:
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>

      <div className="checkout-summary">
        <button
          className="confirm-btn"
          onClick={handleConfirm}
          disabled={!isFormValid}
          style={{ opacity: isFormValid ? 1 : 0.5 }}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
