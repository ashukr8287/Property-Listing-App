import React from "react";
import { MapPin, Star } from "lucide-react";
import { genImg } from "./Random-Image";

const PropertyCard = ({ details, month }) => {
  const lastDigit = parseInt(details.buildingNumber.slice(-1));
  const rating = (lastDigit % 5) + 1;

  return (
    <div className="sm:max-w-[340px] max-w-[280px]  rounded-2xl shadow-md overflow-hidden  p-2 bg-gray-100">
      <div className="bg-gray-100 rounded-md">
        {/* Image */}
        <img
          src={details.image}
          alt={details.title || "Property"}
          className="w-full h-60 object-cover rounded-md mb-2 "
          loading="lazy-loading"
          onError={(e) => {
            e.target.onerror = null; // infinite loop avoid karne ke liye
            e.target.src = genImg(); // yaha apni specific image lagao
          }}
        />

        {/* Content */}
        <div className="p-4">
          {/* Location + Rating */}
          <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-gray-400" />
              <span>{details.city || "Unknown"}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star
                size={16}
                className="text-yellow-500 fill-yellow-500 hover:scale-110"
              />
              <span>{rating === 5 ? rating - 0.5 : rating}/5</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4">
            {details.description ||
              "Spacious 3BHK apartment in a prime location with modern amenities."}
          </p>

          {/* Price + Button */}
          <div className="flex justify-between items-center">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-900 transition hover:scale-102">
              Buy Now
            </button>
            <span className="text-lg font-semibold text-gray-800">
              <span className="text-lg font-semibold text-gray-800">
                {details.buildingNumber
                  ? `$${Number(
                      details.buildingNumber.toString().slice(0, 5)
                    ).toLocaleString()}${month}`
                  : "Contact for price"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
