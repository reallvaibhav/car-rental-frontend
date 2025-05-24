import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Business Traveler',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'DriveLuxe made my business trip so much easier. The car was spotless, pickup was quick, and the customer service was excellent. Highly recommend!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Family Vacation',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'We rented an SUV for our family vacation and it was perfect. The process was seamless from start to finish, and the vehicle was exactly what we needed.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Weekend Getaway',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'I wanted something special for a weekend trip and DriveLuxe delivered! The sports car was amazing and the price was actually reasonable. Will use again!',
      rating: 4,
    },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our satisfied customers have to say about their experience with DriveLuxe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <Quote className="h-8 w-8 text-emerald-200" />
              </div>
              
              <p className="text-gray-700 mb-4 flex-grow">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating 
                        ? 'text-amber-400 fill-amber-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;