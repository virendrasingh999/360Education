import { Metadata } from 'next';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { GraduationCap, Award, Book, Laptop, School, Users } from 'lucide-react';

export const metadata = {
  title: 'Courses - 360 Education & Consultancy',
  description: 'Explore various education pathways including undergraduate, postgraduate, diploma programmes, online learning, distance learning and open schooling options.',
};

export default function CoursesPage() {
  const categories = [
    {
      icon: GraduationCap,
      title: 'Undergraduate Programmes',
      description: 'Bachelor\'s degrees across various disciplines including arts, commerce, science and professional fields.',
      examples: [
        'BBA, B.Com, B.Sc',
        'BA, BCA, B.Tech',
        'Professional degrees',
      ],
    },
    {
      icon: Award,
      title: 'Postgraduate Programmes',
      description: 'Master\'s degrees and advanced qualifications to specialise in your chosen field of study.',
      examples: [
        'MBA, M.Com, M.Sc',
        'MA, MCA, M.Tech',
        'Specialised master\'s programmes',
      ],
    },
    {
      icon: Book,
      title: 'Diploma Programmes',
      description: 'Skill-focused diploma courses for career enhancement and practical knowledge development.',
      examples: [
        'Management diplomas',
        'Technical diplomas',
        'Vocational courses',
      ],
    },
    {
      icon: Laptop,
      title: 'Online Learning',
      description: 'Flexible online programmes that allow you to study from anywhere at your own pace.',
      examples: [
        'Online degree programmes',
        'Certification courses',
        'Self-paced learning options',
      ],
    },
    {
      icon: School,
      title: 'Distance Learning',
      description: 'Recognised distance education programmes for those who need flexible study schedules.',
      examples: [
        'Correspondence courses',
        'Weekend programmes',
        'Part-time distance education',
      ],
    },
    {
      icon: Users,
      title: 'Open Schooling',
      description: 'Open schooling options for students seeking alternative education pathways.',
      examples: [
        'NIOS programmes',
        'BOSSE courses',
        'Flexible examination schedules',
      ],
    },
  ];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-br from-[#0B1730] to-[#10294B] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Education Pathways</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover various educational pathways available to help you achieve your academic and career goals.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="EXPLORE OPTIONS"
            heading="Available Education Pathways"
            description="We provide guidance on various educational options to help you choose the right path for your goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-xl p-6 hover:bg-[#0B1730] group transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#E9B746] rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  <category.icon className="w-7 h-7 text-[#0B1730] group-hover:text-[#E9B746] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1730] group-hover:text-white mb-3 transition-colors">
                  {category.title}
                </h3>
                <p className="text-[#52627A] text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#52627A] group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 bg-[#087F75] rounded-full"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#0B1730]/5 rounded-xl p-8 border border-[#0B1730]/10 mb-12">
            <h3 className="text-xl font-bold text-[#0B1730] mb-4">Important Information</h3>
            <p className="text-[#52627A] leading-relaxed">
              Programme availability, eligibility criteria, fees and admission processes vary by institution and change periodically. We provide guidance to help you understand options, but we recommend verifying all details directly with the respective institutions before making any decisions.
            </p>
          </div>

          <div className="text-center">
            <Button href="/contact">
              Enquire About Eligibility & Availability
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
