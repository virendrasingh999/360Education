import Link from 'next/link';

export default function Button({ children, variant = 'primary', href, className = '', onClick, type = 'button', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#E9B746] text-[#0B1730] hover:bg-[#D4A63A] focus:ring-[#E9B746]',
    secondary: 'border-2 border-[#E9B746] text-[#E9B746] hover:bg-[#E9B746] hover:text-[#0B1730] focus:ring-[#E9B746]',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link href={href} className={buttonStyles} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={buttonStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
