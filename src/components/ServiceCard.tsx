import Link from 'next/link';

interface ServiceCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ href, icon, title, description }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white hover:bg-primary-600 border border-neutral-200 hover:border-primary-600 rounded-xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-700 rounded-lg flex items-center justify-center mb-6 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-white mb-3 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 group-hover:text-primary-50 leading-relaxed mb-6 transition-colors">
        {description}
      </p>
      <div className="flex items-center gap-2 text-primary-600 group-hover:text-white font-medium transition-colors">
        <span>Learn more</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  );
}
