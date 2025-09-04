
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { FileText, Calendar, CheckCircle, Upload, User, Mail, Phone, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from '../hooks/use-toast';

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    intake: '',
    previousEducation: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll contact you within 2-3 business days to discuss your application.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      intake: '',
      previousEducation: '',
      additionalInfo: ''
    });
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form with your personal and academic details"
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Provide copies of your certificates, transcripts, and identification"
    },
    {
      icon: CheckCircle,
      title: "Review & Interview",
      description: "Our admissions team will review your application and may conduct an interview"
    },
    {
      icon: Calendar,
      title: "Enrollment",
      description: "Upon acceptance, complete enrollment and begin your academic journey"
    }
  ];

  const requirements = [
    "Completed KCSE Certificate or equivalent",
    "Official transcripts from previous institutions",
    "Copy of National ID or Passport",
    "Birth Certificate (for first-time applicants)",
    "Two recent passport-size photographs",
    "Application fee payment receipt"
  ];

  const intakePeriods = [
    { period: "January 2024", deadline: "December 15, 2023", status: "Open" },
    { period: "May 2024", deadline: "April 15, 2024", status: "Open" },
    { period: "September 2024", deadline: "August 15, 2024", status: "Open" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 animate-fade-in">
              Join M.I.S.M.S Today
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              Start your journey towards academic excellence and career success. 
              Applications are now open for all programs.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Simple Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these four easy steps to begin your educational journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="h-10 w-10 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-3xl text-gray-900">
                  Online Application Form
                </CardTitle>
                <CardDescription className="text-lg">
                  Complete this form to begin your application process
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First Name *
                      </Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last Name *
                      </Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="Enter your last name"
                        />
                      </div>
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
                        Phone Number *
                      </Label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10"
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Program of Interest *
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange('program', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 overflow-y-auto bg-blue-500">
                          <SelectItem value="computer-science">Diploma in Computer Science</SelectItem>
                          <SelectItem value="business-management">Diploma in Business Management</SelectItem>
                          <SelectItem value="applied-sciences">Diploma in Applied Sciences</SelectItem>
                          <SelectItem value="digital-marketing">Diploma in Digital Marketing</SelectItem>
                          <SelectItem value="it-certificate">Certificate in Information Technology</SelectItem>
                          <SelectItem value="project-management">Certificate in Project Management</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium text-gray-700">
                        Preferred Intake *
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange('intake', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select intake period" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 overflow-y-auto bg-blue-500">
                          <SelectItem value="january-2024">January 2024</SelectItem>
                          <SelectItem value="may-2024">May 2024</SelectItem>
                          <SelectItem value="september-2024">September 2024</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="previousEducation" className="text-sm font-medium text-gray-700">
                      Previous Education Background *
                    </Label>
                    <div className="relative mt-1">
                      <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Textarea
                        id="previousEducation"
                        name="previousEducation"
                        required
                        value={formData.previousEducation}
                        onChange={handleInputChange}
                        className="pl-10 min-h-[80px]"
                        placeholder="Describe your educational background (e.g., KCSE, previous certificates/diplomas)"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                      Additional Information (Optional)
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[80px]"
                      placeholder="Any additional information you'd like to share"
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> After submitting this form, our admissions team will contact you 
                      within 2-3 business days with further instructions and document requirements.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements & Intake Periods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Admission Requirements
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Intake Periods */}
            <div className="animate-fade-in delay-200">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Intake Periods
              </h2>
              <div className="space-y-4">
                {intakePeriods.map((intake, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{intake.period}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        intake.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {intake.status}
                      </span>
                    </div>
                    <p className="text-gray-600">Application Deadline: {intake.deadline}</p>
                  </div>
                ))}
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

export default Admissions;
