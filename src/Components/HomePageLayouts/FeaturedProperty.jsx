import React from "react";
import { ArrowUpRight} from "lucide-react"; 
import img1 from "../../assets/images/Feature-img-1.jpg";
import img2 from "../../assets/images/Feature-img-2.jpg";
import img3 from "../../assets/images/Feature-img-3.jpg";
import img4 from "../../assets/images/Feature-img-4.jpg";

function FeaturedProperty() {
  const images = [img1, img2, img3, img4];
  return (
    <section className="py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-nowrap  gap-4 items-center justify-between lg:mb-6 mb-4">  
          <h3 className="text-[#254D91] font-extrabold sm:text-2xl text-base md:text-3xl whitespace-nowrap ">
            Featured Property
          </h3>
          <button className="flex items-center sm:py-2 py-1 sm:px-4 px-2 text-xs rounded-full text-[#254D91] bg-white border-2 border-[#1e3a8a] font-semibold  hover:bg-[#1e3a8a] hover:text-white md:text-base sm:text-xs ">See 260 New Projects <ArrowUpRight className="ml-2" size={18} /></button>
        </div>
        {/* Responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* First (50% on desktop) */}
          <div className="col-span-2 lg:col-span-2 relative">
            <img
              src={images[0]}
              alt="Feature 1"
              className="w-full h-full object-cover rounded-lg"
            />

            <div className=" absolute md:bottom-5 md:left-5 left-2 bottom-2 text-white">
              <p className="md:text-base text-sm ">By Finder & Projects</p>
              <h4 className=" font-semi-bold md:text-lg text-base">
                Kenanga Residance
              </h4>
            </div>
          </div>

          {/* Second (25% on desktop) */}
          <div className="col-span-1">
            <img
              src={images[1]}
              alt="Feature 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Third (2 stacked images) */}
          <div className="col-span-1">
            <div className="grid grid-rows-2  gap-4 md:gap-6 h-full">
              <img
                src={images[2]}
                alt="Feature 3"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src={images[3]}
                alt="Feature 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProperty
