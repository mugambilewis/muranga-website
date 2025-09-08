import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(120);

  const slides = [
    {
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1751626549/508794882_23898585109832476_3234301848404076441_n_mi4ds3.jpg',
      title: 'Empowering Excellence in Science & Management',
      subtitle: 'Join Kenya\'s premier institute for innovative education and career advancement',
      cta: 'Explore Our Programs'
    },
    {
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1751626463/506891793_10082797551837799_7857211448160052528_n_aprway.jpg',
      title: 'State-of-the-Art Facilities & Expert Faculty',
      subtitle: 'Modern laboratories, experienced educators, and industry-relevant curriculum',
      cta: 'Tour Our Campus'
    },
    {
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1751626549/474265139_9075760252541539_7027709492581273550_n_awxb0k.jpg',
      title: 'Your Future Starts Here',
      subtitle: 'Admissions now open - Apply online and secure your spot today',
      cta: 'Explore Our Programs'
    },
    {
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1751626463/509534709_23898296136528040_4155656818006462281_n_dj6jec.jpg',
      title: 'State-of-the-Art Facilities & Expert Faculty',
      subtitle: 'Modern laboratories, experienced educators, and industry-relevant curriculum',
      cta: 'Tour Our Campus'
    },
    {
      image: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1751626462/499214735_23904566219234365_7950305702550591906_n_z76asr.jpg',
      title: 'Your Future Starts Here',
      subtitle: 'Admissions now open - Apply online and secure your spot today',
      cta: 'Explore Our Programs'
    }
  ];

  // Dynamic header height calculation
  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector('header');
      const topBar = document.querySelector('header').previousElementSibling;
      
      if (header && topBar) {
        const headerRect = header.getBoundingClientRect();
        const topBarRect = topBar.getBoundingClientRect();
        setHeaderHeight(headerRect.height + topBarRect.height);
      }
    };

    // Calculate on mount
    calculateHeaderHeight();

    // Recalculate on resize
    const handleResize = () => {
      calculateHeaderHeight();
    };

    window.addEventListener('resize', handleResize);
    
    // Also recalculate after a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(calculateHeaderHeight, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Calculate dynamic height
  const heroHeight = `calc(100vh - ${headerHeight}px)`;

  return (
    <div 
      className="relative overflow-hidden"
      style={{ height: heroHeight, minHeight: '400px' }}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 z-10"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 z-10"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content - Responsive positioning */}
    <div className="relative z-10 h-full flex items-center pb-16 sm:pb-20 md:pb-24">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight">
        {slides[currentSlide].title}
      </h1>
      <p className="text-lg sm:text-xl md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200 animate-fade-in delay-200 max-w-2xl mx-auto leading-relaxed">
        {slides[currentSlide].subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center animate-fade-in delay-400">
        <Link
          to="/admissions"
          className="bg-accent hover:bg-accent/90 text-white px-8 md:px-8 py-4 md:py-4 rounded-lg font-semibold text-lg md:text-base lg:text-lg transition-all duration-200 transform hover:scale-105"
        >
          Apply Now
        </Link>
        <Link
          to="/courses"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 md:px-8 py-4 md:py-4 rounded-lg font-semibold text-lg md:text-base lg:text-lg transition-all duration-200 transform hover:scale-105"
        >
          {slides[currentSlide].cta}
        </Link>
      </div>
    </div>
  </div>
</div>

      {/* Slide Indicators - Dynamic positioning */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
        style={{ bottom: `${Math.max(headerHeight * 0.15, 64)}px` }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Stats Banner - Responsive sizing */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-2 sm:py-3 md:py-4 lg:py-5 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 lg:gap-6 text-center text-white max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mb-1 text-primary" />
              <div className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">2500+</div>
              <div className="text-xs md:text-sm text-gray-200 leading-tight">Graduates</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mb-1 text-primary" />
              <div className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">50+</div>
              <div className="text-xs md:text-sm text-gray-200 leading-tight">Expert Faculty</div>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mb-1 text-primary" />
              <div className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">15+</div>
              <div className="text-xs md:text-sm text-gray-200 leading-tight">Programs</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mb-1 text-primary" />
              <div className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">#1</div>
              <div className="text-xs md:text-sm text-gray-200 leading-tight">In Murang'a</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;