import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { BookOpen, Users, Award, Building, TrendingUp, GraduationCap, ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight, Download, FileText, AlertCircle } from 'lucide-react';

import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Industry-relevant curriculum designed by experts to meet modern market demands"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced educators and industry professionals dedicated to student success"
    },
    {
      icon: Award,
      title: "Accredited Programs",
      description: "Recognized certifications that enhance your career prospects and opportunities"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art laboratories, libraries, and learning environments"
    }
  ];

  const programs = [
  {
    id: 1,
    title: "School of Education",
    description: "Empowering future educators with innovative teaching methodologies and educational leadership skills.",
     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: BookOpen,
    students: "2,500+",
    programs: 8,
    category: "Education",
    color: "black/10"
    
  },
  {
    id: 2,
    title: "School of Business & Economics", 
    description: "Developing business leaders with strategic thinking and economic analysis capabilities.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: TrendingUp,
    students: "3,200+", 
    programs: 12,
    category: "Business",
    color: "black/30"
  },
  {
    id: 3,
    title: "School of Engineering Technology",
    description: "Advanced engineering solutions for modern technological challenges and innovation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
    icon: Award,
    students: "4,100+",
    programs: 15,
    category: "Engineering",
    
  },
  {
    id: 4,
    title: "School of Humanities And Social Sciences",
    description: "Exploring human culture, society, and critical thinking through interdisciplinary approaches.", 
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Users,
    students: "1,800+",
    programs: 10,
    category: "Humanities",
   
  },
  {
    id: 5,
    title: "School of Pure, Applied And Health Sciences",
    description: "Advancing scientific knowledge and healthcare innovation through research and practice.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Award,
    students: "2,900+",
    programs: 18,
    category: "Sciences",
    
  },
  {
    id: 6,
    title: "School of Agriculture And Environmental Sciences", 
    description: "Sustainable agriculture and environmental conservation for a better tomorrow.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: TrendingUp,
    students: "1,600+",
    programs: 9,
    category: "Agriculture",
    
  },
  {
    id: 7,
    title: "School of Hospitality And Tourism Management",
    description: "Excellence in hospitality services and sustainable tourism development.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Users, 
    students: "1,200+",
    programs: 6,
    category: "Hospitality",
   
  },
  {
    id: 8,
    title: "School of Computing And Information Technology",
    description: "Cutting-edge technology solutions and digital innovation for the future.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    icon: BookOpen,
    students: "3,500+",
    programs: 14,
    category: "Technology",
    
  }
];

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      program: "Pharmacy Graduate",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      quote: "The hands-on experience and knowledgeable faculty at M.I.S.M.S gave me the confidence to excel in my pharmacy career."
    },
    {
      name: "David Kimani",
      program: "Business Management Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      quote: "The business program opened doors I never thought possible. I now run my own successful company thanks to the knowledge gained here."
    },
    {
      name: "Grace Njeri",
      program: "Applied Sciences Graduate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      quote: "The laboratory facilities and expert guidance helped me develop practical skills that employers highly value."
    },
    {
      name: "John Mwangi",
      program: "Information Technology Graduate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      quote: "The IT program at M.I.S.M.S equipped me with cutting-edge skills that landed me a job at a leading tech company."
    },
    {
      name: "Mary Wangari",
      program: "Health Sciences Graduate",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      quote: "The practical training in health sciences prepared me well for real-world healthcare challenges. I'm now helping my community."
    },
    {
      name: "Peter Karanja",
      program: "Business Management Graduate",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
      quote: "M.I.S.M.S gave me the leadership skills and business knowledge to successfully manage my own enterprise."
    }
  ];

  // Testimonials carousel state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonialsPerSlide = 3;
  const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  // Auto-slide functionality for testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === totalTestimonialSlides - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalTestimonialSlides, isAutoPlaying]);

  const goToTestimonialSlide = (slideIndex) => {
    setCurrentTestimonialIndex(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevTestimonial = () => {
    setCurrentTestimonialIndex(currentTestimonialIndex === 0 ? totalTestimonialSlides - 1 : currentTestimonialIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex(currentTestimonialIndex === totalTestimonialSlides - 1 ? 0 : currentTestimonialIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Download Admission Letter Section - Highly Visible */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Attention-grabbing badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <AlertCircle className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">NEW STUDENTS</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Download Your Admission Letter
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Congratulations! Get your official admission letter and start your academic journey with us.
            </p>
            
            {/* Download cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Main Download Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
  <div className="flex items-center justify-center mb-4">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
      <Download className="h-8 w-8 text-white" />
    </div>
  </div>
  <h3 className="text-xl font-semibold mb-2">Official Admission Letter</h3>
  <p className="text-blue-100 mb-4">
    Download your personalized admission letter with all program details
  </p>

  <a
    href="/pdfs/MISMS SEPT INTAKE 2025.pdf" // 👈 
    download
    className="block w-full text-center bg-white text-blue-700 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 transform hover:scale-105"
  >
    Download Now
  </a>
</div>

              
              {/* Info Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Handbook</h3>
                <p className="text-blue-100 mb-4">Complete guide with rules, policies, and important information</p>
                <button className="w-full bg-white/20 text-white border border-white/30 py-3 px-6 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 transform hover:scale-105">
                  Download Guide
                </button>
              </div>
            </div>
            
            {/* Quick actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Instant Download</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">PDF Format</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Mobile Friendly</span>
              </div>
            </div>
            
            {/* Additional help link */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100 text-sm mb-2">Need help downloading or have questions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-200 underline"
              >
                <span>Contact our admissions team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Why Choose M.I.S.M.S?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing world-class education that prepares you for success in today's competitive landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
         
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Our Schools & Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to meet industry demands and career aspirations across diverse fields of study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    {/* Top Section */}
                    <div className="flex items-start justify-between">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-90">{program.students}</div>
                        <div className="text-xs opacity-75">Students</div>
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="space-y-3">
                      <div>
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {program.category}
                        </span>
                        <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-gray-100 transition-colors duration-300">
                          {program.title}
                        </h3>
                      </div>
                      
                      {/* Expandable Description */}
                      <div className={`transition-all duration-500 ${hoveredCard === program.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <p className="text-sm text-gray-100 leading-relaxed mb-3">
                          {program.description}
                        </p>
                      </div>
                      
                      {/* Stats and Action */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-semibold">{program.programs}</span>
                          <span className="opacity-75 ml-1">Programs</span>
                        </div>
                        <div className={`flex items-center space-x-1 transition-all duration-300 ${hoveredCard === program.id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}>
                          <span className="text-sm font-medium">Explore</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-white/5 transition-opacity duration-300 ${hoveredCard === program.id ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3">
            <span>Explore All Schools</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>

      
       {/* About Section */}
      <section className="py-12 bg-primary text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="font-serif text-4xl font-bold mb-6">
          Excellence in Education Since Our Founding
        </h2>
        <p className="text-xl mb-6 text-blue-100">
          At Murang'a Institute of Science and Management Studies, we're dedicated to shaping the future through innovative education and practical skills development.
        </p>
        <div className="space-y-3 mb-6">
          {[
            "Accredited programs with industry recognition",
            "Modern facilities and learning resources",
            "Strong industry partnerships and job placement",
            "Supportive learning environment",
          ].map((item, i) => (
            <div className="flex items-center space-x-2" key={i}>
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Link
          to="/about"
          className="bg-white text-blue-500 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
        >
          <span>Learn More About Us</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
      <div className="relative flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Modern campus building"
          className="rounded-xl shadow-2xl max-w-lg w-full h-auto"
        />
        <div className="absolute -bottom-4 -right-4 bg-accent text-white p-5 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm">Success Stories</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Enhanced Testimonials Section with Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Hear from our graduates who have gone on to achieve remarkable success in their careers.
            </p>
            <p className="text-sm text-gray-500">
              {testimonials.length} success stories and counting
            </p>
          </div>
          
          <div className="relative">
            {/* Main carousel container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {Array.from({ length: totalTestimonialSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {testimonials
                        .slice(slideIndex * testimonialsPerSlide, (slideIndex + 1) * testimonialsPerSlide)
                        .map((testimonial, index) => (
                          <div
                            key={`${slideIndex}-${index}`}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                          >
                            <div className="flex items-center mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.program}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={goToNextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalTestimonialSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonialSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  index === currentTestimonialIndex
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of successful graduates who started their careers at M.I.S.M.S. 
            Take the first step towards your bright future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Information
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;