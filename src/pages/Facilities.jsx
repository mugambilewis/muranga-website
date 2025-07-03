
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Monitor, BookOpen, Users, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';

const Facilities = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const facilities = [
    {
      icon: Monitor,
      title: "Computer Laboratories",
      description: "State-of-the-art computer labs with latest software and hardware for practical IT training",
      features: ["50 high-performance computers", "Latest software suites", "High-speed internet", "24/7 accessibility"]
    },
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "Extensive collection of books, journals, and digital resources for research and study",
      features: ["10,000+ books", "Digital library access", "Study spaces", "Research assistance"]
    },
    {
      icon: Users,
      title: "Lecture Halls",
      description: "Spacious, well-equipped lecture halls with modern audio-visual systems",
      features: ["Air-conditioned rooms", "Projector systems", "100+ seating capacity", "Acoustic design"]
    },
    {
      icon: Wifi,
      title: "WiFi Campus",
      description: "High-speed wireless internet coverage throughout the entire campus",
      features: ["Campus-wide coverage", "High-speed connectivity", "24/7 availability", "Student portal access"]
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&w=800&q=80",
      title: "Main Campus Building",
      description: "Our modern main building housing administrative offices and lecture halls"
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&w=800&q=80",
      title: "Computer Laboratory",
      description: "State-of-the-art computer lab with latest technology and software"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=800&q=80",
      title: "Students in Action",
      description: "Students engaging in practical learning sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&w=800&q=80",
      title: "Study Environment",
      description: "Conducive learning environment for focused study"
    },
    {
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&w=800&q=80",
      title: "Modern Architecture",
      description: "Contemporary building design that inspires learning"
    },
    {
      url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&w=800&q=80",
      title: "Innovation Center",
      description: "Dedicated space for research and innovation projects"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const services = [
    "Student Counseling Services",
    "Career Guidance Center",
    "Health & Wellness Center",
    "Student Accommodation (nearby)",
    "Sports & Recreation Facilities",
    "Cafeteria & Dining Services",
    "Banking & ATM Services",
    "Student Parking",
    "Security Services 24/7",
    "Bookstore & Stationery"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 animate-fade-in">
              World-Class Facilities
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              Experience learning in our modern, well-equipped campus designed to foster 
              academic excellence and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Our Learning Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every facility at M.I.S.M.S is designed with our students' success in mind, 
              providing the tools and environment needed for effective learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <facility.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl mb-3 text-gray-900">{facility.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Virtual Campus Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through our campus and see our facilities firsthand.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Image Display */}
            <div className="relative mb-8 animate-fade-in">
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={galleryImages[currentImageIndex].url}
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-semibold text-2xl mb-2">{galleryImages[currentImageIndex].title}</h3>
                  <p className="text-gray-200">{galleryImages[currentImageIndex].description}</p>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-primary shadow-lg' 
                      : 'hover:ring-2 hover:ring-primary/50'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                Student Support Services
              </h2>
              <p className="text-xl text-gray-600">
                Beyond academics, we provide comprehensive support services to ensure 
                your overall well-being and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-gray-800 font-medium">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Visit Our Campus
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience our facilities firsthand by visiting our Kabuta Main Campus. 
              We welcome prospective students and their families for campus tours.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="font-semibold text-xl mb-4">Campus Address</h3>
              <p className="text-blue-100 mb-2">Kabuta Main Campus</p>
              <p className="text-blue-100 mb-2">P.O. Box 1088-10200</p>
              <p className="text-blue-100 mb-4">Murang'a, Kenya</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254722374451"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Call: +254 722 374 451
                </a>
                <a
                  href="mailto:murangainstitute@gmail.com"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Campus tours available Monday - Friday, 9:00 AM - 4:00 PM. 
              Please call ahead to schedule your visit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Facilities;
