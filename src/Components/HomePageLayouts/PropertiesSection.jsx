import React from "react";
import { PiggyBank, ShieldCheck, MapPin } from "lucide-react";
import img1 from '../../assets/images/Feature-img-5.jpg';
import img2 from '../../assets/images/Feature-img-6.jpg';

function PropertiesSection() {
  return (
    <section className=" py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="grid md:grid-cols-2 md:gap-8 gap-4 items-center">
          {/* Images Section */}
          <div className="relative sm:h-[500px] h-[400px]">
            <div className="absolute top-0 left-0 w-3/4 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform duration-200 ease-in-out hover:lg:z-10 md:hover:scale-105">
              <img
                src={img1}
                alt="Modern White House"
                className="w-full md:h-[350px] h-[280px] object-cover"
              />
            </div>
            <div className="absolute sm:bottom-0  bottom-0 right-0 w-3/5 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform duration-200 ease-in-out hover:lg:z-10 md:hover:scale-105">
              <img
                src={img2}
                alt="Wooden House"
                className="w-full md:h-[300px] h-[280px] object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h2 className="text-[#1e3a8a] font-bold text-2xl md:text-4xl mb-8 leading-tight max-w-xl">
              We Provide Latest Properties
              
              For Our Valuable Clients
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                  <PiggyBank className="text-[#1e3a8a] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#1e3a8a] font-semibold text-xl mb-2">
                    Budget Friendly
                  </h3>
                  <p className="text-gray-600">
                    Our properties offer the best value for your investment with competitive pricing and flexible payment options to suit various budgets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                  <ShieldCheck className="text-[#1e3a8a] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#1e3a8a] font-semibold text-xl mb-2">
                    Trusted By Thousands
                  </h3>
                  <p className="text-gray-600">
                    With over a decade in the real estate industry, we've helped thousands of clients find their perfect homes and investment properties.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-[#1e3a8a] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#1e3a8a] font-semibold text-xl mb-2">
                    Prime Location
                  </h3>
                  <p className="text-gray-600">
                    Our properties are strategically located in developing areas with great potential for appreciation and convenient access to amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertiesSection;