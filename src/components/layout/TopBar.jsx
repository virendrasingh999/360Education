import { MapPin, Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0B1730] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <MapPin className="w-4 h-4 text-[#E9B746]" />
          <span>Saharanpur, Uttar Pradesh</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a 
            href="tel:9536385100" 
            className="flex items-center gap-2 hover:text-[#E9B746] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>9536385100</span>
          </a>
          <a 
            href="https://wa.me/919536385100" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#E9B746] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a 
            href="mailto:360education.consultancy@gmail.com" 
            className="flex items-center gap-2 hover:text-[#E9B746] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">360education.consultancy@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
