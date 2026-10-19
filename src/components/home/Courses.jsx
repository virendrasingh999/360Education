'use client';

import { useState } from 'react';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');

  const courses = [
    { title: 'BA — Bachelor of Arts', level: 'Undergraduate', mode: 'Regular', description: 'Explore arts and humanities degree options.' },
    { title: 'B.Com — Bachelor of Commerce', level: 'Undergraduate', mode: 'Regular', description: 'Explore commerce and business-related study options.' },
    { title: 'BBA — Business Administration', level: 'Undergraduate', mode: 'Regular', description: 'For learners interested in management and business.' },
    { title: 'BCA — Computer Applications', level: 'Undergraduate', mode: 'Regular', description: 'Explore undergraduate computing programmes.' },
    { title: 'B.Sc — Bachelor of Science', level: 'Undergraduate', mode: 'Regular', description: 'Explore science-stream degree options.' },
    { title: 'MBA — Business Administration', level: 'Postgraduate', mode: 'Online / Distance', description: 'Compare available management programmes and modes.' },
    { title: 'MA — Master of Arts', level: 'Postgraduate', mode: 'Online / Distance', description: 'Explore postgraduate arts and humanities programmes.' },
    { title: 'M.Com — Master of Commerce', level: 'Postgraduate', mode: 'Online / Distance', description: 'Explore advanced commerce qualifications.' },
    { title: 'MCA — Computer Applications', level: 'Postgraduate', mode: 'Online / Distance', description: 'Compare postgraduate computing programmes.' },
    { title: 'B.Ed — Bachelor of Education', level: 'Professional', mode: 'Regular', description: 'Ask about teacher education options and eligibility.' },
    { title: 'D.El.Ed / BTC', level: 'Professional', mode: 'Regular', description: 'Explore teacher education pathways and current rules.' },
    { title: 'LLB — Law', level: 'Professional', mode: 'Regular', description: 'Explore law programmes and institution-specific eligibility.' },
    { title: 'GNM & Paramedical', level: 'Professional', mode: 'Regular', description: 'Ask about programme availability and admission criteria.' },
    { title: 'Class 10 & 12 — Open Schooling', level: 'School / Open Board', mode: 'Open Schooling', description: 'Get information on NIOS/BOSSE options, subjects and eligibility.' },
    { title: 'Competitive Exam Guidance', level: 'Professional', mode: 'Regular', description: 'Explore guidance for SSC, banking, railways, civil services and defence.' },
    { title: 'Online & Distance Degrees', level: 'Undergraduate', mode: 'Online / Distance', description: 'Compare flexible study modes and programme options.' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === '' || course.level === levelFilter;
    const matchesMode = modeFilter === '' || course.mode === modeFilter;
    return matchesSearch && matchesLevel && matchesMode;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setLevelFilter('');
    setModeFilter('');
  };

  return (
    <section id="courses" data-aos="fade-up" className="py-12 sm:py-[78px] bg-white">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">Course finder</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Find a course to explore</h2>
          <p className="text-[#647189]">Search by programme, level or study mode, then send an enquiry for personalised guidance.</p>
        </div>

        <div className="border border-[#e3e8f0] rounded-[22px] overflow-hidden shadow-[0_18px_48px_rgba(7,24,49,0.07)]">
          <div className="p-5 sm:p-7 bg-gradient-to-br from-[#091831] to-[#193858] text-white flex flex-col sm:flex-row sm:justify-between gap-4 items-start sm:items-center">
            <div>
              <h3 className="text-[22px] m-0">Explore course options</h3>
              <p className="mt-1 text-[#d1dbea] text-[13px]">Choose an area of interest to get started.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[13px] font-[850] border border-transparent bg-gradient-to-br from-[#f5d990] to-[#e8bd61] text-[#16213a] shadow-[0_9px_25px_rgba(214,169,65,0.19)] hover:-translate-y-[2px] transition-transform cursor-pointer"
            >
              Ask a Counsellor ↗
            </a>
          </div>

          <div className="p-4 sm:p-6 bg-[#fbfcfe] border-b border-[#e3e8f0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] gap-3">
            <input
              type="search"
              placeholder="Search courses (e.g. BBA, B.Ed)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-4 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
              aria-label="Search courses"
            />
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-4 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
              aria-label="Filter by level"
            >
              <option value="">All levels</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>Professional</option>
              <option>School / Open Board</option>
            </select>
            <select
              value={modeFilter}
              onChange={(e) => setModeFilter(e.target.value)}
              className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-4 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
              aria-label="Filter by mode"
            >
              <option value="">All study modes</option>
              <option>Regular</option>
              <option>Online / Distance</option>
              <option>Open Schooling</option>
            </select>
            <button
              onClick={resetFilters}
              type="button"
              className="px-5 py-3 rounded-[10px] text-[13px] font-[850] bg-[#091831] text-white hover:bg-[#132a4d] transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>

          <div className="p-4 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredCourses.map((course, index) => (
                <div key={index} className="border border-[#e3e8f0] rounded-[13px] p-4">
                  <span className="inline-block text-[10px] font-[850] tracking-[0.4px] uppercase bg-[#f8efd9] text-[#78540e] rounded-[20px] px-2 py-1">
                    {course.level}
                  </span>
                  <h4 className="mt-3 mb-1.5 text-[#091831] text-[15px]">{course.title}</h4>
                  <p className="mb-3 text-[#647189] text-[12px]">{course.description}</p>
                  <a href="#contact" className="text-[#8b6418] text-[12px] font-[900] p-0 cursor-pointer hover:underline">
                    Enquire about {course.title.split('—')[0].trim()} ↗
                  </a>
                </div>
              ))}
            </div>
            {filteredCourses.length === 0 && (
              <div className="p-5 text-center text-[#647189]">
                No matching courses found. Try another search or contact us for help.
              </div>
            )}
          </div>
        </div>

        <p className="text-[11px] text-[#7a8597] text-center mt-4">
          Course availability, fees, duration, recognition and eligibility vary by institution and intake. Please verify current details before applying.
        </p>
      </div>
    </section>
  );
}
