"use client";

import { useState, useEffect } from 'react';
import { Search, LayoutGrid, List, RotateCcw, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch books from MongoDB on page load
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        const data = await response.json();
        if (data.success) {
          setBooks(data.data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // Filter books based on search bar input
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral font-body py-12 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* ================= LEFT SIDEBAR (FILTERS) ================= */}
        <aside className="w-full lg:w-64 shrink-0">
          <h2 className="text-2xl font-headline font-bold text-primary mb-10">Filter Catalog</h2>
          
          <div className="mb-10">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Category</h3>
            <div className="space-y-3 text-sm text-primary">
              {['Philosophy', 'Classics', 'History', 'Science'].map(category => (
                <label key={category} className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Year</h3>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="From" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:border-primary" />
              <input type="text" placeholder="To" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:border-primary" />
            </div>
          </div>

          <button className="flex items-center text-sm text-primary font-medium hover:text-secondary transition-colors">
            <RotateCcw size={16} className="mr-2" /> Clear all filters
          </button>
        </aside>

        {/* ================= RIGHT MAIN CONTENT ================= */}
        <main className="flex-1">
          
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 pb-6 border-b border-gray-200">
            <div className="flex items-baseline space-x-4 mb-4 md:mb-0">
              <h1 className="text-4xl font-headline font-bold text-primary">Scholarly Collection</h1>
              <span className="text-sm text-gray-500">{filteredBooks.length} volumes</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 rounded-md bg-white px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-secondary transition-all">
                <input 
                  type="text" 
                  placeholder="Search title or author..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm outline-none text-primary" 
                />
                <Search size={16} className="text-gray-400" />
              </div>
              <button className="p-2 text-primary hover:text-secondary transition-colors"><LayoutGrid size={20} /></button>
              <button className="p-2 text-gray-400 hover:text-primary transition-colors"><List size={20} /></button>
            </div>
          </div>

          {/* Book Grid */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 text-primary">
              <Loader2 className="animate-spin mb-4" size={40} />
              <p className="font-medium">Connecting to Archive Database...</p>
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="text-center py-32 border-2 border-dashed border-gray-200 rounded-xl">
              <p className="text-gray-500 text-lg">No manuscripts found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
              {filteredBooks.map((book) => (
                <div key={book._id} className="group cursor-pointer">
                  <div className="relative w-full aspect-[3/4] mb-4 bg-gray-100 overflow-hidden shadow-sm">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${book.image}')` }}></div>
                    {book.badgeText && (
                      <div className={`absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase ${book.badgeType === 'light' ? 'bg-white text-primary' : 'bg-[#5c2b2b] text-white'}`}>
                        {book.badgeText}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-body font-medium text-primary leading-tight mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.author}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-6 text-sm font-body text-primary pt-8 border-t border-gray-200">
            <button className="flex items-center hover:text-secondary transition-colors disabled:opacity-50"><ArrowLeft size={16} className="mr-2" /> Previous</button>
            <div className="flex items-center space-x-4">
              <button className="font-bold border-b-2 border-primary pb-1 px-1">1</button>
              <button className="hover:text-secondary transition-colors">2</button>
              <button className="hover:text-secondary transition-colors">3</button>
              <span className="text-gray-400">...</span>
              <button className="hover:text-secondary transition-colors">42</button>
            </div>
            <button className="flex items-center hover:text-secondary transition-colors">Next <ArrowRight size={16} className="ml-2" /></button>
          </div>

        </main>
      </div>
    </div>
  );
}