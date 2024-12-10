import React, { useContext } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // To decode the user's token
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const userData = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    };
    login(userData);
  };

  const handleLoginError = () => {
    console.error("Login failed");
  };

  return (
    <div className="login">
      <h2>Login to StreamList</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
};

export default Login;
