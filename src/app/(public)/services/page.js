import { BookCopy, Cloud, Building2, Award, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral font-body py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">World-Class Intellectual Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From ancient manuscripts to modern digital archives, we provide the tools and environments necessary for deep academic research and scholarly community.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* CARD 1: Lending & Returns */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-8">
              <BookCopy className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Lending & Returns</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Access our extensive collection of over 2 million physical volumes. Our automated return system ensures your account is updated instantly.
            </p>
            <div className="space-y-3 mb-10 flex-grow">
              <div className="flex items-start text-sm text-gray-700 font-medium">
                <CheckCircle2 className="text-gray-400 mr-3 mt-0.5" size={16} />
                21-day loan periods for standard items
              </div>
              <div className="flex items-start text-sm text-gray-700 font-medium">
                <CheckCircle2 className="text-gray-400 mr-3 mt-0.5" size={16} />
                Inter-library loan network access
              </div>
            </div>
            <button className="w-full py-3 border border-gray-300 rounded-md text-primary font-medium hover:bg-gray-50 transition-colors text-sm">
              Borrowing Guidelines
            </button>
          </div>

          {/* CARD 2: Digital Archives (DARK THEME) */}
          <div className="bg-primary p-10 rounded-xl shadow-lg flex flex-col h-full">
            <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center mb-8">
              <Cloud className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-white mb-4">Digital Archives</h3>
            <p className="text-blue-100 mb-10 leading-relaxed text-sm flex-grow">
              Unlock high-resolution scans of rare manuscripts and instant access to 50,000+ academic journals from anywhere in the world.
            </p>
            <button className="w-fit px-8 py-3 bg-secondary text-primary font-bold rounded-md hover:bg-opacity-90 transition-colors text-sm flex items-center">
              Browse Repository <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* CARD 3: Study Spaces */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-8">
              <Building2 className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Study Spaces</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Reserve private research carrels, collaborative media suites, or find focus in our quiet Reading Rooms.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10 flex-grow">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="text-2xl font-bold text-primary mb-1">42</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Private Pods</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Media Suites</div>
              </div>
            </div>
            <button className="w-full py-3 border border-gray-300 rounded-md text-primary font-medium hover:bg-gray-50 transition-colors text-sm">
              Book a Space
            </button>
          </div>

          {/* CARD 4: Membership Programs */}
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-8">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Membership Programs</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              From student passes to corporate institutional access, our membership tiers are designed to support your lifelong learning journey.
            </p>
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-center text-sm border-b border-gray-100 pb-3">
                <span className="font-bold text-primary mr-4">01</span>
                <span className="text-gray-600">Student & Scholar Access</span>
              </div>
              <div className="flex items-center text-sm border-b border-gray-100 pb-3">
                <span className="font-bold text-primary mr-4">02</span>
                <span className="text-gray-600">Professional Research Tier</span>
              </div>
              <div className="flex items-center text-sm border-b border-gray-100 pb-3">
                <span className="font-bold text-primary mr-4">03</span>
                <span className="text-gray-600">Corporate Institutional License</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors text-sm">
                Become a Member
              </button>
              <button className="text-sm font-medium text-primary hover:text-secondary flex items-center transition-colors">
                Compare Tiers <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM CTA SECTION */}
        <div className="border-t border-b border-gray-200 py-20 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Ready to expand your horizon?</h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Join thousands of researchers and students who call Alexandria Library their intellectual home.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors text-sm w-full sm:w-auto">
              Become a Member Today
            </button>
            <button className="text-sm font-medium text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-0.5">
              Inquire for Institutions
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}