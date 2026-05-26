import Sidebar from "../../../components/admin/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      {/* We add margin-left 64 (16rem) because the sidebar is fixed and width-64 */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}