import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Components.css";

const Navigation = () => (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <Link to="/movies" style={styles.link}>
        Movies
      </Link>
      <Link to="/cart" style={styles.link}>
        Cart
      </Link>
      <Link to="/about" style={styles.link}>
        About
      </Link>
    </nav>
  );
  
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "#f8f9fa",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
    },
  };
  
  export default Navigation;
