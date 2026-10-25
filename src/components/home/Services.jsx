import { BookOpen, Compass, GraduationCap, Globe2, Landmark, School } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: School,
      title: 'Regular Education Admissions',
      description: 'Guidance for students exploring school, college and university admissions through regular, campus-based study.',
      features: ['UG and PG course options', 'College and university comparisons', 'Eligibility and application guidance', 'Document checklist support'],
      interest: 'Regular Education Admission',
      enquiryLabel: 'Enquire for Regular Education',
    },
    {
      icon: Globe2,
      title: 'Online & Distance Education Admissions',
      description: 'Explore flexible programmes for learners who need online or distance-learning formats.',
      features: ['Course and institution options', 'Programme mode comparisons', 'Admission process guidance'],
      interest: 'Online / Distance Education',
      enquiryLabel: 'Enquire for Online & Distance',
    },
    {
      icon: BookOpen,
      title: 'NIOS & BOSSE Schooling Admissions',
      description: 'Information and guidance for eligible learners considering open-board education.',
      features: ['Class 10 and 12 pathways', 'Subject and eligibility guidance', 'Application process information'],
      interest: 'NIOS / BOSSE Open Schooling',
      enquiryLabel: 'Enquire for NIOS & BOSSE',
    },
    {
      icon: Compass,
      title: 'Career Guidance & Counselling',
      description: 'Discuss interests, qualifications and possible next steps before making an education decision.',
      features: ['Stream and course selection', 'Career pathway exploration', 'Personalised guidance'],
      interest: 'Career Counselling',
    },
    {
      icon: GraduationCap,
      title: 'Online Academic Coaching',
      description: 'Online academic support options for school students in selected subjects and classes.',
      features: ['Classes 5–8: all subjects', 'Classes 9–10: Maths, Science, English, SST', 'Classes 11–12: selected Commerce and other subjects'],
      interest: 'Online Academic Coaching',
      enquiryLabel: 'Enquire for Online Coaching',
    },
    {
      icon: Landmark,
      title: 'Competitive Exam Guidance',
      description: 'Explore preparation pathways for government and competitive examinations.',
      features: ['Civil Services', 'Banking, SSC and Railways', 'Defence and government job exams'],
      interest: 'Competitive Exam Guidance',
    },
  ];

  return (
    <section id="admissions" data-aos="fade-up" className="py-12 sm:py-[78px] bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">Our services</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Choose the support you need</h2>
          <p className="text-[#647189]">Start with the education route that fits your goals. We can help you understand options, requirements and application steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px]">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white border border-[#e4e9f1] rounded-[18px] p-6 shadow-[0_8px_24px_rgba(7,24,49,0.05)] transition-all duration-200 flex flex-col hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(7,24,49,0.07)] hover:border-[#d8c18a]"
            >
              <div className="h-12 w-12 rounded-[14px] bg-[#fbf3df] text-[#74520c] grid place-items-center text-[22px] mb-4">
                <service.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="text-[18px] text-[#091831] mb-2">{service.title}</h3>
              <p className="text-[13px] text-[#647189] mb-3">{service.description}</p>
              <ul className="pl-[17px] mb-4 text-[#4c5b72] text-[12px] flex-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="my-1">• {feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                data-interest={service.interest}
                className="mt-auto text-[12px] text-[#89631a] font-[900] inline-flex items-center gap-1.5 hover:underline"
              >
                {service.enquiryLabel || `Enquire for ${service.title.split(' ').slice(0, 2).join(' ')}`} ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
