"use client";

import { useEffect, useState } from 'react';
import { Mail, Clock, Trash2, Eye, X, CalendarCheck, BookOpen, PlusCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [books, setBooks] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('messages'); // 'messages', 'bookings', or 'catalog'
  const [selectedMessage, setSelectedMessage] = useState(null);

  // New Book Form State
  const [newBook, setNewBook] = useState({ title: '', author: '', image: '', category: 'General', badgeText: '', badgeType: 'light' });
  const [isAddingBook, setIsAddingBook] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [msgRes, bookRes, catalogRes] = await Promise.all([
          fetch('/api/contact'),
          fetch('/api/bookings'),
          fetch('/api/books')
        ]);
        
        const msgData = await msgRes.json();
        const bookData = await bookRes.json();
        const catalogData = await catalogRes.json();
        
        if (msgData.success) setMessages(msgData.data);
        if (bookData.success) setBookings(bookData.data);
        if (catalogData.success) setBooks(catalogData.data);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDeleteMessage = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this message?");
    if (isConfirmed) {
      try {
        const response = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.success) setMessages(messages.filter((msg) => msg._id !== id));
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  // NEW: Function to Add a Book
  const handleAddBook = async (e) => {
    e.preventDefault();
    setIsAddingBook(true);
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook)
      });
      const data = await response.json();
      if (data.success) {
        alert("Book successfully added to the database!");
        setBooks([data.data, ...books]); // Add new book to the top of the local list
        setNewBook({ title: '', author: '', image: '', category: 'General', badgeText: '', badgeType: 'light' }); // Reset form
      } else {
        alert("Failed to add book.");
      }
    } catch (error) {
      console.error("Error adding book:", error);
    } finally {
      setIsAddingBook(false);
    }
  };

  return (
    <div className="font-body relative pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold text-primary mb-2">Admin Dashboard</h1>
        <p className="text-gray-500">Manage library inquiries, reservations, and the digital catalog.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="bg-blue-50 p-4 rounded-full mr-4"><Mail className="text-blue-600" size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Contact Inquiries</p><p className="text-2xl font-bold text-primary">{messages.length}</p></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="bg-green-50 p-4 rounded-full mr-4"><CalendarCheck className="text-green-600" size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Service Bookings</p><p className="text-2xl font-bold text-primary">{bookings.length}</p></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
          <div className="bg-amber-50 p-4 rounded-full mr-4"><BookOpen className="text-amber-600" size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Catalog Volumes</p><p className="text-2xl font-bold text-primary">{books.length}</p></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-200">
        <button onClick={() => setActiveTab('messages')} className={`pb-3 px-4 font-semibold text-sm transition-colors ${activeTab === 'messages' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 hover:text-gray-600'}`}>Contact Messages</button>
        <button onClick={() => setActiveTab('bookings')} className={`pb-3 px-4 font-semibold text-sm transition-colors ${activeTab === 'bookings' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 hover:text-gray-600'}`}>Service Bookings</button>
        <button onClick={() => setActiveTab('catalog')} className={`pb-3 px-4 font-semibold text-sm transition-colors ${activeTab === 'catalog' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 hover:text-gray-600'}`}>Library Catalog</button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        
        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs border-b border-gray-200">
                <tr><th className="px-6 py-4">Date</th><th className="px-6 py-4">Name & Email</th><th className="px-6 py-4">Subject</th><th className="px-6 py-4">Message Preview</th><th className="px-6 py-4 text-center">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">Loading...</td></tr> : messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-gray-50"><td className="px-6 py-4"><div className="flex items-center text-gray-500 text-xs"><Clock size={14} className="mr-1" />{new Date(msg.createdAt).toLocaleDateString()}</div></td><td className="px-6 py-4"><div className="font-semibold text-primary">{msg.fullName}</div><div className="text-xs text-gray-500">{msg.email}</div></td><td className="px-6 py-4 font-medium text-gray-700">{msg.subject}</td><td className="px-6 py-4 max-w-xs truncate text-gray-500">{msg.message}</td><td className="px-6 py-4 text-center"><button onClick={() => setSelectedMessage(msg)} className="text-primary hover:text-secondary p-2"><Eye size={18} /></button><button onClick={() => handleDeleteMessage(msg._id)} className="text-red-400 hover:text-red-600 p-2 ml-2"><Trash2 size={18} /></button></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs border-b border-gray-200">
                <tr><th className="px-6 py-4">Submitted On</th><th className="px-6 py-4">User Details</th><th className="px-6 py-4">Service Requested</th><th className="px-6 py-4">Requested Date</th><th className="px-6 py-4 text-center">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-400">Loading...</td></tr> : bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50"><td className="px-6 py-4 text-xs text-gray-500">{new Date(booking.createdAt).toLocaleDateString()}</td><td className="px-6 py-4"><div className="font-semibold text-primary">{booking.fullName}</div><div className="text-xs text-gray-500">{booking.email}</div></td><td className="px-6 py-4 font-medium text-primary">{booking.serviceRequested}</td><td className="px-6 py-4 font-medium text-gray-700"><div className="flex items-center"><Clock size={14} className="mr-2 text-secondary" /> {booking.requestedDate}</div></td><td className="px-6 py-4 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase">{booking.status}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* NEW: CATALOG TAB (Add Book Form) */}
        {activeTab === 'catalog' && (
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* The Form */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <PlusCircle className="text-primary mr-2" size={24} />
                <h2 className="text-xl font-bold text-primary">Add New Book to Catalog</h2>
              </div>
              
              <form onSubmit={handleAddBook} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Book Title</label>
                  <input type="text" required value={newBook.title} onChange={(e) => setNewBook({...newBook, title: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-primary text-sm" placeholder="e.g. The Republic" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Author</label>
                  <input type="text" required value={newBook.author} onChange={(e) => setNewBook({...newBook, author: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-primary text-sm" placeholder="e.g. Plato" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Cover Image URL (Unsplash)</label>
                  <input type="url" required value={newBook.image} onChange={(e) => setNewBook({...newBook, image: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-primary text-sm" placeholder="https://images.unsplash.com/..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                    <select value={newBook.category} onChange={(e) => setNewBook({...newBook, category: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-primary text-sm">
                      <option>Philosophy</option><option>Classics</option><option>History</option><option>Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Badge (Optional)</label>
                    <input type="text" value={newBook.badgeText} onChange={(e) => setNewBook({...newBook, badgeText: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-primary text-sm" placeholder="e.g. RESERVED" />
                  </div>
                </div>
                <button type="submit" disabled={isAddingBook} className="w-full py-3 bg-primary text-white rounded-md font-bold hover:bg-opacity-90 transition mt-4 disabled:opacity-50">
                  {isAddingBook ? 'Saving to Database...' : 'Add to Database'}
                </button>
              </form>
            </div>

            {/* List of currently added books */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-200 pb-2">Recently Added ({books.length})</h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {books.map(book => (
                  <div key={book._id} className="flex items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <img src={book.image} alt={book.title} className="w-12 h-16 object-cover rounded mr-4" />
                    <div>
                      <p className="font-bold text-primary text-sm">{book.title}</p>
                      <p className="text-xs text-gray-500">{book.author} • {book.category}</p>
                      {book.badgeText && <span className="text-[10px] font-bold bg-gray-200 px-2 py-0.5 rounded mt-1 inline-block">{book.badgeText}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* POPUP MODAL FOR MESSAGES */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-headline font-bold text-primary">Message Details</h3>
              <button onClick={() => setSelectedMessage(null)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div><p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">From</p><p className="font-medium text-primary">{selectedMessage.fullName} <span className="text-gray-500 font-normal">({selectedMessage.email})</span></p></div>
              <div><p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Subject</p><p className="font-medium text-primary">{selectedMessage.subject}</p></div>
              <div><p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Message</p><div className="bg-gray-50 p-4 rounded-md border border-gray-100 text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</div></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}