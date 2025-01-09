import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/login.css";
import PasswordInput from "../components/fields/password";
import EmailInput from "../components/fields/Email";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost/react-app/two/my-php-backend/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,  // Make sure this key matches the PHP script
        password: password
      })
    });
  
    try {
      const data = await response.json();
  
      if (data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/home");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Something went wrong!",
          confirmButtonText: "Try again",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Unexpected error occurred.",
        confirmButtonText: "Try again",
      });
    }
  };
  

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 signup-container">
      <div className="card signup-form shadow-lg">
        <div className="card-body d-flex flex-column justify-content-center">
        <div className="card-header">
          <h1 className="card-title text-center mb-4">SIGN IN</h1>
        </div>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <EmailInput
                type="email"
                placeholder="Email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <PasswordInput
                type="password"
                placeholder="Password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </form>
          <p className="text-center text-white mt-3">
            Don't have an account?{" "}
            <a href="/login" className="my-text">
              Sign Up
            </a>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
