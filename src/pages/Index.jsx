import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { BookOpen, Users, Award, Building, ArrowRight, CheckCircle, Star } from 'lucide-react';
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

  const courses = [
    {
      title: "School of Health Sciences",
      description: "Comprehensive healthcare programs to prepare you for a rewarding career in health services",
      duration: "3-4 Years",
      category: "Health"
    },
    {
      title: "Business Management",
      description: "Develop leadership skills and business acumen for the corporate world",
      duration: "2-3 Years",
      category: "Management"
    },
    {
      title: "Applied Sciences",
      description: "Explore scientific principles with practical applications",
      duration: "3-4 Years",
      category: "Science"
    },
    {
      title: "Information Technology",
      description: "Cutting-edge IT programs to equip you with the latest tech skills",
      duration: "1-2 Years",
      category: "Technology"
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
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

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

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Popular Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of programs designed to meet industry demands and career aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {course.category}
                    </span>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <p className="text-sm text-gray-500">Duration: {course.duration}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Programs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Excellence in Education Since Our Founding
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                At Murang'a Institute of Science and Management Studies, we're dedicated to shaping the future through innovative education and practical skills development.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Accredited programs with industry recognition",
                  "Modern facilities and learning resources",
                  "Strong industry partnerships and job placement",
                  "Supportive learning environment"
                ].map((item, i) => (
                  <div className="flex items-center space-x-3" key={i}>
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern campus building"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have gone on to achieve remarkable success in their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
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
                    className="w-12 h-12 rounded-full mr-4"
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
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
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
