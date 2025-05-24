import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { FilterState } from '../../types';

interface CarFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  showMobileFilters: boolean;
  setShowMobileFilters: (show: boolean) => void;
}

const CarFilters: React.FC<CarFiltersProps> = ({ 
  onFilterChange, 
  showMobileFilters,
  setShowMobileFilters
}) => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: [0, 500],
    seats: null,
    transmission: '',
    sortBy: '',
  });
  
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const resetFilters = () => {
    const defaultFilters: FilterState = {
      category: '',
      priceRange: [0, 500],
      seats: null,
      transmission: '',
      sortBy: '',
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };
  
  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'Economy', label: 'Economy' },
    { value: 'Compact', label: 'Compact' },
    { value: 'SUV', label: 'SUV' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Sports', label: 'Sports' },
  ];
  
  const transmissionOptions = [
    { value: '', label: 'All Transmissions' },
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },
  ];
  
  const seatsOptions = [
    { value: '', label: 'Any Seats' },
    { value: '2', label: '2+ Seats' },
    { value: '4', label: '4+ Seats' },
    { value: '5', label: '5+ Seats' },
    { value: '7', label: '7+ Seats' },
  ];
  
  const sortOptions = [
    { value: '', label: 'Recommended' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];
  
  const mobileFiltersClass = showMobileFilters 
    ? 'translate-x-0 opacity-100' 
    : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100';
  
  return (
    <div className="relative">
      <div className="lg:hidden flex justify-between items-center mb-4">
        <button
          type="button"
          onClick={() => setShowMobileFilters(true)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </button>
        
        <Select
          options={sortOptions}
          value={filters.sortBy}
          onChange={(value) => handleFilterChange('sortBy', value)}
          className="w-40"
        />
      </div>
      
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-full max-w-xs bg-white shadow-xl lg:shadow-none p-6 lg:p-0 transform transition-all duration-300 ease-in-out lg:relative lg:inset-auto lg:max-w-full lg:translate-x-0 lg:opacity-100 ${mobileFiltersClass}`}
      >
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          <button
            type="button"
            onClick={() => setShowMobileFilters(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
            <Select
              options={categoryOptions}
              value={filters.category}
              onChange={(value) => handleFilterChange('category', value)}
              fullWidth
            />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Price Range</h4>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                max={filters.priceRange[1]}
                value={filters.priceRange[0]}
                onChange={(e) => handleFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min={filters.priceRange[0]}
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Minimum Seats</h4>
            <Select
              options={seatsOptions}
              value={filters.seats ? filters.seats.toString() : ''}
              onChange={(value) => handleFilterChange('seats', value ? parseInt(value) : null)}
              fullWidth
            />
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Transmission</h4>
            <Select
              options={transmissionOptions}
              value={filters.transmission}
              onChange={(value) => handleFilterChange('transmission', value)}
              fullWidth
            />
          </div>
          
          <div className="hidden lg:block">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Sort By</h4>
            <Select
              options={sortOptions}
              value={filters.sortBy}
              onChange={(value) => handleFilterChange('sortBy', value)}
              fullWidth
            />
          </div>
          
          <Button
            variant="outline"
            onClick={resetFilters}
            fullWidth
          >
            Reset Filters
          </Button>
          
          <div className="lg:hidden pt-4 border-t border-gray-200">
            <Button
              variant="primary"
              onClick={() => setShowMobileFilters(false)}
              fullWidth
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;