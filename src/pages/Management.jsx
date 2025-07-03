
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import { Mail, Phone, Award, GraduationCap } from 'lucide-react';

const Management = () => {
  const managementTeam = [
    {
      name: "Dr. James Mwangi",
      position: "Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      qualifications: "PhD in Educational Leadership, MBA",
      experience: "15+ years in educational administration",
      email: "director@mismskenya.com",
      phone: "+254 722 374 451"
    },
    {
      name: "Prof. Mary Wanjiku",
      position: "Deputy Director - Academics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      qualifications: "PhD in Computer Science, MSc IT",
      experience: "12+ years in higher education",
      email: "academics@mismskenya.com",
      phone: "+254 722 374 452"
    },
    {
      name: "Mr. Peter Kamau",
      position: "Registrar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      qualifications: "Masters in Public Administration",
      experience: "10+ years in student services",
      email: "registrar@mismskenya.com",
      phone: "+254 722 374 453"
    },
    {
      name: "Ms. Grace Njeri",
      position: "Dean of Students",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      qualifications: "Masters in Counseling Psychology",
      experience: "8+ years in student welfare",
      email: "students@mismskenya.com",
      phone: "+254 722 374 454"
    },
    {
      name: "Mr. Samuel Mutua",
      position: "Head of ICT Department",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      qualifications: "MSc Computer Science, CISSP",
      experience: "12+ years in IT industry",
      email: "ict@mismskenya.com",
      phone: "+254 722 374 455"
    },
    {
      name: "Dr. Ruth Wambui",
      position: "Head of Business Department",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=400&h=400&fit=crop&crop=face",
      qualifications: "PhD in Business Administration, CPA",
      experience: "14+ years in business education",
      email: "business@mismskenya.com",
      phone: "+254 722 374 456"
    }
  ];

  const departments = [
    {
      name: "Computer Science & Information Technology",
      head: "Mr. Samuel Mutua",
      programs: ["Diploma in Computer Science", "Certificate in IT", "Advanced Diploma in Software Engineering"]
    },
    {
      name: "Business & Management Studies",
      head: "Dr. Ruth Wambui",
      programs: ["Diploma in Business Management", "Certificate in Project Management", "Advanced Diploma in HRM"]
    },
    {
      name: "Applied Sciences",
      head: "Dr. Michael Kiprotich",
      programs: ["Diploma in Applied Sciences", "Certificate in Environmental Science"]
    },
    {
      name: "Communication & Media Studies",
      head: "Ms. Catherine Nyong'o",
      programs: ["Diploma in Digital Marketing", "Certificate in Communication & Media Studies"]
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-xl">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                      <span>{member.qualifications}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((department, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  {department.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Department Head:</strong> {department.head}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Programs Offered:</h4>
                  <ul className="space-y-1">
                    {department.programs.map((program, programIndex) => (
                      <li key={programIndex} className="text-gray-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
