'use client';

import { useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

const filterSelectStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '9px',
    backgroundColor: '#fff',
    fontSize: '13px',
    '& fieldset': { borderColor: '#dce3ed' },
    '&:hover fieldset': { borderColor: '#b58b34' },
    '&.Mui-focused fieldset': {
      borderColor: '#b58b34',
      boxShadow: '0 0 0 3px rgba(232,189,97,0.13)',
    },
  },
  '& .MuiSelect-select': { py: '11px', minHeight: 'unset' },
};

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
    { title: 'NIOS — Class 10 & 12', level: 'School / Open Board', mode: 'Open Schooling', description: 'Explore NIOS subjects, eligibility and open-schooling application guidance.' },
    { title: 'BOSSE — Class 10 & 12', level: 'School / Open Board', mode: 'Open Schooling', description: 'Explore BOSSE subjects, eligibility and open-schooling application guidance.' },
    { title: 'Computer Certificate Courses', level: 'Certificate', mode: 'Ask for Availability', description: 'Basic computer, CCC, MS Office, advanced Excel, Tally, DTP, graphic design, Python, Java, web design, data entry and digital marketing.' },
    { title: 'Computer Diploma Courses', level: 'Diploma', mode: 'Ask for Availability', description: 'DCA, ADCA, software and app development, web development, hardware and networking, cybersecurity, data analytics, AI, machine learning and cloud computing.' },
    { title: 'Yoga Certificate Course', level: 'Certificate', mode: 'Ask for Availability', description: 'Explore certificate-level yoga and wellness study options.' },
    { title: 'Yoga Diploma Course', level: 'Diploma', mode: 'Ask for Availability', description: 'Explore diploma-level yoga and wellness study options.' },
    { title: 'Yoga Postgraduate Diploma', level: 'Postgraduate Diploma', mode: 'Ask for Availability', description: 'Explore postgraduate diploma options in yoga, subject to eligibility.' },
    { title: 'Fire Safety Certificate', level: 'Certificate', mode: 'Ask for Availability', description: 'Explore certificate courses in fire safety and related safety practices.' },
    { title: 'Health & Nutrition Certificate', level: 'Certificate', mode: 'Ask for Availability', description: 'Explore certificate courses in health, nutrition and wellness.' },
    { title: 'Beauty & Beautification Certificate', level: 'Certificate', mode: 'Ask for Availability', description: 'Explore certificate courses in beauty, beautification and personal care.' },
    { title: 'Beauty & Beautification Diploma', level: 'Diploma', mode: 'Ask for Availability', description: 'Explore diploma courses in beauty, beautification and personal care.' },
    { title: 'Competitive Exam Guidance', level: 'Professional', mode: 'Regular', description: 'Explore guidance for SSC, banking, railways, civil services and defence.' },
    { title: 'Online & Distance Degrees', level: 'Undergraduate', mode: 'Online / Distance', description: 'Compare flexible study modes and programme options.' },
  ];

  const filteredCourses = courses.filter(course => {
    const searchContent = `${course.title} ${course.description}`.toLowerCase();
    const matchesSearch = searchContent.includes(searchTerm.toLowerCase());
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
    <section id="courses" data-aos="fade-up" className="py-12 sm:py-[78px] bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
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
            <FormControl fullWidth size="small" sx={filterSelectStyles}>
              <Select
                value={levelFilter}
                onChange={(event) => setLevelFilter(event.target.value)}
                displayEmpty
                renderValue={(value) => value || 'All levels'}
                inputProps={{ 'aria-label': 'Filter by level' }}
              >
                <MenuItem value="">All levels</MenuItem>
                <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                <MenuItem value="Certificate">Certificate</MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
                <MenuItem value="Postgraduate Diploma">Postgraduate Diploma</MenuItem>
                <MenuItem value="Professional">Professional</MenuItem>
                <MenuItem value="School / Open Board">School / Open Board</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={filterSelectStyles}>
              <Select
                value={modeFilter}
                onChange={(event) => setModeFilter(event.target.value)}
                displayEmpty
                renderValue={(value) => value || 'All study modes'}
                inputProps={{ 'aria-label': 'Filter by mode' }}
              >
                <MenuItem value="">All study modes</MenuItem>
                <MenuItem value="Regular">Regular</MenuItem>
                <MenuItem value="Online / Distance">Online / Distance</MenuItem>
                <MenuItem value="Open Schooling">Open Schooling</MenuItem>
                <MenuItem value="Ask for Availability">Ask for Availability</MenuItem>
              </Select>
            </FormControl>
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
