import React from "react";

function Footer() {
  return (
    <footer className="bg-[#4b61a1] text-white py-6 md:py-10">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get in Touch with Us
        </h2>
        <p className="text-white mb-6 lg:text-2xl md:text-xl ">
          Subscribe now for exclusive  property <br /> insights and deals!
        </p>

        {/* Subscription Form */}
        <div className="flex justify-center">
          <div className="flex bg-white rounded-full overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-blue-800 text-white px-8 py-2 m-1 rounded-full hover:bg-blue-900 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-10 pt-6 px-4 lg:px-8 container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-200">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span className="text-xl">🏠</span>
          <h1 className="font-bold">PropBot</h1>
        </div>

        {/* Links */}
        <ul className="flex  mb-4 md:mb-0 gap-4">
          <li><a href="#">For Sale</a></li>
          <li><a href="#">Rentals</a></li>
          <li><a href="#">New Projects</a></li>
          <li><a href="#">Property News</a></li>
        </ul>

        {/* Copyright */}
        <p>@2025 Propbot. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
