import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { GraduationCap, Award, Book, Laptop, School, Users } from 'lucide-react';

export default function Courses() {
  const categories = [
    {
      icon: GraduationCap,
      title: 'Undergraduate Programmes',
      description: 'Bachelor\'s degrees across various disciplines including arts, commerce, science and professional fields.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop',
    },
    {
      icon: Award,
      title: 'Postgraduate Programmes',
      description: 'Master\'s degrees and advanced qualifications to specialise in your chosen field of study.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop',
    },
    {
      icon: Book,
      title: 'Diploma Programmes',
      description: 'Skill-focused diploma courses for career enhancement and practical knowledge development.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    },
    {
      icon: Laptop,
      title: 'Online Learning',
      description: 'Flexible online programmes that allow you to study from anywhere at your own pace.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
    },
    {
      icon: School,
      title: 'Distance Learning',
      description: 'Recognised distance education programmes for those who need flexible study schedules.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
    },
    {
      icon: Users,
      title: 'Open Schooling',
      description: 'Open schooling options for students seeking alternative education pathways.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="EDUCATION PATHWAYS"
          heading="Explore Learning Opportunities"
          description="Discover various educational pathways available to help you achieve your academic and career goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#E9B746]/50 group transform hover:-translate-y-2"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E9B746] to-[#D4A63A] rounded-xl flex items-center justify-center shadow-lg">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0B1730] mb-2 group-hover:text-[#E9B746] transition-colors">
                  {category.title}
                </h3>
                <p className="text-[#52627A] text-sm leading-relaxed line-clamp-3">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact">
            Enquire About Eligibility & Availability
          </Button>
        </div>
      </div>
    </section>
  );
}
