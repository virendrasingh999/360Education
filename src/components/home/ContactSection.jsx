'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id="contact" data-aos="fade-up" className="py-12 sm:py-[78px] bg-[#f5f7fb]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">Contact 360</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Let&apos;s discuss your next step</h2>
          <p className="text-[#647189]">Fill in a few details and send your enquiry directly to our team.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-5">
          {/* Left Column - Contact Info */}
          <div className="min-w-0 bg-[#091831] text-white rounded-[19px] p-5 sm:p-7">
            <h3 className="text-[22px] m-0 mb-2">360 Education & Consultancy</h3>
            <p className="text-[#d0dbea] text-[13px] mb-5">करियर की शुरुआत करो 360 के साथ.</p>
            
            <div className="py-3 border-b border-[#ffffff20] text-[13px]">
              <small className="block text-[#aebed3] text-[10px] uppercase tracking-[1px] mb-1">Call / WhatsApp</small>
              <a href="tel:+919536385100" className="hover:text-[#e8bd61]">+91 9536385100</a>
            </div>
            
            <div className="py-3 border-b border-[#ffffff20] text-[13px] break-words">
              <small className="block text-[#aebed3] text-[10px] uppercase tracking-[1px] mb-1">Email</small>
              <a href="mailto:360education.consultancy@gmail.com" className="hover:text-[#e8bd61]">360education.consultancy@gmail.com</a>
            </div>
            
            <div className="py-3 border-b border-[#ffffff20] text-[13px]">
              <small className="block text-[#aebed3] text-[10px] uppercase tracking-[1px] mb-1">Office address</small>
              Lane-5, Himmat Nagar,<br />
              Star Paper Mill Road, Saharanpur
            </div>
            
            <div className="py-3 border-b border-[#ffffff20] text-[13px]">
              <small className="block text-[#aebed3] text-[10px] uppercase tracking-[1px] mb-1">Instagram</small>
              <a href="https://www.instagram.com/360education_consultancy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8bd61]">@360education_consultancy ↗</a>
            </div>
            
            <div className="py-3 text-[13px]">
              <small className="block text-[#aebed3] text-[10px] uppercase tracking-[1px] mb-1">Founder</small>
              Saurabh Verma<br />
              <span className="text-[#cbd6e8]">Founder & Chief Admission Counsellor</span>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <form onSubmit={handleSubmit} className="min-w-0 bg-white border border-[#e3e8f0] rounded-[19px] p-5 sm:p-7 shadow-[0_8px_25px_rgba(7,24,49,0.07)]">
            <h3 className="text-[21px] text-[#091831] m-0 mb-1">Admission & Career Enquiry</h3>
            <p className="text-[#647189] text-[12px] mb-5">Fields marked * are required.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-[#43516a] font-[800]">Full name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  placeholder="Your name"
                  required
                />
                {errors.fullName && <p className="text-red-500 text-[11px]">{errors.fullName}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-[#43516a] font-[800]">Mobile number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  placeholder="Your contact number"
                  required
                />
                {errors.phone && <p className="text-red-500 text-[11px]">{errors.phone}</p>}
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[11px] text-[#43516a] font-[800]">Email address (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-[#43516a] font-[800]">Service required *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  required
                >
                  <option value="">Choose a service</option>
                  <option>Regular Education Admission</option>
                  <option>Online / Distance Education</option>
                  <option>NIOS / BOSSE Open Schooling</option>
                  <option>Career Counselling</option>
                  <option>Academic Coaching</option>
                  <option>Competitive Exam Guidance</option>
                  <option>Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-[11px]">{errors.service}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-[#43516a] font-[800]">Last qualification *</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  required
                >
                  <option value="">Select qualification</option>
                  <option>Class 8 or below</option>
                  <option>Class 10</option>
                  <option>Class 12</option>
                  <option>Diploma</option>
                  <option>Graduate</option>
                  <option>Postgraduate</option>
                  <option>Other</option>
                </select>
                {errors.qualification && <p className="text-red-500 text-[11px]">{errors.qualification}</p>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-[#43516a] font-[800]">Course / class of interest</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  placeholder="e.g. BBA, MBA, Class 12"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] text-[#43516a] font-[800]">Preferred study mode</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                >
                  <option value="">No preference</option>
                  <option>Regular / campus</option>
                  <option>Online</option>
                  <option>Distance</option>
                  <option>Open schooling</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[11px] text-[#43516a] font-[800]">Preferred university / institution (optional)</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)]"
                  placeholder="If you have one in mind"
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-[11px] text-[#43516a] font-[800]">Additional question (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-[#dce3ed] bg-white rounded-[9px] px-3 py-3 text-[13px] outline-none focus:border-[#b58b34] focus:shadow-[0_0_0_3px_rgba(232,189,97,0.13)] resize-y min-h-[78px]"
                  placeholder="Tell us what you would like guidance with"
                />
              </div>

              <div className="flex gap-2 items-start text-[11px] text-[#69768c] md:col-span-2">
                <input type="checkbox" className="mt-1" required />
                <span>I agree to share the details I entered with 360 Education & Consultancy for responding to this enquiry. I have read the <a href="#privacy" className="text-[#091831] underline">privacy notice</a>.</span>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-[#f5d990] to-[#e8bd61] text-[#16213a] py-3 px-6 rounded-[10px] text-[13px] font-[850] hover:-translate-y-[2px] transition-transform shadow-[0_9px_25px_rgba(214,169,65,0.19)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending enquiry…' : 'Send Enquiry ↗'}
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
