export default function Pathways() {
  return (
    <section data-aos="fade-up" className="py-12 sm:py-[78px] bg-[#f6f8fc]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">Learning options</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Different routes. One place to start.</h2>
          <p className="text-[#647189]">We help you explore the route that best matches your circumstances and goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-8 rounded-[20px] text-white bg-gradient-to-br from-[#0a1832] to-[#1c385e]">
            <h3 className="text-[23px] m-0 mb-2">Regular Education</h3>
            <p className="text-[#d5e0ed] text-[13px] mb-4 mt-0">For learners exploring campus-based school, college, university and professional courses.</p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">UG & PG</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Arts</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Commerce</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Science</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Management</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Law</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Teacher Education</span>
            </div>
          </div>

          <div className="p-8 rounded-[20px] text-white bg-gradient-to-br from-[#0a5148] to-[#18836b]">
            <h3 className="text-[23px] m-0 mb-2">Flexible & Open Learning</h3>
            <p className="text-[#d5e0ed] text-[13px] mb-4 mt-0">For learners exploring online, distance or open-schooling routes, subject to eligibility and programme approval.</p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Online Degrees</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Distance Education</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">NIOS</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">BOSSE</span>
              <span className="border border-[#ffffff4a] bg-[#ffffff0b] rounded-[30px] px-3 py-1.5 text-[11px] text-white">Class 10 & 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
