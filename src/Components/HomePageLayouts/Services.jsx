import React from "react";
import { Home, Building2, Search, Lock } from "lucide-react"; // icons

function Services() {
  const services = [
    {
      icon: <Building2 size={36} className="text-blue-700" />,
      title: "Buy & Sell Properties",
      desc: "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: <Home size={36} className="text-blue-700" />,
      title: "Find Rental Homes",
      desc: "Browse through thousands of rental options suited to your needs.",
    },
    {
      icon: <Search size={36} className="text-blue-700" />,
      title: "Smart AI Property Search",
      desc: "Get instant recommendations based on your budget & location.",
    },
    {
      icon: <Lock size={36} className="text-blue-700" />,
      title: "Safe & Secure Transactions",
      desc: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];

  return (
    <section className=" py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto text-center px-4 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
          What We Do?
        </h2>
        <p className="text-gray-600 mb-10">
          Helping you find, buy, and rent the perfect property with ease.
        </p>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
