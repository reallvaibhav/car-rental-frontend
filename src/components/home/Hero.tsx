import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { locations } from '../../services/carData';

const Hero: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  
  const locationOptions = [
    { value: '', label: 'Select location' },
    ...locations.map(loc => ({ value: loc.id, label: loc.name }))
  ];
  
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeIn">
            Drive Your <span className="text-emerald-500">Dream Car</span> Today
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-200">
            Discover our premium selection of vehicles for any occasion.
            From economy to luxury, we have the perfect car for your journey.
          </p>
          
          {/* Booking form */}
          <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn animation-delay-400">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-1">
                <Select
                  label="Pickup Location"
                  options={locationOptions}
                  value={pickupLocation}
                  onChange={setPickupLocation}
                  fullWidth
                />
              </div>
              <div className="lg:col-span-1">
                <Select
                  label="Drop-off Location"
                  options={locationOptions}
                  value={dropoffLocation}
                  onChange={setDropoffLocation}
                  fullWidth
                />
              </div>
              <div className="lg:col-span-1">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Drop-off Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="primary" size="lg" fullWidth>
                <span>Find Available Cars</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-6 justify-center sm:justify-start animate-fadeIn animation-delay-600">
            <div className="flex items-center">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="ml-2 text-white">Multiple Locations</span>
            </div>
            <div className="flex items-center">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="ml-2 text-white">Flexible Booking</span>
            </div>
            <div className="flex items-center">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-2 text-white">Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;