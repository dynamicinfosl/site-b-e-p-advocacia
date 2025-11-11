
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = "5521984610776"; // Número do WhatsApp
  const message = "Olá! Gostaria de agendar uma consulta jurídica.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </button>
      
      {isHovered && (
        <div className="absolute bottom-16 right-0 bg-brown-dark text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
          <p className="font-lato text-sm">Fale conosco no WhatsApp</p>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brown-dark"></div>
        </div>
      )}
    </div>
  );
}
