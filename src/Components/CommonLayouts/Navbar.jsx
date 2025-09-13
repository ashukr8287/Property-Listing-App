import React, { useState } from "react";
import { Menu, X, House, CircleArrowRight } from "lucide-react";
import logo from "../../assets/images/Logo-icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Check if user is logged in
  const token = localStorage.getItem("authToken");

  // 🔹 Logout function
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="w-full shadow-sm bg-white top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-6">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <span className=" cursor-pointer text-base font-bold  flex items-center">
            <img src={logo} className="h-8 mr-2" alt="" />
            PropBot
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a
              onClick={() => navigate("/")}
              className={` hover:text-blue-600 hover:border-b-2 ${
                location.pathname === "/"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/buy")}
              className={` hover:text-blue-600  hover:border-b-2 ${
                location.pathname === "/buy"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              Buy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600  hover:border-b-2">
              Rent
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600  hover:border-b-2">
              Sell
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600  hover:border-b-2">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600  hover:border-b-2">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Login/Register OR Account Section */}
        {!token ? (
          <button
            onClick={() => navigate("/login")}
            className="hidden bg-[#1e3a8a] text-white px-5 py-2 rounded-full md:flex items-center space-x-1 hover:animate-pulse"
          >
            <span>Login / Register</span>
            <CircleArrowRight size={18} />
          </button>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="w-full md:hidden bg-white shadow-md pb-2 absolute z-50 p-4">
          <ul className="flex flex-col space-y-3 font-medium">
            <li>
              <a
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
                className={`${
                  location.pathname === "/"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/buy");
                  setIsOpen(false);
                }}
                className={`${
                  location.pathname === "/buy"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
              >
                Buy
              </a>
            </li>
            <li>
              <a href="#">Rent</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          {!token ? (
            <button
              className="flex items-center justify-center w-full bg-blue-700 text-white py-2 mt-3 rounded-full"
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
            >
              Login / Register{" "}
              <CircleArrowRight size={18} className="ml-2 mt-1" />
            </button>
          ) : (
            <div className="flex flex-col items-center mt-2 space-y-2">
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
