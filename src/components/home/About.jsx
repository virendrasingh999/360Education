import Button from '@/components/common/Button';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0B1730] to-[#10294B] rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <div className="text-4xl md:text-6xl font-bold text-[#E9B746] mb-2 drop-shadow-lg">360°</div>
              <p className="text-sm font-semibold">Education</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1730]">
              Helping you make informed education choices.
            </h2>
            <p className="text-[#52627A] text-lg leading-relaxed">
              At 360 Education & Consultancy, we understand that choosing the right education path is one of the most important decisions you'll make. Led by Saurabh Verma, our Founder & Chief Admission Counsellor, we provide personalised guidance to help you navigate through various educational opportunities.
            </p>
            <ul className="space-y-4">
              {[
                'Student-focused counselling and guidance',
                'Support for regular, online, distance and open-schooling pathways',
                'Clear conversations about eligibility, process and options',
                'Guidance led by Saurabh Verma, Founder & Chief Admission Counsellor',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#087F75] to-[#066663] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#52627A] font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-6">
              Talk to a Counsellor ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
