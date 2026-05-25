import Link from 'next/link';
import { Globe, AtSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white px-8 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Section */}
        <div className="col-span-2">
          <h2 className="text-xl font-headline font-bold text-primary mb-4">Alexandria Library</h2>
          <p className="text-sm text-gray-500 max-w-sm font-body leading-relaxed">
            An institutional pillar for preservation and academic advancement since 1994.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-primary mb-4 font-body uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-500 font-body">
            <li><Link href="/books" className="hover:text-primary transition-colors">Catalog</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-bold text-primary mb-4 font-body uppercase tracking-wider">Legal</h3>
          <ul className="space-y-3 text-sm text-gray-500 font-body">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400 font-body">
        <p>© 2026 Alexandria Library Management System. All scholarly rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 text-gray-500 transition-colors"><AtSign size={16} /></button>
          <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 text-gray-500 transition-colors"><Globe size={16} /></button>
        </div>
      </div>
    </footer>
  );
}