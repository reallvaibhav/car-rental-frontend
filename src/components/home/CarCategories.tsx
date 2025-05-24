import React from 'react';
import { Car, Truck, Zap, Trophy } from 'lucide-react';

const CarCategories: React.FC = () => {
  const categories = [
    {
      name: 'Economy',
      description: 'Fuel-efficient cars perfect for city driving and daily commutes.',
      icon: <Car className="h-8 w-8 text-emerald-500" />,
      bgColor: 'bg-emerald-50',
    },
    {
      name: 'SUV',
      description: 'Spacious vehicles with ample room for passengers and luggage.',
      icon: <Truck className="h-8 w-8 text-amber-500" />,
      bgColor: 'bg-amber-50',
    },
    {
      name: 'Electric',
      description: 'Eco-friendly electric vehicles for sustainable driving.',
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Luxury',
      description: 'Premium vehicles with advanced features and elegant design.',
      icon: <Trophy className="h-8 w-8 text-purple-500" />,
      bgColor: 'bg-purple-50',
    },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide selection of vehicles to match your driving needs.
            From fuel-efficient economy cars to spacious SUVs and luxury models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="group rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
            >
              <div className={`p-6 ${category.bgColor}`}>
                <div className="flex items-center justify-between mb-4">
                  {category.icon}
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Category
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <a 
                  href="#" 
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center"
                >
                  Explore Cars
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;