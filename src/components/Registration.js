import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/login.css";
import PasswordInput from "../components/fields/password";
import EmailInput from "../components/fields/Email";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Confirm Passwords do not match!",
        confirmButtonText: "Try again",
      });
      return;
    }

    const response = await fetch(
      "http://localhost/react-app/two/my-php-backend/registration.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          username: username,
          password: password,
          confirm_password: confirmPassword,
        }),
      }
    );

    try {
      const data = await response.json();

      if (data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Registration successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/login");
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
                    <h1 className="card-title text-center mb-4">SIGN UP</h1>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                className="form-control"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                className="form-control"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                className="form-control"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <EmailInput
                                type="text"
                                placeholder="Username"
                                value={username}
                                className="form-control"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <PasswordInput
                                type="password"
                                placeholder="Password"
                                value={password}
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12 position-relative">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                className="form-control"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <i
                                className="fa fa-eye position-absolute top-50 end-0 translate-middle-y me-3"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    const input = document.querySelector(
                                        'input[placeholder="Confirm Password"]'
                                    );
                                    input.type = input.type === "password" ? "text" : "password";
                                }}
                            ></i>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary w-100">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <p className="text-center text-white mt-3">
                    Already have an account?{" "}
                    <a href="/login" className="my-text">
                        Sign In
                    </a>{" "}
                    here
                </p>
            </div>
        </div>
    </div>
);
};

export default SignUp;
