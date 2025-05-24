import React, { useState, useEffect } from 'react';
import { Search, Car as CarIcon } from 'lucide-react';
import CarCard from './CarCard';
import CarFilters from './CarFilters';
import Input from '../ui/Input';
import { Car, FilterState } from '../../types';
import { filterCars } from '../../services/carData';

const CarList: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filterState, setFilterState] = useState<FilterState>({
    category: '',
    priceRange: [0, 500],
    seats: null,
    transmission: '',
    sortBy: '',
  });
  
  useEffect(() => {
    // Apply both filters and search
    let result = filterCars(
      filterState.category,
      filterState.priceRange,
      filterState.seats,
      filterState.transmission,
      filterState.sortBy
    );
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(car => 
        car.make.toLowerCase().includes(term) || 
        car.model.toLowerCase().includes(term) ||
        car.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredCars(result);
  }, [filterState, searchTerm]);
  
  const handleFilterChange = (newFilters: FilterState) => {
    setFilterState(newFilters);
  };
  
  // Apply backdrop overlay when mobile filters are shown
  useEffect(() => {
    document.body.style.overflow = showMobileFilters ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileFilters]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Available Cars</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search for make, model, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            fullWidth
          />
        </div>
      </div>
      
      {/* Backdrop for mobile filters */}
      {showMobileFilters && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setShowMobileFilters(false)}
        ></div>
      )}
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <CarFilters 
            onFilterChange={handleFilterChange}
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
          />
        </div>
        
        <div className="lg:w-3/4">
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <CarIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No cars found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria to find available vehicles.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarList;