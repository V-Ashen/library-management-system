import { ShieldCheck, Globe, BookOpen, Users } from 'lucide-react';

export default function AboutPage() {
  const librarians = [
    {
      name: "Dr. Elena Vance",
      title: "CHIEF ARCHIVIST",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
    },
    {
      name: "Marcus Thorne",
      title: "DIGITAL STRATEGY",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
    },
    {
      name: "Sarah Jenkins",
      title: "HISTORICAL CURATOR",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
    },
    {
      name: "Julian Reed",
      title: "INSTITUTIONAL LIAISON",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400"
    }
  ];

  return (
    <div className="font-body w-full">
      
      {/* 1. HERO SECTION (White Background) */}
      <section className="bg-white py-24 px-4 text-center flex flex-col items-center">
        <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6">
          Established 1724
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary max-w-4xl leading-tight mb-8">
          Preserving Wisdom, Inspiring Futures
        </h1>
        
        <p className="text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed mb-10">
          For centuries, Alexandria Library has stood as a beacon of human achievement. We curate the past to empower the thinkers of tomorrow through rigorous preservation and open access.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
            Learn Our Story
          </button>
          <button className="bg-white border border-gray-300 text-primary px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            Visit the Archives
          </button>
        </div>
      </section>

      {/* 2. STATS & INFO SECTION (Neutral Background - The part you just asked to add!) */}
      <section className="bg-neutral py-24 px-8 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-primary mb-8 text-center">
            About Alexandria Library
          </h2>
          
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 1994, the Alexandria Library Management System serves as a premier institutional pillar for preservation and academic advancement. Our mission is to democratize access to rare manuscripts, peer-reviewed journals, and comprehensive historical archives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By bridging the gap between physical preservation and digital accessibility, we provide researchers, students, and academics worldwide with the tools they need to push the boundaries of human knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <BookOpen className="mx-auto text-secondary mb-4" size={32} />
              <h3 className="font-headline font-bold text-primary text-xl mb-2">2M+ Volumes</h3>
              <p className="text-sm text-gray-500">Carefully curated academic texts and journals.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <Users className="mx-auto text-secondary mb-4" size={32} />
              <h3 className="font-headline font-bold text-primary text-xl mb-2">50k+ Members</h3>
              <p className="text-sm text-gray-500">A growing network of global researchers.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <Globe className="mx-auto text-secondary mb-4" size={32} />
              <h3 className="font-headline font-bold text-primary text-xl mb-2">Digital Access</h3>
              <p className="text-sm text-gray-500">24/7 access to our cloud-based repository.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION SECTION (White Background) */}
      <section className="bg-white py-28 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-12">
            Our Vision for Knowledge
          </h2>
          
          <p className="text-2xl md:text-3xl font-headline italic text-primary leading-snug mb-10">
            "Information is the currency of democracy, and wisdom is its safe harbor."
          </p>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-16 max-w-3xl mx-auto">
            We believe that access to information is a fundamental human right. Our vision extends beyond being a repository of books; we aim to be a sanctuary for critical thinking, a catalyst for civic discourse, and a pioneer in the ethics of information verification.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="flex items-start">
              <ShieldCheck className="text-secondary shrink-0 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Truth Verification</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Combating misinformation through rigorous provenance tracking and scholarly review.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="text-secondary shrink-0 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Universal Access</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Bridging the digital divide with free global infrastructure and open-source systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR LIBRARIANS SECTION (Neutral Background) */}
      <section className="bg-neutral py-28 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
          Meet our Librarians
        </h2>
        <p className="text-gray-500 mb-20">
          The stewards of our collective memory.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {librarians.map((librarian, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white outline outline-1 outline-gray-200 group-hover:shadow-xl transition-all duration-300">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${librarian.image}')` }}
                ></div>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {librarian.name}
              </h3>
              <p className="text-secondary text-[10px] font-bold tracking-[0.2em] uppercase">
                {librarian.title}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}