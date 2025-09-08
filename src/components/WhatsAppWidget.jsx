import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "254722374451";
    const message = "Hello! I'm interested in learning more about Murang'a Institute programs and admissions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex justify-center items-center">
  <button
    onClick={handleWhatsAppClick}
    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 animate-float flex items-center gap-2"
    aria-label="Contact us on WhatsApp"
  >
    <FaWhatsapp className="w-6 h-6" />
    How can we help you?
  </button>
</div>
  );
};

export default WhatsAppWidget;
