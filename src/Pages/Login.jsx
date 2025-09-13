import React, { useEffect, useState } from "react";
import LoginSignup from "../assets/images/LoginSignup.png";
import { Mail, Eye, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import apple from "../assets/images/apple.png";
import facebook from "../assets/images/facebook.png";
import google from "../assets/images/google.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondNavbar from "../Components/CommonLayouts/SecondNavbar";

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
      toast.error("Please enter email and password!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Get Firebase ID Token
      const token = await user.getIdToken();

      //  Save in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userEmail", user.email);

      toast.success("Login Successfull");
      navigate("/"); // Redirect to dashboard or protected page
    } catch (error) {
      toast.error(error.message, "invalid User");
    }
  };

  return (
    <>
    <SecondNavbar/>
      <div className="h-[90vh] bg-white ">
        <div className="w-full overflow-hidden flex  ">
          {/* Left Side (Form) */}
          <div className="lg:w-[40%] md:w-[60%] w-[90%] lg:p-15 p-4 flex flex-col justify-center   mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 w-full text-center">
              Log In
            </h2>

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
            <div className="flex items-center justify-between text-sm my-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name=""
                  id="radio"
                  className=" w-4  h-4 mr-2"
                />{" "}
                <label htmlFor="radio" className="cursor-pointer">
                  Remember Me
                </label>
              </div>
              <div className="text-red-500  cursor-pointer">
                Forgot Password?
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-700 text-white py-3 mt-4 rounded-full shadow-md hover:bg-blue-800 transition"
            >
              Log In
            </button>
            <div>
              <div class="flex items-center my-6">
                <div class="flex-1 border-t border border-gray-400"></div>
                <span class="px-3 text-gray-700 font-medium">
                  OR CONTINUE WITH
                </span>
                <div class="flex-1 border-t border border-gray-400"></div>
              </div>
            </div>
            <div className="mt-4 mb-8">
              <div className="flex items-center space-x-6 justify-center">
                <img src={apple} alt="" className="h-7 cursor-pointer" />
                <img src={facebook} alt="" className="h-7 cursor-pointer" />
                <img src={google} alt="" className="h-7 cursor-pointer" />
              </div>
            </div>

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

export default Login;
