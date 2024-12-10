import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>Shopping Cart</h2>
      <p>Your selected items are displayed here.</p>
      <button onClick={handleCheckout} style={styles.button}>
        Proceed to Checkout
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ShoppingCart;
