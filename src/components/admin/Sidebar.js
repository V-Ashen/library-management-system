import Link from 'next/link';
import { LayoutDashboard, MessageSquare, LogOut, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-primary text-white min-h-screen flex flex-col hidden md:flex font-body fixed h-full z-10">
      
      {/* Admin Logo */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-headline font-bold text-secondary">Alexandria Admin</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/admin/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-white/10 text-white rounded-md transition-colors">
          <LayoutDashboard size={20} className="text-secondary" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-white/5 text-gray-300 hover:text-white rounded-md transition-colors">
          <MessageSquare size={20} />
          <span className="font-medium">Messages</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-white/5 text-gray-300 hover:text-white rounded-md transition-colors">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/10">
        <button className="flex items-center space-x-3 px-4 py-3 w-full hover:bg-red-500/10 text-gray-300 hover:text-red-400 rounded-md transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}