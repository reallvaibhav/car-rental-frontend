import React, { useState, useEffect } from 'react';
import { Menu, X, User, Car, MapPin, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname !== '/') {
      setIsScrolled(true);
    } else {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'Locations', href: '/#locations' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      } py-4`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className={`p-2 rounded-lg ${isScrolled ? 'gradient-primary' : 'bg-white/20'}`}>
                <Car 
                  className="h-6 w-6 text-white" 
                  strokeWidth={2} 
                />
              </div>
              <span 
                className={`ml-2 text-xl font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                GoCar
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={isScrolled ? 'outline' : 'ghost'}
              size="sm"
              className={isScrolled ? 'text-gray-700' : 'text-white border-white'}
            >
              <User className="h-4 w-4 mr-1" />
              Sign In
            </Button>
            <Link to="/cars">
              <Button 
                variant={isScrolled ? 'primary' : 'outline'} 
                size="sm"
                className={!isScrolled ? 'border-white text-white hover:bg-white hover:text-emerald-600' : ''}
              >
                Book Now
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Button variant="outline" fullWidth>
                <User className="h-4 w-4 mr-1" />
                Sign In
              </Button>
              <Link to="/cars" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" fullWidth>
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;