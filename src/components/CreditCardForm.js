import React, { useState } from "react";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .substring(0, 19); // Limit to 16 digits + spaces
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = { cardNumber, expiry, cvv, name };
    localStorage.setItem("creditCardInfo", JSON.stringify(cardData));
    alert("Card information saved successfully!");
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setName("");
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>Enter Your Credit Card Information</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Cardholder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          style={styles.input}
          maxLength="3"
          required
        />
        <button type="submit" style={styles.button}>
          Save Card
        </button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CreditCardForm;
