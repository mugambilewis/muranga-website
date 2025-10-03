
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Mail, Phone, Award, GraduationCap } from 'lucide-react';

const Management = () => {
  const managementTeam = [
    {
      name: "Dr. Kamamia Murichu",
      position: "Director",
      image: "/director.png",
    },
    {
      name: "Dr Ambrose Munyithya",
      position: "Principal",
      
    },
    {
      name: "Mr. Stephen Mbugua Mwangi",
      position: "Registrar",
      
      
    },
   
  ];

  

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 animate-fade-in">
              Our Leadership Team
            </h1>
            <p className="text-xl text-blue-100 animate-fade-in delay-200">
              Meet the experienced professionals who guide our institution towards excellence 
              in education and student development.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team */}
     <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
        Senior Management
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our leadership team combines extensive academic experience with industry expertise 
        to provide strategic direction and ensure quality education delivery.
      </p>
    </div>

    <div className="max-w-2xl mx-auto space-y-8">
      {managementTeam.map((member, index) => (
      
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className='flex-col justify-center align-center p-6 bg-gray-800 text-white'>
            <h2 className="font-semibold text-xl">{member.name}</h2>
            <h3 className="text-sm text-gray-200">{member.position}</h3>   
          </div>
             
          <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Academic Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our academic departments are led by experienced educators who ensure quality 
              program delivery and student success.
            </p>
          </div>

          
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Leadership Philosophy
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Our leadership team is committed to fostering an environment of academic excellence, 
              innovation, and personal growth. We believe in empowering our students to become 
              leaders in their chosen fields while maintaining the highest standards of integrity 
              and professionalism.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Excellence in Education</h3>
                <p className="text-blue-100 text-sm">
                  Committed to delivering world-class education that meets international standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Student-Centered Approach</h3>
                <p className="text-blue-100 text-sm">
                  Putting student success and development at the heart of everything we do
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Open Communication</h3>
                <p className="text-blue-100 text-sm">
                  Maintaining transparent and open channels of communication with all stakeholders
                </p>
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

export default Management;
