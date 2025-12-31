import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ href, variant = 'primary', children, className = '', onClick }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200';

  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-green-500',
    outline: 'bg-transparent hover:bg-white/10 text-white border border-white',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
