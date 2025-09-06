import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginSignup from "../assets/images/LoginSignup.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // can store later in DB if needed
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful ✅");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex h-[90vh] items-center justify-center bg-white">
      <div className="flex w-[90%] max-w-5xl bg-white md:rounded-2xl md:shadow-lg overflow-hidden">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6">Create new account</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter Your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-blue-900 rounded-lg outline-none pr-10"
            />
            <Mail className="absolute right-3 top-11 text-gray-400 w-5 h-5" />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-blue-900 rounded-lg outline-none pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-11 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-blue-900 rounded-lg outline-none pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-11 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-blue-800 text-white py-3 rounded-full font-medium hover:bg-blue-900 transition"
          >
            Create Account
          </button>

          {/* Login link */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-700 font-medium cursor-pointer"
            >
              Log In
            </span>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={LoginSignup}
            alt="House"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
