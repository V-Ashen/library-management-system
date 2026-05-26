import { Search, LayoutGrid, List, RotateCcw, ArrowLeft, ArrowRight } from 'lucide-react';

export default function BooksPage() {
  // Dummy data matching your mockup exactly
  const books = [
    {
      id: 1,
      title: "Meditations",
      author: "Marcus Aurelius",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800", // Dark leather vibe
      badge: null
    },
    {
      id: 2,
      title: "The Odyssey",
      author: "Homer",
      image: "https://unsplash.com/photos/hand-holding-an-open-book-with-an-illustration-and-text-cuQ0hRtt1V8", // Ornate light cover vibe
      badge: { text: "RESERVED", type: "light" }
    },
    {
      id: 3,
      title: "Beyond Good and Evil",
      author: "Friedrich Nietzsche",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800", // Dark modern vibe
      badge: null
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800", // Classic novel vibe
      badge: null
    },
    {
      id: 5,
      title: "The Rise of Empires",
      author: "Dr. Alistair Vance",
      image: "https://images.unsplash.com/photo-1569569970363-df7b6160d111?q=80&w=800", // Antique map vibe
      badge: null
    },
    {
      id: 6,
      title: "Spaces of Thought",
      author: "Elena Rossi",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800", // Architecture vibe
      badge: { text: "OUT OF STOCK", type: "dark" }
    }
  ];

  return (
    <div className="min-h-screen bg-neutral font-body py-12 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* ================= LEFT SIDEBAR (FILTERS) ================= */}
        <aside className="w-full lg:w-64 shrink-0">
          <h2 className="text-2xl font-headline font-bold text-primary mb-10">Filter Catalog</h2>
          
          {/* Categories */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Category</h3>
            <div className="space-y-3 text-sm text-primary">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary rounded border-gray-300" />
                <span>Philosophy</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" />
                <span>Classics</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" />
                <span>History</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary rounded border-gray-300" />
                <span>Science</span>
              </label>
            </div>
          </div>

          {/* Year Range */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Year</h3>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="From" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:border-primary" />
              <input type="text" placeholder="To" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-white focus:outline-none focus:border-primary" />
            </div>
          </div>

          {/* Clear Filters */}
          <button className="flex items-center text-sm text-primary font-medium hover:text-secondary transition-colors">
            <RotateCcw size={16} className="mr-2" />
            Clear all filters
          </button>
        </aside>


        {/* ================= RIGHT MAIN CONTENT ================= */}
        <main className="flex-1">
          
          {/* Top Bar (Title + Search) */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 pb-6 border-b border-gray-200">
            <div className="flex items-baseline space-x-4 mb-4 md:mb-0">
              <h1 className="text-4xl font-headline font-bold text-primary">Scholarly Collection</h1>
              <span className="text-sm text-gray-500">1,248 volumes</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 rounded-md bg-white px-3 py-2 w-64">
                <input type="text" placeholder="Search..." className="w-full text-sm outline-none text-primary" />
                <Search size={16} className="text-gray-400" />
              </div>
              <button className="p-2 text-primary hover:text-secondary transition-colors"><LayoutGrid size={20} /></button>
              <button className="p-2 text-gray-400 hover:text-primary transition-colors"><List size={20} /></button>
            </div>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            {books.map((book) => (
              <div key={book.id} className="group cursor-pointer">
                {/* Image Container with Aspect Ratio */}
                <div className="relative w-full aspect-[3/4] mb-4 bg-gray-100 overflow-hidden shadow-sm">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${book.image}')` }}
                  ></div>
                  
                  {/* Badges */}
                  {book.badge && (
                    <div className={`absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase ${
                      book.badge.type === 'light' ? 'bg-white text-primary' : 'bg-[#5c2b2b] text-white'
                    }`}>
                      {book.badge.text}
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-body font-medium text-primary leading-tight mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-6 text-sm font-body text-primary pt-8 border-t border-gray-200">
            <button className="flex items-center hover:text-secondary transition-colors disabled:opacity-50">
              <ArrowLeft size={16} className="mr-2" /> Previous
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="font-bold border-b-2 border-primary pb-1 px-1">1</button>
              <button className="hover:text-secondary transition-colors">2</button>
              <button className="hover:text-secondary transition-colors">3</button>
              <span className="text-gray-400">...</span>
              <button className="hover:text-secondary transition-colors">42</button>
            </div>

            <button className="flex items-center hover:text-secondary transition-colors">
              Next <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}