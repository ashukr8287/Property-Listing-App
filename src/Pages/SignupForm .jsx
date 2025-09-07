import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginSignup from "../assets/images/LoginSignup.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondNavbar from "../Components/CommonLayouts/SecondNavbar";

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
      toast.error("Passwords do not match ❌");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup Successful ✅");
      navigate("/login");
    } catch (error) {
      toast.alert(error.message);
    }
  };

  return (
    <>
      <SecondNavbar />
      <div className="flex h-auto items-center justify-center bg-white">
        <div className="flex w-full overflow-hidden">
          {/* Left Section - Form */}
          <div className="lg:w-[40%] md:[60%] w-[90%] lg:p-15 p-4 flex flex-col justify-center   mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create new account
            </h2>

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
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
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
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
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
            <p className="text-sm text-gray-600 mt-8 text-center">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-700 font-medium cursor-pointer"
              >
                Log In
              </span>
            </p>
          </div>

          {/* Right Side (Image) */}
          <div className="hidden md:block  h-full overflow-hidden rounded-2xl lg:w-[60%] w-[40%] ">
            <img
              src={LoginSignup}
              alt="Login"
              className="w-full h-[78vh] my-10 object-cover rounded-l-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
