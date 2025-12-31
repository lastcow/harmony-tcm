import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L18 8v8l-6 3-6-3V8l6-3.5z"/>
                <path d="M12 6c-1.5 0-3 1-3 3s1.5 3 3 3 3-1 3-3-1.5-3-3-3z"/>
              </svg>
              <span className="font-bold text-xl text-white">Harmony TCM</span>
            </Link>
            <p className="text-sm text-gray-400">
              Integrative healing for the modern world. Rooted in tradition, proven by experience.
            </p>
          </div>

          {/* Practice */}
          <div>
            <h4 className="font-semibold text-white mb-4">Practice</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Dr. Lau</Link></li>
              <li><Link href="/about#philosophy" className="hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#acupuncture" className="hover:text-white transition-colors">Acupuncture</Link></li>
              <li><Link href="/services#herbal" className="hover:text-white transition-colors">Herbal Medicine</Link></li>
              <li><Link href="/services#alexander" className="hover:text-white transition-colors">Alexander Technique</Link></li>
              <li><Link href="/services#sound" className="hover:text-white transition-colors">Sound Therapy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Visit Us</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Wellness Way, Suite 400</li>
              <li>San Francisco, CA 94110</li>
              <li className="pt-2">(555) 123-4567</li>
              <li><a href="mailto:hello@harmonytcm.com" className="hover:text-white transition-colors">hello@harmonytcm.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Harmony TCM & Acupuncture. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
