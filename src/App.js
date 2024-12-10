import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./context/AuthContext";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import StreamList from "./components/StreamList";
import Movies from "./components/movies";
import ShoppingCart from "./components/ShoppingCart"; // Import this component
import CreditCardForm from "./components/CreditCardForm"; // Import this component
import { About } from "./components/Placeholder";
import PrivateRoute from "./components/PrivateRoute";

const GOOGLE_CLIENT_ID = "68643039170-t210jfbp833hq4s1onlnf8g4cesfd921.apps.googleusercontent.com";

const App = () => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <StreamList />
              </PrivateRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <PrivateRoute>
                <Movies />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <ShoppingCart />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CreditCardForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  </GoogleOAuthProvider>
);

export default App;