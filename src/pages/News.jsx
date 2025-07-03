
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const news = [
    {
      id: 1,
      title: "New Computer Science Laboratory Opens at M.I.S.M.S",
      excerpt: "State-of-the-art computer laboratory with 50 modern workstations now available to enhance practical learning experience for our IT students.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&w=600&q=80",
      date: "December 15, 2023",
      author: "M.I.S.M.S Admin",
      category: "Facilities",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "January 2024 Intake Applications Now Open",
      excerpt: "We are now accepting applications for the January 2024 intake across all our programs. Early application is encouraged to secure your spot.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&w=600&q=80",
      date: "December 10, 2023",
      author: "Admissions Office",
      category: "Admissions",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "M.I.S.M.S Graduates Excel in National Examinations",
      excerpt: "Our students have achieved outstanding results in recent national examinations, with 95% pass rate across all programs offered at the institute.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=600&q=80",
      date: "December 5, 2023",
      author: "Academic Office",
      category: "Academic Achievement",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Partnership with Local Tech Companies Announced",
      excerpt: "M.I.S.M.S has formed strategic partnerships with leading technology companies to provide internship and job opportunities for our graduates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&w=600&q=80",
      date: "November 28, 2023",
      author: "Career Services",
      category: "Partnerships",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Annual Science & Technology Fair 2024",
      excerpt: "Join us for our annual Science & Technology Fair featuring student innovations, research presentations, and industry exhibitions.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&w=600&q=80",
      date: "November 20, 2023",
      author: "Events Team",
      category: "Events",
      readTime: "2 min read"
    },
    {
      id: 6,
      title: "New Digital Marketing Program Launched",
      excerpt: "We are excited to announce the launch of our new Digital Marketing diploma program, designed to meet the growing demand for digital marketing professionals.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&w=600&q=80",
      date: "November 15, 2023",
      author: "Academic Board",
      category: "New Programs",
      readTime: "3 min read"
    }
  ];

  const events = [
    {
      date: "Jan 15, 2024",
      title: "Spring Semester Orientation",
      time: "9:00 AM - 12:00 PM",
      location: "Main Auditorium"
    },
    {
      date: "Jan 20, 2024",
      title: "Career Fair 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Campus Grounds"
    },
    {
      date: "Feb 5, 2024",
      title: "Science & Technology Symposium",
      time: "8:00 AM - 6:00 PM",
      location: "Conference Hall"
    },
    {
      date: "Feb 14, 2024",
      title: "Student Leadership Workshop",
      time: "2:00 PM - 5:00 PM",
      location: "Lecture Hall A"
    },
    {
      date: "Mar 1, 2024",
      title: "Industry Guest Lecture Series",
      time: "3:00 PM - 5:00 PM",
      location: "Auditorium"
    }
  ];

  const categories = ["All", "Admissions", "Academic Achievement", "Facilities", "Partnerships", "Events", "New Programs"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 animate-fade-in">
              News & Events
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              Stay updated with the latest news, announcements, and upcoming events 
              at Murang'a Institute of Science and Management Studies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* News Articles */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-3xl font-bold text-gray-900">Latest News</h2>
                <div className="hidden md:flex space-x-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        index === 0 
                          ? 'bg-primary text-white' 
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {news.map((article, index) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {article.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {article.date}
                            </div>
                          </div>
                          <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in delay-200">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-2">
                      <div className="text-sm text-primary font-medium">{event.date}</div>
                      <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                      <div className="text-sm text-gray-600">{event.time}</div>
                      <div className="text-sm text-gray-600">{event.location}</div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-6 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  View All Events
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in delay-300">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/admissions"
                    className="block text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    → Apply for Admission
                  </Link>
                  <Link
                    to="/courses"
                    className="block text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    → View All Programs
                  </Link>
                  <Link
                    to="/facilities"
                    className="block text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    → Campus Tour
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    → Contact Information
                  </Link>
                  <a
                    href="tel:+254722374451"
                    className="block text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    → Call Us Now
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-xl shadow-lg p-6 animate-fade-in delay-400">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Stay Updated
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default News;
