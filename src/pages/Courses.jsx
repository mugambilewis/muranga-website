
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const categories = [
    {
      title: "Computer Science & IT",
      courses: [
        {
          name: "Diploma in Computer Science",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Comprehensive program covering programming, database management, and software development"
        },
        {
          name: "Certificate in Information Technology",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Foundation course in IT fundamentals, networking, and basic programming"
        },
        {
          name: "Advanced Diploma in Software Engineering",
          duration: "2 Years",
          intake: "Jan, Sep",
          description: "Advanced programming concepts, system design, and project management"
        }
      ]
    },
    {
      title: "Business & Management",
      courses: [
        {
          name: "Diploma in Business Management",
          duration: "3 Years",
          intake: "Jan, May, Sep",
          description: "Comprehensive business education covering management, marketing, and entrepreneurship"
        },
        {
          name: "Certificate in Project Management",
          duration: "6 Months",
          intake: "Monthly",
          description: "Professional project management skills and methodologies"
        },
        {
          name: "Advanced Diploma in Human Resource Management",
          duration: "2 Years",
          intake: "Jan, May, Sep",
          description: "Strategic HR management, organizational behavior, and labor relations"
        }
      ]
    },
    {
      title: "Applied Sciences",
      courses: [
        {
          name: "Diploma in Applied Sciences",
          duration: "3 Years",
          intake: "Jan, Sep",
          description: "Laboratory techniques, research methods, and scientific applications"
        },
        {
          name: "Certificate in Environmental Science",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Environmental conservation, sustainability, and resource management"
        }
      ]
    },
    {
      title: "Digital Marketing & Communication",
      courses: [
        {
          name: "Diploma in Digital Marketing",
          duration: "2 Years",
          intake: "Jan, May, Sep",
          description: "Social media marketing, SEO, content creation, and digital analytics"
        },
        {
          name: "Certificate in Communication & Media Studies",
          duration: "1 Year",
          intake: "Jan, May, Sep",
          description: "Journalism, public relations, and digital media production"
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
