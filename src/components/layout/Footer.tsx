import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="gradient-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg gradient-primary">
                <Car className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <span className="ml-2 text-xl font-bold">GoCar</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium car rental service with a wide range of vehicles to meet your needs.
              Experience luxury driving at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#cars" className="text-gray-400 hover:text-emerald-500 transition-colors">Our Fleet</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-400 hover:text-emerald-500 transition-colors">Locations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Car Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Economy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Compact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">SUV</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Luxury</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Sports</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 mr-2" />
                <span className="text-gray-400">
                  123 Rental Street, San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-gray-400">info@gocar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} GoCar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;