import React from "react";
import { MapPin, Star } from "lucide-react";

const PropertyCard = ({ details }) => {
  return (
    <div className="max-w-[280px]  rounded-2xl shadow-md overflow-hidden  p-2 bg-gray-100">
      <div className="bg-gray-100 rounded-md">
        {/* Image */}
      <img
        src={"https://placehold.co/400"}
        alt={details.title || "Property"}
        className="w-full h-40 object-cover rounded-md mb-2"
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
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span>{details.rating ? `${details.rating}/5` : "N/A"}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4">
          {details.description ||
            "Spacious 3BHK apartment in a prime location with modern amenities."}
        </p>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-900 transition">
            Buy Now
          </button>
          <span className="text-lg font-semibold text-gray-800">
            {details.buildingNumber ? `$${details.buildingNumber.slice(0,5)}` : "Contact for price"}
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PropertyCard;
