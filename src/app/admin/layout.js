export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* We will build a sidebar here later */}
      <aside className="w-64 bg-primary text-white p-4 hidden md:block">
        Admin Sidebar
      </aside>
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}