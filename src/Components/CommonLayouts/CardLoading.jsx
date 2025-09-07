import React from "react";

const CardLoading = () => {
  return (
    <div className="lg:w-[330px] w-[280px] rounded-2xl shadow-md overflow-hidden p-2 bg-gray-100 animate-pulse">
      <div className="bg-gray-200 rounded-md">
        {/* Image skeleton */}
        <div className="w-full h-40 bg-gray-300 rounded-md mb-2"></div>

        <div className="p-4">
          {/* Location + Rating skeleton */}
          <div className="flex justify-between items-center mb-2">
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>

          {/* Description skeleton */}
          <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
          <div className="h-3 w-5/6 bg-gray-300 rounded mb-4"></div>

          {/* Price + Button skeleton */}
          <div className="flex justify-between items-center">
            <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
