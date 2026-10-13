import { Metadata } from 'next';
import SectionTitle from '@/components/common/SectionTitle';
import { Compass, FileText, Globe, BookOpen, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services - 360 Education & Consultancy',
  description: 'Explore our comprehensive education consultancy services including career guidance, admission assistance, online education, distance learning and more.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Compass,
      title: 'Career Guidance',
      description: 'Explore career options aligned with your interests, skills and goals through personalised counselling sessions. We help you understand various career paths and make informed decisions about your future.',
      details: [
        'Personalised career assessment',
        'Industry insights and trends',
        'Skill gap analysis',
        'Career roadmap planning',
      ],
    },
    {
      icon: FileText,
      title: 'Admission Assistance',
      description: 'Get support with application processes, documentation and understanding admission requirements for various institutions. We guide you through the complex admission procedures.',
      details: [
        'Application form guidance',
        'Document preparation support',
        'Eligibility assessment',
        'Deadline tracking',
      ],
    },
    {
      icon: Globe,
      title: 'Online Education Guidance',
      description: 'Learn about online learning opportunities, programme structures and how to balance education with other commitments. Online education offers flexibility for working professionals and others.',
      details: [
        'University and programme selection',
        'Understanding online learning formats',
        'Time management strategies',
        'Technical requirements guidance',
      ],
    },
    {
      icon: BookOpen,
      title: 'Distance Education Guidance',
      description: 'Understand distance learning programmes, their recognition and suitability for your educational needs. Distance education provides an alternative pathway for those who cannot attend regular classes.',
      details: [
        'Recognised distance learning institutions',
        'Programme accreditation information',
        'Study material and exam guidance',
        'Validity for higher studies and jobs',
      ],
    },
    {
      icon: Users,
      title: 'Open Schooling Guidance',
      description: 'Get information about open schooling options like NIOS and BOSSE for flexible learning pathways. Open schooling is ideal for students who need alternative education options.',
      details: [
        'NIOS and BOSSE programme details',
        'Eligibility criteria',
        'Registration process support',
        'Exam preparation guidance',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Academic Counselling',
      description: 'Receive ongoing support and guidance throughout your educational journey to help you stay on track. Our counsellors are available to address your concerns and queries.',
      details: [
        'Regular progress check-ins',
        'Study schedule planning',
        'Motivation and support',
        'Problem-solving assistance',
      ],
    },
  ];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive guidance and support to help you navigate your educational journey with confidence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="WHAT WE OFFER"
            heading="Comprehensive Education Consultancy Services"
            description="We provide end-to-end support for all your education and career-related needs."
          />

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              >
                <div className="lg:col-span-1">
                  <div className="bg-[#0B1730] rounded-xl p-6 text-white h-full">
                    <div className="w-14 h-14 bg-[#E9B746] rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-[#0B1730]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-[#F5F7FA] rounded-xl p-6">
                  <h4 className="font-semibold text-[#0B1730] mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#087F75] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#52627A]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#0B1730]/5 rounded-xl p-8 border border-[#0B1730]/10">
            <h3 className="text-2xl font-bold text-[#0B1730] mb-4">Ready to Get Started?</h3>
            <p className="text-[#52627A] mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you find the right educational path.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#E9B746] text-[#0B1730] px-6 py-3 rounded-full font-medium hover:bg-[#D4A63A] transition-colors"
            >
              Book Free Consultation ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
