'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { ArrowRight, Compass, GraduationCap, Globe2, Headset, Plane, ShieldCheck } from 'lucide-react';

const selectStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: '#fff',
    fontSize: '12px',
    color: '#334155',
    '& fieldset': { borderColor: '#d6e2f0' },
    '&:hover fieldset': { borderColor: '#94a3b8' },
    '&.Mui-focused fieldset': {
      borderColor: '#087bff',
      boxShadow: '0 0 0 3px rgba(8,123,255,0.12)',
    },
  },
  '& .MuiSelect-select': { py: '8px', minHeight: 'unset' },
  '& .MuiFormHelperText-root': { marginLeft: 0 },
};

const inputClassName = 'w-full border border-[#d6e2f0] bg-white rounded-[10px] px-3 py-[10px] text-[12px] text-[#334155] outline-none transition placeholder:text-[#9aa9bb] focus:border-[#087bff] focus:shadow-[0_0_0_3px_rgba(8,123,255,0.12)]';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    qualification: '',
    course: '',
    mode: '',
    university: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Service required is required';
    }

    if (!formData.qualification) {
      newErrors.qualification = 'Last qualification is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionStatus('Email enquiry is not configured yet. Please contact us by phone or email.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          reply_to: formData.email || '',
          phone: formData.phone,
          service: formData.service,
          qualification: formData.qualification,
          course: formData.course || 'Not specified',
          mode: formData.mode || 'No preference',
          university: formData.university || 'Not specified',
          message: formData.message || 'Not specified',
        },
        { publicKey },
      );

      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        qualification: '',
        course: '',
        mode: '',
        university: '',
        message: '',
      });
      setSubmissionStatus('Thanks! Your enquiry has been sent. We will get back to you soon.');
    } catch (error) {
      console.error('EmailJS enquiry submission failed:', error);
      setSubmissionStatus('We could not send your enquiry. Please try again or contact us by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmissionStatus('');
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" data-aos="fade-up" className="overflow-hidden bg-gray-50 py-10 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-3 sm:px-5 lg:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#dce7f4] bg-white shadow-[0_20px_60px_rgba(8,38,79,0.14)] md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <aside
            className="relative isolate flex min-h-[470px] flex-col justify-between overflow-hidden bg-cover p-6 text-white sm:p-8 md:min-h-full md:p-9"
            style={{
              backgroundImage: 'linear-gradient(180deg, rgba(8,38,79,0.38), rgba(5,24,52,0.62)), url("/London%20Sunset%20Over%20the%20Thames.jpg"), linear-gradient(145deg, #0b3970, #08264f 60%, #061b39)',
              backgroundPosition: '62% center',
            }}
          >
            <div aria-hidden="true" className="absolute -right-20 top-28 -z-10 h-64 w-64 rounded-full border border-white/20 shadow-[0_0_0_25px_rgba(255,255,255,0.04),0_0_0_55px_rgba(255,255,255,0.025)]" />
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[#8ed8ff]">
                  <GraduationCap aria-hidden="true" className="h-7 w-7" />
                </div>
                <h2 className="text-[15px] font-bold leading-tight">360 Education & Consultancy</h2>
              </div>
              <p className="mb-3 text-[10px] font-semibold tracking-[1.6px] text-[#9bdcff]">STUDY <span className="mx-1 text-white/70">|</span> WORK <span className="mx-1 text-white/70">|</span> BUILD YOUR FUTURE</p>
              <h3 className="mb-3 max-w-[350px] text-[28px] font-bold leading-[1.14] sm:text-[32px]">
                Your Global Education & Career Partner
              </h3>
              <p className="max-w-[360px] text-[13px] leading-relaxed text-[#e0ebf9]">
                Helping you study abroad, build your career and achieve your dreams.
              </p>
              <ul className="mt-8 grid gap-4 text-[12px] text-blue-50">
                <li className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#087bff]"><Globe2 aria-hidden="true" className="h-4 w-4" /></span>
                  <span><strong className="block font-semibold text-white">Top Universities</strong><span className="text-blue-100/80">Get into world&apos;s best institutions</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#087bff]"><Compass aria-hidden="true" className="h-4 w-4" /></span>
                  <span><strong className="block font-semibold text-white">Expert Counselling</strong><span className="text-blue-100/80">Personalized guidance at every step</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#087bff]"><ShieldCheck aria-hidden="true" className="h-4 w-4" /></span>
                  <span><strong className="block font-semibold text-white">100% Genuine Guidance</strong><span className="text-blue-100/80">Trusted &amp; transparent process</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#087bff]"><Headset aria-hidden="true" className="h-4 w-4" /></span>
                  <span><strong className="block font-semibold text-white">End-to-End Support</strong><span className="text-blue-100/80">From application to arrival</span></span>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-[14px] font-semibold italic tracking-wide text-[#d5e9ff]">
              Dream <span className="text-[#63c4ff]">·</span> Apply <span className="text-[#63c4ff]">·</span> Achieve
            </p>
          </aside>

          <form onSubmit={handleSubmit} className="min-w-0 bg-white p-5 sm:p-7 lg:p-8">
            <div className="mb-5">
              <p className="text-[10px] uppercase font-bold tracking-[1.6px] text-[#1769e0] mb-1">Start your journey</p>
              <h3 className="text-[20px] text-[#0b1730] font-bold leading-tight">Admission & Career Enquiry</h3>
              <p className="text-[#647189] text-[11px] mt-1">Fill in the details below and we&apos;ll get back to you soon.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[10px] text-[#43516a] font-semibold">Full name *</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your name"
                  required
                />
                {errors.fullName && <p className="text-red-500 text-[11px]">{errors.fullName}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[10px] text-[#43516a] font-semibold">Mobile number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your contact number"
                  required
                />
                {errors.phone && <p className="text-red-500 text-[11px]">{errors.phone}</p>}
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="email" className="text-[10px] text-[#43516a] font-semibold">Email address (optional)</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label id="service-label" className="text-[10px] text-[#43516a] font-semibold">Service required *</label>
                <FormControl fullWidth size="small" required error={Boolean(errors.service)} sx={selectStyles}>
                  <Select
                    id="service"
                    labelId="service-label"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(value) => value || 'Choose a service'}
                    inputProps={{ 'aria-labelledby': 'service-label' }}
                  >
                    <MenuItem value="Regular Education Admission">Regular Education Admission</MenuItem>
                    <MenuItem value="Online / Distance Education">Online / Distance Education</MenuItem>
                    <MenuItem value="NIOS / BOSSE Open Schooling">NIOS / BOSSE Open Schooling</MenuItem>
                    <MenuItem value="Career Guidance & Counselling">Career Guidance & Counselling</MenuItem>
                    <MenuItem value="Online Academic Coaching">Online Academic Coaching</MenuItem>
                    <MenuItem value="Competitive Exam Guidance">Competitive Exam Guidance</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {errors.service && <FormHelperText>{errors.service}</FormHelperText>}
                </FormControl>
              </div>

              <div className="flex flex-col gap-1.5">
                <label id="qualification-label" className="text-[10px] text-[#43516a] font-semibold">Last qualification *</label>
                <FormControl fullWidth size="small" required error={Boolean(errors.qualification)} sx={selectStyles}>
                  <Select
                    id="qualification"
                    labelId="qualification-label"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(value) => value || 'Select qualification'}
                    inputProps={{ 'aria-labelledby': 'qualification-label' }}
                  >
                    <MenuItem value="Class 8 or below">Class 8 or below</MenuItem>
                    <MenuItem value="Class 10">Class 10</MenuItem>
                    <MenuItem value="Class 12">Class 12</MenuItem>
                    <MenuItem value="Diploma">Diploma</MenuItem>
                    <MenuItem value="Graduate">Graduate</MenuItem>
                    <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {errors.qualification && <FormHelperText>{errors.qualification}</FormHelperText>}
                </FormControl>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="course" className="text-[10px] text-[#43516a] font-semibold">Course / class of interest</label>
                <input
                  type="text"
                  name="course"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="e.g. BBA, MBA, Class 12"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label id="mode-label" className="text-[10px] text-[#43516a] font-semibold">Preferred study mode</label>
                <FormControl fullWidth size="small" sx={selectStyles}>
                  <Select
                    id="mode"
                    labelId="mode-label"
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(value) => value || 'No preference'}
                    inputProps={{ 'aria-labelledby': 'mode-label' }}
                  >
                    <MenuItem value="Regular / campus">Regular / campus</MenuItem>
                    <MenuItem value="Online">Online</MenuItem>
                    <MenuItem value="Distance">Distance</MenuItem>
                    <MenuItem value="Open schooling">Open schooling</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="university" className="text-[10px] text-[#43516a] font-semibold">Preferred university / institution (optional)</label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  value={formData.university}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="If you have one in mind"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-[10px] text-[#43516a] font-semibold">Additional question (optional)</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  className={`${inputClassName} resize-y min-h-[58px]`}
                  placeholder="Tell us what you would like guidance with"
                />
              </div>

              <div className="flex gap-2 items-start text-[10px] text-[#69768c] sm:col-span-2">
                <input type="checkbox" className="mt-1" required />
                <span>I agree to share the details I entered with 360 Education & Consultancy for responding to this enquiry. I have read the <a href="#privacy" className="text-[#091831] underline">privacy notice</a>.</span>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#1769e0] hover:bg-[#0d57c4] text-white py-2.5 px-6 rounded-[8px] text-[12px] font-bold transition-colors shadow-[0_7px_18px_rgba(23,105,224,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Plane aria-hidden="true" className="h-3.5 w-3.5" />
                  {isSubmitting ? 'Sending enquiry…' : 'Send Enquiry'}
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {submissionStatus && (
              <p role="status" className={`mt-3 text-[12px] ${submissionStatus.startsWith('Thanks!') ? 'text-green-700' : 'text-red-600'}`}>
                {submissionStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
