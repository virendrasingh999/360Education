import SectionTitle from '@/components/common/SectionTitle';

export default function Universities() {
  const institutions = [
    { name: 'Chandigarh University Online', category: 'ONLINE LEARNING' },
    { name: 'Subharti University', category: 'UNIVERSITY OPTIONS' },
    { name: 'Kurukshetra University Online', category: 'ONLINE LEARNING' },
    { name: 'Mangalayatan University Online', category: 'ONLINE LEARNING' },
    { name: 'Graphic Era Online', category: 'ONLINE LEARNING' },
    { name: 'NIOS', category: 'OPEN SCHOOLING' },
    { name: 'BOSSE', category: 'OPEN SCHOOLING' },
    { name: 'More Options Available', category: 'PERSONAL GUIDANCE' },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="UNIVERSITY OPTIONS"
          heading="Explore university options"
          description="We help learners understand available institutions and programme routes. Final admission depends on each institution's current rules and eligibility."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#10b981]/50 group transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="inline-block text-[#10b981] text-xs font-semibold tracking-wider uppercase mb-2">
                {institution.category}
              </span>
              <h3 className="text-[#0B1730] font-bold text-lg group-hover:text-[#10b981] transition-colors">{institution.name}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#10b981]/10 to-[#059669]/10 rounded-2xl p-6 border border-[#10b981]/20">
          <p className="text-[#475569] text-sm leading-relaxed text-center">
            <strong className="text-[#10b981]">Important:</strong> Verify recognition, programme approval, fees and admission dates directly with the relevant institution before enrolling. We provide guidance to help you understand options, but final admission decisions and eligibility are determined by each institution.
          </p>
        </div>
      </div>
    </section>
  );
}
