import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FetchApi from "../../utils/FetchApi";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import CardLoading from "../CommonLayouts/CardLoading";
import PropertyCard from "../CommonLayouts/PropertyCard ";



function FeaturedPropertySection() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ApiCall = async () => {
      try {
        setLoading(true);
        const response = await FetchApi();
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log("API Error", error);
        setError(error);
        setLoading(false);
      }
    };

    ApiCall();
  }, []);

  if (loading) {
   return (
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 flex gap-6 overflow-x-auto no-scrollbar">
          {[...Array(2)].map((_, index) => (
            <CardLoading key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10">Error fetching data!</p>
    );
  }
  return (
    <section className="py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap  gap-4 items-center justify-between lg:mb-6 mb-4">
          <div>
            <h3 className="text-[#254D91] font-extrabold sm:text-2xl text-base md:text-3xl whitespace-nowrap mb-2 ">
            Featured Property
          </h3>
          </div>
          <button className="flex items-center  py-2 px-4  text-xs rounded-full text-white border-2 bg-[#1e3a8a] font-semibold  hover:text-white md:text-base sm:text-xs ">
            See 268 New Projects
          </button>
        </div>
        {/* Scrollable container */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {data.length > 0 ? (
            data.slice(0, 8).map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <PropertyCard details={item} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No properties available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPropertySection;
