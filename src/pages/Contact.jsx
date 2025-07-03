
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Kabuta Main Campus",
        "P.O. Box 1088-10200",
        "Murang'a, Kenya"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+254 722 374 451",
        "Available Mon-Fri"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "murangainstitute@gmail.com",
        "info@mismskenya.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@mismskenya.com",
      phone: "+254 722 374 451",
      description: "For all admission inquiries and application assistance"
    },
    {
      name: "Academic Office",
      email: "academics@mismskenya.com", 
      phone: "+254 722 374 452",
      description: "For course information and academic support"
    },
    {
      name: "Student Services",
      email: "students@mismskenya.com",
      phone: "+254 722 374 453",
      description: "For student welfare and support services"
    },
    {
      name: "Finance Office",
      email: "finance@mismskenya.com",
      phone: "+254 722 374 454",
      description: "For fee payments and financial inquiries"
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
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              We're here to help you with any questions about our programs, 
              admissions, or campus life. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif text-3xl text-gray-900">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <div className="relative mt-1">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <div className="relative mt-1">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            placeholder="+254 7XX XXX XXX"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="What is your inquiry about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <div className="relative mt-1">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="pl-10 min-h-[120px]"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Directions */}
            <div className="animate-fade-in delay-200">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full">
                <div className="p-8">
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                    Find Us
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Located in the heart of Murang'a town, our Kabuta Main Campus is easily 
                    accessible by public transport and private vehicles.
                  </p>
                  
                  {/* Map Placeholder */}
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">Kabuta Main Campus, Murang'a</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-900">Getting Here:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• From Nairobi: Take Thika Road to Murang'a (1.5 hours)</li>
                      <li>• Public Transport: Matatus available from Nairobi and neighboring towns</li>
                      <li>• By Car: Parking available on campus</li>
                      <li>• Local Transport: Boda bodas and taxis readily available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For specific inquiries, you can contact our departments directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-xl text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href={`mailto:${dept.email}`} className="hover:text-primary transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href={`tel:${dept.phone}`} className="hover:text-primary transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about M.I.S.M.S.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What are the admission requirements?",
                  answer: "Admission requirements vary by program. Generally, you need a completed KCSE certificate or equivalent, official transcripts, and identification documents."
                },
                {
                  question: "When are the intake periods?",
                  answer: "We have three main intake periods: January, May, and September. Some programs may have additional intakes throughout the year."
                },
                {
                  question: "Do you offer accommodation?",
                  answer: "While we don't have on-campus accommodation, we can help connect you with nearby housing options and approved hostels."
                },
                {
                  question: "What are the payment options for fees?",
                  answer: "We offer flexible payment plans including installments. You can pay via bank transfer, mobile money, or visit our finance office directly."
                },
                {
                  question: "Do you provide job placement assistance?",
                  answer: "Yes, we have a dedicated career services office that helps with job placement, internships, and career guidance for our graduates."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Contact;
