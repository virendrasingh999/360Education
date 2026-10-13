import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1730] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E9B746] rounded-full flex items-center justify-center">
                <span className="text-[#0B1730] font-bold text-lg">360°</span>
              </div>
              <div>
                <div className="font-bold text-lg">360 Education</div>
                <div className="text-[#E9B746] text-xs">LEARN • CHOOSE • ACHIEVE</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Helping students and families make informed decisions about education, admission, career options, online education, distance learning and open schooling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#E9B746] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#E9B746] mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Career Guidance</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Admission Assistance</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Online Education</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#E9B746] transition-colors text-sm">Distance Education</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#E9B746] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#E9B746] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Saharanpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-[#E9B746] flex-shrink-0" />
                <a href="tel:9536385100" className="text-gray-300 hover:text-[#E9B746] transition-colors">9536385100</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-[#E9B746] flex-shrink-0" />
                <a href="mailto:360education.consultancy@gmail.com" className="text-gray-300 hover:text-[#E9B746] transition-colors break-all">360education.consultancy@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} 360 Education & Consultancy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#E9B746] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#E9B746] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
