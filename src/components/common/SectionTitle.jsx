export default function SectionTitle({ eyebrow, heading, description, align = 'center' }) {
  const alignmentClasses = align === 'left' ? 'text-left' : 'text-center';
  
  return (
    <div className={`mb-12 ${alignmentClasses}`}>
      {eyebrow && (
        <span className="inline-block text-[#E9B746] font-semibold text-sm tracking-wider uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1730] mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-[#52627A] text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
