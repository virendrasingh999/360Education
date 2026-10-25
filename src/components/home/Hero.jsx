import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" data-aos="fade-up" className="relative overflow-hidden text-white bg-[radial-gradient(ellipse_at_83%_22%,#31577b_0,transparent_31%),radial-gradient(ellipse_at_90%_100%,#15554f_0,transparent_35%),linear-gradient(120deg,#07142c,#12284a_64%,#102f3e)] py-12 sm:py-[76px]">
      <div className="absolute right-[-170px] bottom-[-310px] w-[600px] h-[600px] border border-[#ffffff17] rounded-full shadow-[0_0_0_55px_#ffffff05,0_0_0_110px_#ffffff04]"></div>

      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.4px] text-[#f5d990]">
              Admissions <span className="mx-2 text-white/60">•</span> Career Guidance <span className="mx-2 text-white/60">•</span> Learning
            </div>
            <h1 className="my-[18px] max-w-[700px] text-balance text-center font-serif text-[clamp(38px,5.5vw,64px)] font-bold tracking-[-1.5px] leading-[1.04] lg:text-left">
              Your 360° Guide to
              <span className="block text-[#f5d990]">A Brighter Future.</span>
            </h1>
            <p className="max-w-[610px] mx-auto lg:mx-0 text-center lg:text-left text-[#d7e0ed] text-[16px] mb-6">
              Personalised admission and career guidance to help you choose the right course, institution and learning path.
            </p>
            <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[13px] font-[850] border border-transparent bg-gradient-to-br from-[#f5d990] to-[#e8bd61] text-[#16213a] shadow-[0_9px_25px_rgba(214,169,65,0.19)] hover:-translate-y-[2px] transition-transform cursor-pointer"
              >
                Start Your Admission Enquiry ↗
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[13px] font-[850] border border-[#ffffff70] text-white bg-[#ffffff08] hover:bg-[#ffffff15] transition-colors cursor-pointer"
              >
                Find Your Course
              </a>
            </div>
            <div className="text-center lg:text-left text-[12px] text-[#b9c8dd] mt-[22px]">
              Clear guidance · Course options · Support with next steps
            </div>
          </div>

          <div className="min-h-[320px] sm:min-h-[400px] grid place-items-center relative">
            <div className="w-[min(390px,85%)] aspect-square border border-[#ffffff2a] rounded-full grid place-items-center bg-[radial-gradient(circle,#ffffff15,transparent_68%)] relative">
              <div className="absolute inset-[28px] border border-[#ffffff20] rounded-full"></div>
              <div className="absolute inset-[60px] border border-[#ffffff20] rounded-full"></div>

              <div className="relative z-2 bg-white w-[min(56vw,215px)] h-[min(56vw,215px)] rounded-[32px] p-3 grid place-items-center shadow-[0_25px_60px_rgba(0,0,0,0.33)] rotate-[-3deg]">
                <Image src="/logo.jpeg" alt="360 Education & Consultancy Logo" width={1600} height={1600} sizes="(max-width: 640px) 56vw, 215px" className="w-full h-full object-contain rounded-[24px]" />
              </div>

              <div className="absolute z-3 bg-white text-[#091831] rounded-[13px] px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.2)] text-[12px] font-[850] top-8 right-4">
                <span>500+ Students</span>
                <span className="block text-[#667685] font-normal text-[10px]">Guided Successfully</span>
              </div>

              <div className="absolute z-3 bg-white text-[#091831] rounded-[13px] px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.2)] text-[12px] font-[850] top-[95px] right-[-20px]">
                <span>Expert</span>
                <span className="block text-[#667685] font-normal text-[10px]">Career Counsellors</span>
              </div>

              <div className="absolute z-3 bg-white text-[#091831] rounded-[13px] px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.2)] text-[12px] font-[850] bottom-5 left-8">
                <span>100%</span>
                <span className="block text-[#667685] font-normal text-[10px]">Personalised</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
