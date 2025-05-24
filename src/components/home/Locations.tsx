import React from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '../../services/carData';
import Button from '../ui/Button';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us in convenient locations around the city.
            Pick up and drop off your rental vehicle at any of our service centers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden h-full">
            <div 
              className="w-full h-full min-h-[400px] bg-cover bg-center relative"
              style={{ 
                backgroundImage: 'url(https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Multiple Pickup Locations</h3>
                <p className="mb-4">
                  Choose from our conveniently located service centers for seamless pickup and drop-off.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                >
                  View All Locations
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us Here</h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div 
                    key={location.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          {location.name}
                        </h4>
                        <p className="text-gray-600">
                          {location.address}, {location.city}
                        </p>
                        <div className="mt-2 flex items-center">
                          <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                            Open Now
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            8:00 AM - 8:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;