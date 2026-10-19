export default function About() {
  return (
    <section id="about" data-aos="fade-up" className="py-12 sm:py-[78px]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-center mb-16">
          <div className="min-h-[370px] rounded-[22px] overflow-hidden bg-gradient-to-br from-[#102347] to-[#1d5c60] grid place-items-center p-6 relative text-center text-white">
            <div className="absolute w-[250px] h-[250px] border border-[#ffffff40] rounded-full shadow-[0_0_0_35px_rgba(255,255,255,0.08),0_0_0_70px_rgba(255,255,255,0.05)]"></div>
            <div className="relative z-10">
              <div className="w-[125px] h-[125px] bg-white rounded-[20px] p-2 mx-auto mb-3">
                <img src="/logo.jpeg" alt="360 Education & Consultancy Logo" className="w-full h-full object-contain rounded-[16px]" />
              </div>
              <h3 className="text-[21px] mb-1">360 Education & Consultancy</h3>
              <p className="text-[#d6e1ef] text-[12px]">Your Career, Our Direction</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Why choose 360 Education?</h2>
            <p className="text-[#647189] mb-5">
              We help students and families make informed decisions about education, admission, career options, online education, distance learning and open schooling in Saharanpur, Uttar Pradesh.
            </p>
            <ul className="list-none p-0 m-5">
              <li className="flex gap-2.5 my-3 text-[#45536a] text-[13px]">
                <b className="text-[#16836a]">✓</b> Personalised guidance for every student
              </li>
              <li className="flex gap-2.5 my-3 text-[#45536a] text-[13px]">
                <b className="text-[#16836a]">✓</b> Support for regular, online & distance education
              </li>
              <li className="flex gap-2.5 my-3 text-[#45536a] text-[13px]">
                <b className="text-[#16836a]">✓</b> NIOS & BOSSE open schooling guidance
              </li>
              <li className="flex gap-2.5 my-3 text-[#45536a] text-[13px]">
                <b className="text-[#16836a]">✓</b> Academic coaching for school students
              </li>
              <li className="flex gap-2.5 my-3 text-[#45536a] text-[13px]">
                <b className="text-[#16836a]">✓</b> Career counselling and competitive exam guidance
              </li>
            </ul>
          </div>
        </div>

        {/* About Me - Founder Section */}
        <div className="bg-white border border-[#e3e8f0] rounded-[22px] p-8 shadow-[0_8px_25px_rgba(7,24,49,0.07)]">
          <div className="text-center max-w-[730px] mx-auto mb-8">
            <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">About Me</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Meet the Founder</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div className="flex flex-col items-center text-center">
              <div className="w-[180px] h-[180px] bg-gradient-to-br from-[#091831] to-[#132a4d] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-[#e8bd61] font-bold text-5xl">SV</span>
              </div>
              <h3 className="text-[20px] text-[#091831] font-bold">Saurabh Verma</h3>
              <p className="text-[#16836a] text-[13px] font-semibold mb-2">Founder & Chief Admission Counsellor</p>
              <p className="text-[#647189] text-[12px]">360 Education & Consultancy</p>
            </div>

            <div className="space-y-4">
              <p className="text-[#45536a] text-[14px] leading-relaxed">
                Saurabh Verma is the founder of 360 Education & Consultancy, dedicated to helping students in Saharanpur and surrounding areas make informed decisions about their education and career paths.
              </p>
              <p className="text-[#45536a] text-[14px] leading-relaxed">
                With a deep understanding of the education landscape, he provides personalised guidance for regular admissions, online and distance learning, open schooling (NIOS/BOSSE), and competitive exam preparation.
              </p>
              <p className="text-[#45536a] text-[14px] leading-relaxed">
                His approach focuses on understanding each student's unique needs, qualifications, and goals to recommend the most suitable educational pathways. Whether it's choosing the right course, university, or study mode, he ensures students and their families receive clear, honest guidance.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[13px] font-[850] border border-transparent bg-gradient-to-br from-[#f5d990] to-[#e8bd61] text-[#16213a] shadow-[0_9px_25px_rgba(214,169,65,0.19)] hover:-translate-y-[2px] transition-transform cursor-pointer"
                >
                  Connect with Saurabh ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
