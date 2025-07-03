
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Target, Eye, Heart, Award, Users, BookOpen, Building } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and service delivery"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical practices in all our endeavors"
    },
    {
      icon: Users,
      title: "Innovation",
      description: "We embrace new ideas and technologies to enhance learning experiences"
    },
    {
      icon: BookOpen,
      title: "Inclusivity",
      description: "We welcome students from all backgrounds and provide equal opportunities"
    }
  ];

  const stats = [
    { icon: Award, number: "15+", label: "Years of Excellence" },
    { icon: Users, number: "500+", label: "Graduates" },
    { icon: BookOpen, number: "15+", label: "Programs Offered" },
    { icon: Building, number: "3", label: "Modern Campuses" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 animate-fade-in">
              About M.I.S.M.S
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              Empowering minds, shaping futures, and building tomorrow's leaders through 
              quality education and innovative learning approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading institution of higher learning in East Africa, recognized for 
                excellence in Science, Management, and Technology education that produces competent 
                professionals who contribute meaningfully to national and global development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in delay-200">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide quality, accessible, and innovative education in Science, Management, 
                and Technology through excellent teaching, research, and community service that 
                prepares students for leadership roles in their chosen careers and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the character of our institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a vision to transform education in Kenya, Murang'a Institute of Science 
                and Management Studies has grown from humble beginnings to become one of the most 
                respected institutions in the region.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Located in the scenic town of Murang'a, our Kabuta Main Campus serves as the hub 
                of academic excellence, fostering innovation and nurturing talent across various 
                disciplines including Science, Management, and Technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to evolve, embracing new technologies and methodologies to ensure 
                our students receive world-class education that prepares them for the challenges and 
                opportunities of tomorrow.
              </p>
            </div>
            <div className="relative animate-fade-in delay-200">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern academic building"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              M.I.S.M.S by the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Our achievements speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6 text-gray-900">
              Accreditation & Recognition
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              M.I.S.M.S is fully accredited by the relevant educational authorities in Kenya, 
              ensuring that our programs meet the highest standards of quality and are recognized 
              by employers and institutions worldwide.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl mb-4 text-gray-900">Our Accreditations Include:</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Ministry of Education, Kenya</li>
                <li>• Technical and Vocational Education and Training Authority (TVETA)</li>
                <li>• Kenya National Qualifications Authority (KNQA)</li>
                <li>• Association of Professional Societies in East Africa (APSEA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default About;
