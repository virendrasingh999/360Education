'use client';

import { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programme: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.programme.trim()) {
      newErrors.programme = 'Please select or enter a programme/service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const whatsappMessage = encodeURIComponent(
        `Hello, I would like to enquire about:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nInterested in: ${formData.programme}\n\nMessage: ${formData.message}`
      );
      
      window.open(`https://wa.me/919536385100?text=${whatsappMessage}`, '_blank');
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        programme: '',
        message: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          heading="Let's plan your next step"
          description="Fill out the form below and we'll help you explore your educational options."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1730] mb-1">Phone</h3>
                <a href="tel:9536385100" className="text-[#52627A] hover:text-[#3b82f6] transition-colors font-medium">
                  9536385100
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ec4899] to-[#be185d] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1730] mb-1">Email</h3>
                <a href="mailto:360education.consultancy@gmail.com" className="text-[#52627A] hover:text-[#ec4899] transition-colors break-all font-medium">
                  360education.consultancy@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1730] mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/919536385100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#52627A] hover:text-[#10b981] transition-colors font-medium"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E9B746] to-[#D4A63A] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1730] mb-1">Location</h3>
                <p className="text-[#52627A] leading-relaxed font-medium">
                  Lane-5, Star Paper Mill, H.No-3/5430, Road, Himmat Nagar, Saharanpur, Uttar Pradesh 247001
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#0B1730] mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#E9B746] focus:border-transparent transition-all`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#0B1730] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#E9B746] focus:border-transparent transition-all`}
                placeholder="Your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0B1730] mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#E9B746] focus:border-transparent transition-all`}
                placeholder="Your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="programme" className="block text-sm font-medium text-[#0B1730] mb-2">
                Interested Programme/Service *
              </label>
              <input
                type="text"
                id="programme"
                name="programme"
                value={formData.programme}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.programme ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#E9B746] focus:border-transparent transition-all`}
                placeholder="e.g., BBA Online, Career Guidance, etc."
              />
              {errors.programme && <p className="text-red-500 text-sm mt-1">{errors.programme}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#0B1730] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9B746] focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E9B746] to-[#D4A63A] text-[#0B1730] py-3 px-6 rounded-full font-semibold hover:from-[#D4A63A] hover:to-[#C49634] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E9B746] focus:ring-offset-2"
            >
              Request Free Guidance
            </button>

            <p className="text-xs text-[#52627A] text-center bg-gray-50 rounded-lg p-3">
              <strong>Note:</strong> Form submissions are sent via WhatsApp. Backend integration is required for database storage.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
