
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const categories = [
    {
      title: "SCHOOL OF HEALTH SCIENCES",
      courses: [
        
        {
          name: "Certificate in Pharmacy",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Basic pharmaceutical knowledge, drug dispensing, and healthcare practices"
        },
        
      ]
    },
    {
      title: "SCHOOL OF BUSINESS",
      courses: [
        {
          name: "Diploma in Business Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Comprehensive business education covering management, marketing, and entrepreneurship"
        },
        {
          name: "Diploma in Purchasing  and Supply Chain Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Comprehensive business education covering management, marketing, and entrepreneurship"
        },
        {
          name: "Diploma in Sales Management",
          duration: "3 Years",
          intake: "Jan, Sep",
          description: "Sales strategies, customer relationship management, and market analysis"
        },
        {
          name: "Diploma in Human Resource Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Employee relations, recruitment, and organizational development"
        },
        {
          name: "Diploma in Project Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Project planning, execution, and risk management"
        },
        {
          name: "Certificate in Business Management",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Fundamental business principles, management practices, and entrepreneurship"
        },
        {
          name: "Certificate in Supply Chain Management",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Logistics, procurement, and supply chain strategies"
        }
      ]
    },
    {
      title: "SCHOOL OF HOSPITALITY & TOURISM",
      courses: [
        {
          name: "Diploma in Catering and Hospitality Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Hospitality operations, food service management, and event planning"
        },
        {
          name: "Diploma in Tourism and Travel Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Tourism principles, travel operations, and destination management"
        },
        {
          name: "Certificate in Catering and Hospitality Management",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Hospitality operations, food service management, and event planning"
        },
        {
          name: "Certificate in Tourism and Travel Management",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Tourism principles, travel operations, and destination management"
        }
      ]
    },
    {
      title: "SCHOOOL OF FASHION AND INTERIOR DECORATION",
      courses: [
        {
          name: "Diploma in Fashion and Interior Design",
          duration: "3 Years",
          intake: "Jan,May, Sep",
          description: "Fashion design, interior decoration, and textile technology"
        }
      ]
    },
    {
      title: "SCHOOL OF COSMETOLOGY",
      courses: [
        {
          name: "Certificate in Hair and Beauty Therapy",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Hair styling, skincare, and beauty treatments"
        }
      ]
    },
    {
      title: "SCHOOL OF ENGINEERING",
      courses: [
        {
          name: "Artisan Certificate in Welding and Fabrication - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Welding techniques, metal fabrication, and safety practices"
        },
        {
          name: "Artisan Certificate in Electrical Installation - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Electrical systems, wiring, and installation practices"
        },
        {
          name: "Artisan Certificate in Electronics Mechanics - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Electronic circuits, device repair, and maintenance"
        },
        {
          name: "Craft Certificate in Motor Vehicle Mechanics - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Vehicle maintenance, engine repair, and diagnostics"
        },
        {
          name: "Craft Certificate in Motor Vehicle Electricians  - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Vehicle electrical systems, wiring, and diagnostics"
        },
        {
          name: "Craft Certificate in Electrical Installation - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Electrical systems, wiring, and installation practices"
        },
        {
          name: "Craft Certificate in Automotive Engineering - Grade I, II & III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Automotive systems, engine repair, and vehicle diagnostics"
        },
        {
          name: "Craft Certificate in Electrical and Electronics Engineering -Grade I, II &III",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Electrical circuits, electronic devices, and maintenance"
        },
        {
          name: "Diploma in Electricals and Electronics Engineering",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Electrical circuits, electronic devices, and maintenance"
        },
        {
          name: "Diploma in Automotive Engineering",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Automotive systems, engine repair, and vehicle diagnostics"
        }

      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 animate-fade-in">
              Our Programs
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              Discover our comprehensive range of courses designed to meet industry demands 
              and prepare you for a successful career.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are carefully designed to provide both theoretical knowledge and 
              practical skills that employers value.
            </p>
          </div>

          {/* Course Categories */}
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors">
                          {course.name}
                        </h4>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Duration: {course.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Intake: {course.intake}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Award className="h-4 w-4 mr-2" />
                          <span>Accredited Program</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link
                          to="/admissions"
                          className="text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                        >
                          Apply for this program →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8 text-center">
              What Makes Our Programs Special?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our courses are designed in consultation with industry experts to ensure graduates 
                  have the skills employers need in today's competitive job market.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Practical Learning Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hands-on training, laboratory work, and real-world projects ensure students 
                  gain practical experience alongside theoretical knowledge.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Flexible Learning Options</h3>
                <p className="text-gray-600 leading-relaxed">
                  Multiple intake periods throughout the year and various program durations 
                  to accommodate different schedules and career goals.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Career Support Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive career guidance, job placement assistance, and alumni network 
                  to help you succeed after graduation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose from our comprehensive range of programs and take the first step 
            towards a successful career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Courses;
