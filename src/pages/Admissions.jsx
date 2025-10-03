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
import emailjs from '@emailjs/browser'; // ADDED: EmailJS import

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

  const [isSending, setIsSending] = useState(false); // ADDED: sending state

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

    // Set sending state
    setIsSending(true);

    console.log('Application submitted:', formData);

    // Build template params to match your EmailJS template variables.
    // If your EmailJS template uses different variable names (e.g. {{name}} or {{message}}),
    // update the keys below to match them exactly.
    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      intake: formData.intake,
      previousEducation: formData.previousEducation,
      additionalInfo: formData.additionalInfo,
      message: `
        Program: ${formData.program}
        Intake: ${formData.intake}
        Phone: ${formData.phone}
        Education: ${formData.previousEducation}
        Extra Info: ${formData.additionalInfo}
      `
    };

    // Send email using EmailJS (service ID, template ID, public key as provided)
    emailjs.send('service_c9cksub', 'template_lkt40ql', templateParams, 'XxfA1P97uL9-rAalm')
      .then((response) => {
        console.log('EmailJS success:', response);

        // Show the requested success popup
        toast({
          title: "Sent!",
          description: "We will reply back soon.",
        });

        // Reset form (keeps original reset behavior)
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
      })
      .catch((error) => {
        console.error('EmailJS error:', error);

        // Show failure popup
        toast({
          title: "Failed!",
          description: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => {
        setIsSending(false);
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
    { period: "January 2026", deadline: "December 15, 2026", status: "Open" },
    { period: "May 2026", deadline: "April 15, 2026", status: "Open" },
    { period: "September 2025", deadline: "October 10, 2025", status: "Open" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary from-primary to-accent text-white">
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

      {/* Enhanced Admission Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary from-primary to-accent text-white rounded-full text-sm font-semibold mb-4 shadow-lg">
              Getting Started
            </div>
           
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these four easy steps to begin your educational journey with us.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="group relative animate-fade-in transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connection line for desktop */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-300 z-0"></div>
                )}               
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 text-center z-10">
                  {/* Icon container with enhanced styling */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300 shadow-inner">
                      <step.icon className="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    {/* Step number with enhanced styling */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg ring-2 ring-white">
                      {index + 1}
                    </div>
                  </div>                  
                  <h3 className="font-semibold text-xl mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Ready to get started? Complete the form below!</span>
            </div>
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
                    disabled={isSending} // ADDED: disable while sending
                  >
                    {isSending ? 'Sending...' : 'Submit Application'} {/* ADDED: show state */}
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
