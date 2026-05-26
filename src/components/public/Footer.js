import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                
                {/* Book SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-blue-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5A4.5 4.5 0 003 9.5v9A2.5 2.5 0 015.5 16H12m0-9.747C13.168 5.477 14.754 5 16.5 5A4.5 4.5 0 0121 9.5v9a2.5 2.5 0 00-2.5-2.5H12"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-950">
                  Alexandria Library
                </h2>
                <p className="text-sm text-gray-400">
                  Digital Knowledge Hub
                </p>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed max-w-md">
              Empowering students, researchers, and readers with seamless
              access to books, journals, and digital resources in one modern
              platform.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              {/* Facebook */}
              <button className="p-3 rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white transition-all text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                </svg>
              </button>

              {/* Instagram */}
              <button className="p-3 rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white transition-all text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </button>

              {/* Twitter */}
              <button className="p-3 rounded-full border border-gray-200 hover:bg-blue-900 hover:text-white transition-all text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.5 8.5 0 01-2.7 1.03A4.24 4.24 0 0015.5 4a4.25 4.25 0 00-4.24 4.24c0 .33.04.66.1.97A12.03 12.03 0 013 5.15a4.25 4.25 0 001.31 5.67 4.18 4.18 0 01-1.92-.53v.06a4.25 4.25 0 003.4 4.16 4.3 4.3 0 01-1.91.07 4.25 4.25 0 003.97 2.95A8.52 8.52 0 012 19.54 12.01 12.01 0 008.5 21c7.8 0 12.07-6.46 12.07-12.07 0-.18-.01-.36-.02-.54A8.64 8.64 0 0022 5.92z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-950 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-500">
              <li>
                <Link href="/books" className="hover:text-blue-900 transition-colors">
                  Explore Catalog
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-900 transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-950 mb-5">
              Legal
            </h3>

            <ul className="space-y-4 text-gray-500">
              <li>
                <Link href="#" className="hover:text-blue-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-blue-900 transition-colors">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-blue-900 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 Alexandria Library Management System. All rights reserved.
          </p>

          <div className="text-sm text-gray-400">
            support@alexandrialibrary.com
          </div>
        </div>
      </div>
    </footer>
  );
}