import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  const benefits = [
    'Free cancellation up to 24 hours before pickup',
    'No hidden fees or charges',
    '24/7 customer support',
    'Clean and well-maintained vehicles',
  ];
  
  return (
    <section className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Premium Car Rental?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Book your ideal vehicle today and enjoy a seamless rental experience with DriveLuxe.
            We're committed to making your journey comfortable and enjoyable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center bg-white/10 rounded-lg p-4"
              >
                <Check className="h-5 w-5 text-emerald-300 mr-2 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="sm:min-w-[180px]"
            >
              Browse Cars
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-600 sm:min-w-[180px]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;