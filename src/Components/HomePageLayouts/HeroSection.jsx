import React from "react";
import img from "../../assets/images/Hero-Section-img.jpg";
import { Search, Home, MapPin, ChevronDown, SquareArrowOutUpRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Background Image */}
        <div className="relative rounded-2xl  ">
          <img
            src={img}
            alt=" Home"
            className="w-full h-[380px] md:h-[460px] object-cover rounded-2xl"
          />

          <div className="absolute top-10 left-0 right-0">
            <div className=" h-full flex flex-col  justify-between px-4" >
              <div className=" text-white text-center">
                <h1 className="text-2xl md:text-4xl font-extrabold mb-2">
                  Find Your Dream Home in One Click!
                </h1>
                <p className="text-gray-200 mb-6 text-base lg:text-xl">
                  Discover, Buy, or Rent Verified Properties with Ease.
                </p>
              </div>
              <div className="relative lg:top-50">
                <div className=" w-full  sm:w-[80%] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between  mb-8 px-0">
                  <div className=" lg:w-[50%] w-full bg-white text-gray-400 flex items-center px-4 rounded-xl lg:mb-0 mb-4">
                    <MapPin />
                    <input
                      type="text"
                      className="flex-1 py-3 outline-none  px-2"
                    />
                    <Search />
                  </div>
                  <button className=" px-4 py-2 bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] font-semibold rounded-full whitespace-nowrap">
                    List Your Property
                  </button>
                </div>

                <div className="hidden md:block w-[90%] lg:w-[80%] mx-auto mb-8 rounded-2xl lg:rounded-full bg-white py-4 px-4 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-nowrap  items-center justify-center lg:justify-between gap-4">
                    {/* For Rent Dropdown */}
                    <div className="flex items-center justify-between border border-gray-300 rounded-full px-5 py-3 w-full">
                      <div className="flex items-center">
                        <SquareArrowOutUpRight className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 font-medium">
                          For Rent
                        </span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* House Dropdown */}
                    <div className="flex items-center justify-between border border-gray-300 rounded-full px-5 py-3 w-full">
                      <div className="flex items-center">
                        <Home className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 font-medium">House</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* Location Dropdown */}
                    <div className="flex items-center justify-between border border-gray-300 rounded-full px-5 py-3 w-full">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 font-medium">
                          Indonesia
                        </span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* Find Property Button */}
                    <button className="  bg-blue-800 text-white font-semibold rounded-full px-8 py-3 w-full lg:w-200">
                      Find Property
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
