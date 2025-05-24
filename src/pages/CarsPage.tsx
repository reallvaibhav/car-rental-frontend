import React from 'react';
import CarList from '../components/cars/CarList';

const CarsPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 animate-fadeIn">
      <CarList />
    </div>
  );
};

export default CarsPage;