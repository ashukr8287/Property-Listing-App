import React, { useEffect, useState } from "react";
import LoginSignup from "../assets/images/LoginSignup.png";
import { Mail, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔹 Get Firebase ID Token
      const token = await user.getIdToken();

      // 🔹 Save in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userEmail", user.email);

      alert("Login Successful ✅");
      navigate("/"); // Redirect to dashboard or protected page
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center md:bg-gray-50 bg-white px-4">
      <div className="w-full max-w-5xl bg-white md:shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center rounded-lg px-3 py-2 border border-blue-900">
              <input
                type="email"
                placeholder="Enter Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 outline-none text-gray-600"
              />
              <Mail className="text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="flex items-center border border-blue-900 rounded-lg px-3 py-2 shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 outline-none text-gray-600"
              />
              <Eye
                className="text-gray-400 w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 text-white py-3 rounded-full shadow-md hover:bg-blue-800 transition"
          >
            Log In
          </button>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-700 font-medium cursor-pointer"
            >
              Create One
            </span>
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:block md:w-1/2">
          <img src={LoginSignup} alt="Login" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
