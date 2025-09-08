import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Management', href: '/management' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Top Bar - Responsive Design */}
      <div className="bg-primary text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4">
          {/* Mobile Layout - Single line with phone only, or alternating display */}
          <div className="md:hidden flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <a href="tel:+254722374451" className="hover:underline">+254 722 374 451</a>
            </div>
          </div>
          
          {/* Desktop Layout - Full contact info */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+254722374451" className="hover:underline">+254 722 374 451</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:murangainstitute@gmail.com" className="hover:underline">murangainstitute@gmail.com</a>
              </div>
            </div>
            <div>
              <span>Kabuta Main Campus, Murang'a, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <img src="/logo.jpeg" alt="M.I.S.M.S Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg md:text-xl text-primary">M.I.S.M.S</span>
                <span className="text-xs md:text-sm text-gray-600">Murang'a Institute</span>
              </div>
            </Link>

            {/* Mobile Contact Icons - Alternative approach */}
            <div className="flex items-center space-x-3 lg:hidden">
              <a 
                href="tel:+254722374451"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="mailto:murangainstitute@gmail.com"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 hover:text-primary ${
                    location.pathname === item.href ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/admissions"
                className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 animate-glow"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 ml-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              {/* Contact Info in Mobile Menu */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex flex-col space-y-3">
                  <a 
                    href="tel:+254722374451"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+254 722 374 451</span>
                  </a>
                  <a 
                    href="mailto:murangainstitute@gmail.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">murangainstitute@gmail.com</span>
                  </a>
                </div>
              </div>

              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-colors duration-200 hover:text-primary ${
                      location.pathname === item.href ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 text-center"
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;