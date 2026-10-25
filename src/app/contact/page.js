import { Metadata } from 'next';
import SectionTitle from '@/components/common/SectionTitle';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - 360 Education & Consultancy',
  description: 'Get in touch with 360 Education & Consultancy for free education and career guidance. Contact us via phone, email or WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="flex-1">
      <section data-aos="fade-up" className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with us for free education and career guidance.
          </p>
        </div>
      </section>

      <section data-aos="fade-up" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
          <SectionTitle
            eyebrow="GET IN TOUCH"
            heading="Reach Out to Us"
            description="We're here to help you make informed education and career decisions. Contact us through any of the channels below."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0B1730] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#E9B746]" />
              </div>
              <h3 className="font-bold text-[#0B1730] mb-2">Phone</h3>
              <a href="tel:9536385100" className="text-[#52627A] hover:text-[#E9B746] transition-colors">
                9536385100
              </a>
            </div>

            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#087F75] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#0B1730] mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919536385100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52627A] hover:text-[#E9B746] transition-colors"
              >
                Chat with us
              </a>
            </div>

            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0B1730] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#E9B746]" />
              </div>
              <h3 className="font-bold text-[#0B1730] mb-2">Email</h3>
              <a
                href="mailto:saurabhv730@gmail.com"
                className="text-[#52627A] hover:text-[#E9B746] transition-colors break-all text-sm"
              >
                saurabhv730@gmail.com
              </a>
            </div>

            <div className="bg-[#F5F7FA] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0B1730] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#E9B746]" />
              </div>
              <h3 className="font-bold text-[#0B1730] mb-2">Location</h3>
              <p className="text-[#52627A]">India</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0B1730] to-[#087F75] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Fill out the enquiry form on our homepage or reach out to us directly. We're here to help you explore your educational options.
            </p>
            <a
              href="/"
              className="inline-flex items-center bg-[#E9B746] text-[#0B1730] px-6 py-3 rounded-full font-medium hover:bg-[#D4A63A] transition-colors"
            >
              Go to Enquiry Form ↗
            </a>
          </div>

          <div className="mt-12 bg-[#0B1730]/5 rounded-xl p-8 border border-[#0B1730]/10">
            <h3 className="text-xl font-bold text-[#0B1730] mb-4">Office Hours</h3>
            <p className="text-[#52627A] leading-relaxed">
              For the best response time, we recommend contacting us during business hours. However, you can leave us a message anytime through WhatsApp or email, and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
