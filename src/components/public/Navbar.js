import Link from 'next/link';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 shadow-sm">
      {/* Logo using Playfair Display font */}
      <div className="text-2xl font-headline font-bold text-primary">
        <Link href="/">Alexandria Library</Link>
      </div>

      {/* Navigation Links using Inter font */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 font-body">
        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
        <li><Link href="/books" className="hover:text-primary transition-colors">Catalog</Link></li>
        <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
      </ul>

      {/* Admin Button using our reusable component */}
      <div>
        <Link href="/admin">
          <Button variant="primary">Admin Portal</Button>
        </Link>
      </div>
    </nav>
  );
}