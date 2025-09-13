import React, { useState } from "react";
import { genImg } from "./Random-Image";
import { MapPin, Bookmark } from "lucide-react";

function BuySectionCard({ details }) {
  const lastDigit = parseInt(details.buildingNumber.slice(-1));
  const rating = (lastDigit % 5) + 1;

  return (
    <div className="w-full h-auto rounded-2xl shadow-md relative  bg-gray-100 hover:shadow-lg transition sm:mb-20 mb-15">
      <div className="bg-gray-100 rounded-md w-full relative">
        <img
          src={details.image}
          alt={details.title || "Property"}
          className="w-full md:h-90 sm:h-60 h-50 object-cover rounded-2xl "
          loading="lazy-loading"
          onError={(e) => {
            e.target.onerror = null; // infinite loop avoid karne ke liye
            e.target.src = genImg(); // yaha apni specific image lagao
          }}
        />

        <div className="absolute left-0 right-0 bottom-0 md:top-65 sm:top-35 top-25 md:mx-5 mx-2 hover:scale-102 transition hover:shadow-xl ">
          <div className="w-full rounded-2xl shadow-md overflow-hidden bg-white">
            {/* Card Content */}
            <div className="p-4">
              {/* Title and Bookmark */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  <h2 className="md:text-lg text-base font-semibold text-gray-800">
                    {details.name}
                  </h2>
                </div>
                <Bookmark className="text-blue-800" fill="blue" size={20} />
              </div>
              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 max-w-100 ">
                Spacious 3BHK apartment in a prime location with modern
                amenities.
              </p>

              <hr className="my-3" />

              {/* Price & Button */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">
                  <span className="text-lg font-semibold text-gray-800">
                    {details.buildingNumber
                      ? `$${Number(
                          details.buildingNumber.toString().slice(0, 5)
                        ).toLocaleString()}`
                      : "Contact for price"}
                  </span>
                </span>
                <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-full">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySectionCard;
