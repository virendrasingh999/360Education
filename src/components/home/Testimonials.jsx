export default function Testimonials() {
  return (
    <section data-aos="fade-up" className="py-12 sm:py-[78px] bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">Student experiences</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Trust grows through genuine guidance</h2>
          <p className="text-[#647189]">We value every student's journey and encourage honest feedback.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="bg-white border border-[#e3e8f0] rounded-[16px] p-6">
            <div className="text-[#c18c22] tracking-[2px] mb-3">★★★★★</div>
            <p className="text-[#536078] text-[13px] mb-3">"Add a genuine student review here after receiving permission to publish it."</p>
            <strong className="text-[#091831] text-[12px]">Student testimonial placeholder</strong>
            <small className="block text-[#8993a4] text-[10px]">Replace with a real, approved review</small>
          </article>

          <article className="bg-white border border-[#e3e8f0] rounded-[16px] p-6">
            <div className="text-[#c18c22] tracking-[2px] mb-3">★★★★★</div>
            <p className="text-[#536078] text-[13px] mb-3">"Share what the student found useful about the counselling or admission guidance."</p>
            <strong className="text-[#091831] text-[12px]">Student testimonial placeholder</strong>
            <small className="block text-[#8993a4] text-[10px]">Replace with a real, approved review</small>
          </article>

          <article className="bg-white border border-[#e3e8f0] rounded-[16px] p-6">
            <div className="text-[#c18c22] tracking-[2px] mb-3">★★★★★</div>
            <p className="text-[#536078] text-[13px] mb-3">"Use authentic feedback only; do not publish invented names or experiences."</p>
            <strong className="text-[#091831] text-[12px]">Student testimonial placeholder</strong>
            <small className="block text-[#8993a4] text-[10px]">Replace with a real, approved review</small>
          </article>
        </div>

        <p className="text-[11px] text-[#78849a] text-center mt-4">
          These are placeholders, not actual customer reviews. Replace them with genuine testimonials only after obtaining permission.
        </p>
      </div>
    </section>
  );
}
