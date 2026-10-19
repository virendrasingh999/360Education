import { Metadata } from 'next';
import SectionTitle from '@/components/common/SectionTitle';

export const metadata = {
  title: 'Universities - 360 Education & Consultancy',
  description: 'Explore university and institution options for online learning, distance education and open schooling. We help you understand available programmes and admission requirements.',
};

export default function UniversitiesPage() {
  const institutions = [
    {
      name: 'Chandigarh University Online',
      category: 'ONLINE LEARNING',
      description: 'Offers various online undergraduate and postgraduate programmes across multiple disciplines.',
    },
    {
      name: 'Subharti University',
      category: 'UNIVERSITY OPTIONS',
      description: 'Provides regular, distance and online education programmes in various fields.',
    },
    {
      name: 'Kurukshetra University Online',
      category: 'ONLINE LEARNING',
      description: 'State university offering online programmes with recognised degrees.',
    },
    {
      name: 'Mangalayatan University Online',
      category: 'ONLINE LEARNING',
      description: 'Offers flexible online learning options for working professionals and students.',
    },
    {
      name: 'Graphic Era Online',
      category: 'ONLINE LEARNING',
      description: 'Known for technology and management programmes through online mode.',
    },
    {
      name: 'NIOS',
      category: 'OPEN SCHOOLING',
      description: 'National Institute of Open Schooling - flexible schooling option for secondary and senior secondary education.',
    },
    {
      name: 'BOSSE',
      category: 'OPEN SCHOOLING',
      description: 'Board of Open Schooling and Skill Education - alternative open schooling pathway.',
    },
  ];

  return (
    <div className="flex-1">
      <section data-aos="fade-up" className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">University Options</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We help learners understand available institutions and programme routes.
          </p>
        </div>
      </section>

      <section data-aos="fade-up" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="INSTITUTIONS"
            heading="Explore University Options"
            description="Learn about various institutions offering online, distance and open schooling programmes. Final admission depends on each institution's current rules and eligibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {institutions.map((institution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <span className="inline-block text-[#087F75] text-xs font-semibold tracking-wider uppercase mb-3">
                  {institution.category}
                </span>
                <h3 className="text-[#0B1730] font-bold text-xl mb-3">{institution.name}</h3>
                <p className="text-[#52627A] text-sm leading-relaxed">{institution.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0B1730]/5 rounded-xl p-8 border border-[#0B1730]/10 mb-8">
            <h3 className="text-xl font-bold text-[#0B1730] mb-4">Important Disclaimer</h3>
            <p className="text-[#52627A] leading-relaxed mb-4">
              The institutions listed above are examples of options available in the education landscape. We provide guidance to help you understand these options, but we do not claim official partnerships or authorisation with any institution.
            </p>
            <p className="text-[#52627A] leading-relaxed">
              <strong className="text-[#0B1730]">Please verify the following directly with each institution:</strong>
            </p>
            <ul className="mt-4 space-y-2 text-[#52627A]">
              <li className="flex items-start gap-2">
                <span className="text-[#087F75] mt-1">•</span>
                <span>Current programme availability and specialisations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#087F75] mt-1">•</span>
                <span>Recognition and accreditation status</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#087F75] mt-1">•</span>
                <span>Fee structure and payment schedules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#087F75] mt-1">•</span>
                <span>Eligibility criteria and admission requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#087F75] mt-1">•</span>
                <span>Admission dates and deadlines</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#E9B746]/10 rounded-xl p-8 border border-[#E9B746]/30">
            <h3 className="text-xl font-bold text-[#0B1730] mb-4">Need Personalised Guidance?</h3>
            <p className="text-[#52627A] leading-relaxed mb-6">
              Contact us to discuss your specific requirements. We can help you understand which institutions and programmes might be suitable for your goals, background and circumstances.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-[#E9B746] text-[#0B1730] px-6 py-3 rounded-full font-medium hover:bg-[#D4A63A] transition-colors"
            >
              Get Personalised Guidance ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
