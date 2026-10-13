import SectionTitle from '@/components/common/SectionTitle';
import { Compass, FileText, Globe, BookOpen, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Career Guidance',
      description: 'Explore career options aligned with your interests, skills and goals through personalised counselling sessions.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    },
    {
      icon: FileText,
      title: 'Admission Assistance',
      description: 'Get support with application processes, documentation and understanding admission requirements for various institutions.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    },
    {
      icon: Globe,
      title: 'Online Education Guidance',
      description: 'Learn about online learning opportunities, programme structures and how to balance education with other commitments.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
    },
    {
      icon: BookOpen,
      title: 'Distance Education Guidance',
      description: 'Understand distance learning programmes, their recognition and suitability for your educational needs.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
    },
    {
      icon: Users,
      title: 'Open Schooling Guidance',
      description: 'Get information about open schooling options like NIOS and BOSSE for flexible learning pathways.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
    },
    {
      icon: MessageSquare,
      title: 'Academic Counselling',
      description: 'Receive ongoing support and guidance throughout your educational journey to help you stay on track.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="OUR SERVICES"
          heading="How We Can Help You"
          description="We offer comprehensive guidance and support to help you navigate your educational journey with confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/50 group transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1730] mb-3 group-hover:text-[#3b82f6] transition-colors">{service.title}</h3>
                <p className="text-[#52627A] mb-5 leading-relaxed line-clamp-3">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-[#3b82f6] font-semibold hover:text-[#8b5cf6] transition-colors group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
