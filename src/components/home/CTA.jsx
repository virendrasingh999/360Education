export default function CTA() {
  return (
    <section data-aos="fade-up" className="pb-[78px]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="rounded-[22px] p-6 sm:p-[38px_42px] bg-gradient-to-br from-[#08162f] to-[#17484e] flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left text-white">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-[1.12] m-0 mb-2">Ready to explore your admission options?</h2>
            <p className="m-0 text-[#d2deec] text-[13px]">Tell us your qualification and course interest. Start a conversation today.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[13px] font-[850] border border-transparent bg-gradient-to-br from-[#f5d990] to-[#e8bd61] text-[#16213a] shadow-[0_9px_25px_rgba(214,169,65,0.19)] hover:-translate-y-[2px] transition-transform cursor-pointer"
          >
            Send Your Enquiry ↗
          </a>
        </div>
      </div>
    </section>
  );
}
