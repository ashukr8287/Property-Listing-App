import React from "react";
import HeroSection from '../Components/HomePageLayouts/HeroSection'
import FeaturedProperty from "../Components/HomePageLayouts/FeaturedProperty";
import Services from "../Components/HomePageLayouts/Services";
import SaleSection from "../Components/HomePageLayouts/SaleSection";
import RentalSection from "../Components/HomePageLayouts/RentalSection";
import JourneyForm from "../Components/HomePageLayouts/JourneyForm";
import PropertiesSection from "../Components/HomePageLayouts/PropertiesSection";


function HomePage() {
  return (
     <>
     <HeroSection/>
     <Services/>
     <FeaturedProperty/>
     <SaleSection/>
     <RentalSection/>
     <JourneyForm/>
     <PropertiesSection/>
  </>
  )
}

export default HomePage;
