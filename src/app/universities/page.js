import { Metadata } from 'next';
import SectionTitle from '@/components/common/SectionTitle';
import { openSchoolBoards, universities } from '@/data/institutions';

export const metadata = {
  title: 'Universities - 360 Education & Consultancy',
  description: 'Explore university and institution options for online learning, distance education and open schooling. We help you understand available programmes and admission requirements.',
};

export default function UniversitiesPage() {
  return (
    <div className="flex-1">
      <section data-aos="fade-up" className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">University Options</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We help learners understand available institutions and programme routes.
          </p>
        </div>
      </section>

      <section data-aos="fade-up" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
          <SectionTitle
            eyebrow="INSTITUTIONS"
            heading="Explore 25 University Options"
            description="Browse institutions to discuss with a counsellor. Programme availability, study mode and eligibility depend on each institution's current offerings and rules."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {universities.map((institution) => (
              <div
                key={institution.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <span className="inline-block text-[#087F75] text-xs font-semibold tracking-wider uppercase mb-3">
                  {institution.category}
                </span>
                <h3 className="text-[#0B1730] font-bold text-xl mb-3">{institution.name}</h3>
                <p className="text-[#52627A] text-sm leading-relaxed">
                  Ask us about current programme availability, study modes and eligibility for this institution.
                </p>
              </div>
            ))}
          </div>

          <div className="mb-12 rounded-xl border border-gray-100 bg-[#F5F7FA] p-6">
            <h3 className="text-xl font-bold text-[#0B1730] mb-3">Open Schooling Boards</h3>
            <p className="text-[#52627A] text-sm leading-relaxed mb-4">
              For Class 10 and 12 open-schooling guidance, ask us about the board options below.
            </p>
            <div className="flex flex-wrap gap-3">
              {openSchoolBoards.map((board) => (
                <span key={board.name} className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-semibold text-[#33425a]">
                  {board.name}
                </span>
              ))}
            </div>
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
