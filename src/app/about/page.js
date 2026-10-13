import { Metadata } from 'next';
import Button from '@/components/common/Button';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'About Us - 360 Education & Consultancy',
  description: 'Learn about 360 Education & Consultancy, led by Saurabh Verma. We help students make informed education and career decisions.',
};

export default function AboutPage() {
  return (
    <div className="flex-1">
      <section className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Helping students and families make informed decisions about education and career paths.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-[#0B1730] to-[#087F75] rounded-2xl p-8 md:p-12 text-white">
              <div className="text-6xl md:text-8xl font-bold text-[#E9B746] mb-4">360°</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Every learner deserves direction.</h3>
              <p className="text-gray-200 leading-relaxed">
                We believe that every student has unique potential. Our mission is to help you discover the right educational path that aligns with your goals, interests, and circumstances.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1730]">
                Our Mission
              </h2>
              <p className="text-[#52627A] text-lg leading-relaxed">
                At 360 Education & Consultancy, we understand that choosing the right education path is one of the most important decisions you'll make. We provide personalised guidance to help you navigate through various educational opportunities.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1730] mb-8 text-center">Meet Our Founder</h2>
            <div className="bg-[#F5F7FA] rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-[#0B1730] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#E9B746] font-bold text-3xl">SV</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1730] mb-2">Saurabh Verma</h3>
              <p className="text-[#087F75] font-medium mb-4">Founder & Chief Admission Counsellor</p>
              <p className="text-[#52627A] leading-relaxed">
                With extensive experience in education counselling, Saurabh Verma leads our team in providing personalised guidance to students. His approach focuses on understanding each student's unique needs and helping them find the most suitable educational pathway.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1730] mb-8 text-center">Why Choose Us</h2>
            <ul className="space-y-4">
              {[
                'Student-focused counselling and guidance',
                'Support for regular, online, distance and open-schooling pathways',
                'Clear conversations about eligibility, process and options',
                'Personalised attention to each student\'s needs',
                'Honest and transparent guidance',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#087F75] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#52627A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact">
              Talk to a Counsellor ↗
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
