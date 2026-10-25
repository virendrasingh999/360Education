import { openSchoolBoards, universities } from '@/data/institutions';

export default function Universities() {
  return (
    <section id="universities" data-aos="fade-up" className="py-12 sm:py-[78px] bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">University directory</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Explore institution options</h2>
          <p className="text-[#647189]">Explore 25 university options and ask us to compare programme availability, study mode and current admission requirements.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {universities.map((institution) => (
            <div
              key={institution.name}
              className="border border-[#e3e8f0] rounded-[14px] p-5 min-h-[102px] flex flex-col justify-center items-center text-center bg-white"
            >
              <small className="text-[#16836a] uppercase tracking-[1px] text-[9px] font-[900]">{institution.category}</small>
              <strong className="text-[13px] text-[#33425a] mt-1">{institution.name}</strong>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm font-semibold text-[#33425a]">Open schooling:</span>
          {openSchoolBoards.map((board) => (
            <span key={board.name} className="border border-[#e3e8f0] rounded-full px-4 py-2 text-sm text-[#33425a]">
              {board.name}
            </span>
          ))}
        </div>

        <p className="text-[11px] text-[#7a8597] text-center mt-4">
          Names are provided for information and counselling, not as a guarantee of partnership or admission. Verify official recognition, programme approvals, fees and current admission dates directly with the institution.
        </p>
      </div>
    </section>
  );
}
