import React, { useState } from "react";
import logo from "../../assets/images/Logo-icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

function SecondNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="w-full shadow-sm bg-white top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-6">
        <div className="hidden md:flex items-center space-x-4">
            <button
            onClick={()=>navigate("/")}
              className=" border border-blue-900 text-gray-500 bg-white px-4 py-2 rounded-full flex items-center "
            >
               <CircleArrowRight size={18} className="rotate-180 mr-2"/>Back to Homepage
            </button>
          </div>
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <span className="cursor-pointer text-xl sm:text-base font-bold flex items-center">
            <img src={logo} className="h-12 sm:h-8 mr-2" alt="logo" />
            PropBot
          </span>
        </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
            onClick={()=>navigate("/")}
              className="bg-[#1e3a8a] text-white px-4 py-2 rounded-full hover:bg[#29448e] transition flex items-center "
            >
              About Us <CircleArrowRight className="ml-2 " size={18}/>
            </button>
          </div>
      </div>
    </nav>
  );
}

export default SecondNavbar;
