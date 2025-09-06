import React from "react";
import { MapPin, Bookmark,Star  } from "lucide-react";

const FeaturedPropertyCard = ({details}) => {
  return (
    <div className="relative w-1/2">
       <img
        src={"https://placehold.co/400"}
        alt={details.title || "Property"}
        className="w-full w-full object-cover rounded-md mb-2"
      />
    </div>
  );
};

export default FeaturedPropertyCard;
