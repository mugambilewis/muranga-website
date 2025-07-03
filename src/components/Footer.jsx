import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">M.I.S.M.S</h3>
                <p className="text-sm text-gray-400">Murang'a Institute</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering excellence in Science and Management education. 
              Building tomorrow's leaders through quality education and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <LinkedinIcon className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses Offered</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/management" className="text-gray-300 hover:text-white transition-colors">Our Management</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Programs</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Computer Science</span></li>
              <li><span className="text-gray-300">Business Management</span></li>
              <li><span className="text-gray-300">Information Technology</span></li>
              <li><span className="text-gray-300">Applied Sciences</span></li>
              <li><span className="text-gray-300">Project Management</span></li>
              <li><span className="text-gray-300">Digital Marketing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Kabuta Main Campus</p>
                  <p className="text-gray-300 text-sm">P.O. Box 1088-10200</p>
                  <p className="text-gray-300 text-sm">Murang'a, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">+254 722 374 451</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">murangainstitute@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Murang'a Institute of Science and Management Studies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
