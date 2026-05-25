import { Search, ArrowRight, FlaskConical, Map, BookMarked } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section 
        className="relative text-neutral py-32 px-4 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-wide drop-shadow-lg">
            Unlocking Global Knowledge
          </h1>
          <p className="text-neutral/90 max-w-2xl text-lg mb-10 font-body drop-shadow-md">
            Access millions of academic journals and rare manuscripts from the world's most comprehensive digital repository.
          </p>
          <div className="flex bg-white rounded-lg p-1 w-full max-w-3xl mb-6 shadow-xl focus-within:ring-2 ring-secondary transition-all">
            <div className="flex items-center pl-4 pr-2"><Search className="text-gray-400" size={20} /></div>
            <input type="text" placeholder="Search by title, author, or subject..." className="flex-1 text-primary font-body outline-none px-2 bg-transparent" />
            <button className="bg-tertiary hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-body font-medium transition-colors">Search</button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-body text-neutral/80">
            <span className="font-semibold text-neutral drop-shadow-md">Quick Search:</span>
            <a href="#" className="hover:text-secondary transition-colors drop-shadow-md">Economic History</a>
            <a href="#" className="hover:text-secondary transition-colors drop-shadow-md">Quantum Mechanics</a>
            <a href="#" className="hover:text-secondary transition-colors drop-shadow-md">Rare Manuscripts</a>
          </div>
        </div>
      </section>

      {/* 2. FEATURED COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-8 py-20 bg-neutral">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 font-body">Curated Knowledge</p>
            <h2 className="text-3xl font-headline font-bold text-primary">Featured Collections</h2>
          </div>
          <a href="/books" className="text-sm font-medium flex items-center text-primary/70 hover:text-primary transition-colors font-body">
            View All <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="w-full h-64 bg-slate-800 rounded-lg mb-4 overflow-hidden shadow-md">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600')] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-2 group-hover:text-secondary transition-colors">The Renaissance Manuscript Archive</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-body">Digitally restored primary sources from the 14th to 17th centuries.</p>
          </div>
          
          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="w-full h-64 bg-white rounded-lg mb-4 flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
               <FlaskConical size={48} className="text-gray-300 group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Modern Physics</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-body">Peer-reviewed journals and cutting-edge research in subatomic particles.</p>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="w-full h-64 bg-white rounded-lg mb-4 flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
               <Map size={48} className="text-gray-300 group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Global Heritage</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-body">An extensive map collection charting demographic shifts across centuries.</p>
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC EVENTS */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Event List */}
          <div>
            <p className="text-xs font-bold text-secondary tracking-widest uppercase mb-2 font-body">Institutional Calendar</p>
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Academic Events</h2>
            <p className="text-gray-500 mb-10 text-sm font-body">Join our community for weekly discussions and professional workshops.</p>

            <div className="space-y-6 font-body">
              {/* Event 1 */}
              <div className="flex items-center group cursor-pointer border-b border-gray-100 pb-6">
                <div className="text-center mr-6">
                  <span className="block text-3xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">14</span>
                  <span className="text-xs text-gray-400 font-bold uppercase">Oct</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-primary">Ethics in Digital Librarianship</h4>
                  <p className="text-sm text-gray-500 mt-1">Prof. Julian Vane • 14:00 GMT</p>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
              </div>

              {/* Event 2 */}
              <div className="flex items-center group cursor-pointer border-b border-gray-100 pb-6">
                <div className="text-center mr-6">
                  <span className="block text-3xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">22</span>
                  <span className="text-xs text-gray-400 font-bold uppercase">Oct</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-primary">Preservation of Silk Road Cartography</h4>
                  <p className="text-sm text-gray-500 mt-1">Annual Symposium • All Day</p>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Right Side: Image Card */}
          <div className="relative">
            <div className="w-full h-[450px] bg-slate-200 rounded-xl overflow-hidden shadow-lg">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800')] bg-cover bg-center opacity-90"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-lg max-w-sm shadow-xl hidden md:block border-t-4 border-secondary">
              <h3 className="text-xl font-headline font-bold mb-2">Join the Academy</h3>
              <p className="text-sm font-body text-neutral/80">Become a part of our growing global research network today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (CTA) */}
      <section className="bg-neutral py-24 px-4 text-center flex flex-col items-center">
        <div className="bg-white p-4 rounded-full shadow-sm mb-6 border border-gray-100">
           <BookMarked size={36} className="text-secondary" />
        </div>
        <h2 className="text-3xl font-headline font-bold text-primary mb-4">Begin Your Research</h2>
        <p className="text-gray-600 max-w-md mb-8 text-sm font-body leading-relaxed">
          Access our complete digital repository or reserve physical materials for collection at the main branch.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button variant="primary">Explore Full Catalog</Button>
          <Button variant="outlined">Member Services</Button>
        </div>
      </section>
    </div>
  );
}