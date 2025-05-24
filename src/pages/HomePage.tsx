import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCars from '../components/home/FeaturedCars';
import CarCategories from '../components/home/CarCategories';
import Testimonials from '../components/home/Testimonials';
import Locations from '../components/home/Locations';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <CarCategories />
      <FeaturedCars />
      <Locations />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;