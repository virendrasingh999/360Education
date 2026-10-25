export default function FAQ() {
  const faqs = [
    {
      question: 'Do you provide regular college and university admission guidance?',
      answer: 'Yes. We help students explore regular UG, PG and professional course options, understand institution-specific eligibility and prepare for application steps. Admission decisions are made by the institution.',
    },
    {
      question: 'Can you help me compare online and distance education?',
      answer: 'We can help you explore programme options and study modes. Always confirm the programme\'s current approval, recognition, eligibility and fees with the institution before enrolling.',
    },
    {
      question: 'Do you provide NIOS and BOSSE guidance for Class 10 and 12?',
      answer: 'We provide information and process guidance for open-schooling options. Eligibility, subject combinations, transfer of credit and examination rules depend on the relevant board and current rules.',
    },
    {
      question: 'What details should I share for an admission enquiry?',
      answer: 'Your name, contact number, last qualification, course of interest and preferred study mode help us understand what guidance you need. Please do not send sensitive identity documents in an initial enquiry.',
    },
    {
      question: 'Are fees and admission dates fixed on this website?',
      answer: 'No. Fees, deadlines, duration and eligibility may change by institution, programme and intake. Contact us for guidance and verify final details from official sources.',
    },
    {
      question: 'Does sending this form confirm my admission?',
      answer: 'No. The form opens WhatsApp with a draft message. You review and send it yourself. An enquiry is not an admission offer or confirmation.',
    },
  ];

  return (
    <section id="faq" data-aos="fade-up" className="py-12 sm:py-[78px]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="text-center max-w-[730px] mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[1.8px] text-[#16836a] font-[900]">FAQs</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#091831] tracking-[-1px] leading-[1.12] mt-2.5 mb-3">Questions students often ask</h2>
          <p className="text-[#647189]">Need a specific answer? Send us an enquiry and tell us your qualification and course interest.</p>
        </div>

        <div className="max-w-[850px] mx-auto grid gap-2.5">
          {faqs.map((faq, index) => (
            <details key={index} className="border border-[#e3e8f0] rounded-[12px] p-4 bg-white group">
              <summary className="font-[800] text-[#091831] text-[14px] cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="text-[#e8bd61] text-xl transition-transform group-open:rotate-180">+</span>
              </summary>
              <p className="text-[#647189] text-[13px] mt-3">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
