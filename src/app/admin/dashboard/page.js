"use client";

import { useEffect, useState } from 'react';
import { Mail, Clock, Trash2, Eye, X } from 'lucide-react';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // NEW: State to handle the View Details popup
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/contact');
        const data = await response.json();
        if (data.success) {
          setMessages(data.data);
        }
      } catch (error) {
        console.error("Error loading messages", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this message?");
    if (isConfirmed) {
      try {
        const response = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.success) {
          setMessages(messages.filter((msg) => msg._id !== id));
        }
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  return (
    <div className="font-body relative">
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-primary mb-2">Admin Dashboard</h1>
        <p className="text-gray-500">Manage contact submissions and library inquiries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="bg-blue-50 p-4 rounded-full mr-4"><Mail className="text-blue-600" size={24} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Inquiries</p>
            <p className="text-2xl font-bold text-primary">{messages.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-lg font-bold text-primary">Recent Contact Submissions</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Name & Email</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Message Preview</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">Loading records...</td></tr>
              ) : messages.length === 0 ? (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">No contact submissions found.</td></tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock size={14} className="mr-1" />
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-primary">{msg.fullName}</div>
                      <div className="text-xs text-gray-500">{msg.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">{msg.subject}</td>
                    <td className="px-6 py-4 max-w-xs truncate text-gray-500">{msg.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      
                      {/* NEW: OnClick opens the modal with this message's data */}
                      <button onClick={() => setSelectedMessage(msg)} className="text-primary hover:text-secondary p-2 transition-colors" title="View Details">
                        <Eye size={18} />
                      </button>
                      
                      <button onClick={() => handleDelete(msg._id)} className="text-red-400 hover:text-red-600 p-2 transition-colors ml-2" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* NEW: POPUP MODAL TO VIEW FULL MESSAGE DETAILS */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-headline font-bold text-primary">Message Details</h3>
              <button onClick={() => setSelectedMessage(null)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">From</p>
                <p className="font-medium text-primary">{selectedMessage.fullName} <span className="text-gray-500 font-normal">({selectedMessage.email})</span></p>
                {selectedMessage.phone && <p className="text-sm text-gray-500 mt-1">Phone: {selectedMessage.phone}</p>}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Subject</p>
                <p className="font-medium text-primary">{selectedMessage.subject}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Message</p>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100 text-gray-700 whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}