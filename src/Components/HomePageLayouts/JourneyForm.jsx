import { ChevronDown } from "lucide-react";

export default function JourneyForm() {
  return (
    <section className=" py-6 md:py-10 bg-gray-50">
      <div className="container mx-auto  px-4 lg:px-8">
        {/* Text Section */}
        <div >
          <h3 className="text-[#254D91] font-extrabold text-2xl md:text-3xl whitespace-nowrap mb-1">
            Start Your Journey Today!
          </h3>
          <p className="text-gray-600 text-base mb-4">
            Create a profile in seconds and find your ideal home.
          </p>
        </div>

        {/* Form Section */}
        <form className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4  lg:gap-8">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="flex-grow  md:flex-grow-0 h-12 px-4 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:border-[#1e3a8a] focus:outline-none"
          />
          <div className="relative w-full ">
            <select
              className="appearance-none w-full h-12 px-4 rounded-md border border-gray-300 shadow-sm text-gray-700 focus:border-[#1e3a8a] focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select User Type
              </option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Agent</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
              size={20}
            />
          </div>
          <input
            type="text"
            placeholder="Enter Your Location"
            className="h-12 px-4 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:border-[#1e3a8a] focus:outline-none"
          />
          <button disabled
            className="h-12 px-8 rounded-full bg-[#254D91] text-white font-semibold shadow-lg hover:bg-[#1e3a8a]"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
