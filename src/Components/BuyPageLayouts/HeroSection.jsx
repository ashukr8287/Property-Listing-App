import React from "react";
import img from "../../assets/images/Buy-Section-img.png";
import { Search, Home, MapPin, ChevronDown, Play } from "lucide-react";

function HeroSection() {
  return (
    <section className="py-6 md:py-10 bg-gray-50 ">
      <div className="container mx-auto px-4 lg:px-8 sm:mb-0 mb-5">
        {/* Background Image */}
        <div className="relative rounded-2xl  ">
          <img
            src={img}
            alt=" Home"
            className="w-full h-[380px] md:h-[460px] object-center rounded-2xl"
          />

          <div className="absolute top-0 left-0 right-0">
            <div className="px-4 relative lg:top-60 md:top-30" >
              <div className=" text-white w-[95%] lg:w-[80%] mx-auto">
                <h1 className="text-xl md:text-4xl font-extrabold mb-2 mt-5 md:mt-0 ">
                  Find Your Dream Home in One Click!
                </h1>
                <p className="text-gray-200 md:mb-6 mb-4 text-base">
                  Discover, Buy, or Rent Verified Properties with Ease.
                </p>
              </div>
              <div className="relative lg:top-5 top-0 ">
                <div className="  w-[95%] lg:w-[80%] mx-auto mb-8 rounded-2xl lg:rounded-full bg-white py-4 px-2 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-nowrap  items-center justify-center lg:justify-between gap-4">
                    {/* For Rent Dropdown */}
                    <div className="flex items-center justify-between border border-gray-300 rounded-full px-5 py-3 w-full">
                      <div className="flex items-center">
                        <Play className="w-5 h-5 text-gray-400 mr-2 rotate-90" />
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
