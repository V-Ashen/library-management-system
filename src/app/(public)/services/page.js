"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookCopy, Cloud, Award, CheckCircle2, ArrowRight, ChevronRight, Send } from 'lucide-react';

export default function ServicesPage() {
  // NEW: State to handle the booking form
  const [bookingData, setBookingData] = useState({ fullName: '', email: '', serviceRequested: 'Study Space', requestedDate: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setBookingData({ fullName: '', email: '', serviceRequested: 'Study Space', requestedDate: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen bg-neutral font-body py-20 px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div initial="hidden" animate="visible" variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">World-Class Intellectual Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From ancient manuscripts to modern digital archives, we provide the tools and environments necessary for deep academic research and scholarly community.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Card 1: Lending & Returns */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-8">
              <BookCopy className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Lending & Returns</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Access our extensive collection of over 2 million physical volumes. Our automated return system ensures your account is updated instantly.
            </p>
            <div className="space-y-3 mb-10 flex-grow">
              <div className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 className="text-gray-400 mr-3 mt-0.5" size={16} />21-day loan periods</div>
              <div className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 className="text-gray-400 mr-3 mt-0.5" size={16} />Inter-library loan access</div>
            </div>
          </motion.div>

          {/* Card 2: Digital Archives */}
          <motion.div variants={itemVariants} className="bg-primary p-10 rounded-xl shadow-lg flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center mb-8"><Cloud className="text-white" size={24} /></div>
            <h3 className="text-2xl font-headline font-bold text-white mb-4">Digital Archives</h3>
            <p className="text-blue-100 mb-10 leading-relaxed text-sm flex-grow">Unlock high-resolution scans of rare manuscripts and instant access to 50,000+ academic journals from anywhere in the world.</p>
            <button className="w-fit px-8 py-3 bg-secondary text-primary font-bold rounded-md hover:bg-opacity-90 transition-colors text-sm flex items-center group">
              Browse Repository <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Card 3: BACKEND INTEGRATION - Functional Booking Form */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-xl shadow-sm border border-gray-200 flex flex-col h-full">
            <h3 className="text-2xl font-headline font-bold text-primary mb-2">Book a Service</h3>
            <p className="text-gray-500 mb-6 text-sm">Reserve study spaces or request research assistance.</p>
            
            {status && (
              <div className={`p-3 mb-4 rounded-md text-xs font-bold ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-4 flex-grow flex flex-col">
              <input 
                type="text" required placeholder="Full Name" 
                value={bookingData.fullName} onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm bg-gray-50"
              />
              <input 
                type="email" required placeholder="Email Address" 
                value={bookingData.email} onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm bg-gray-50"
              />
              <div className="grid grid-cols-2 gap-4">
                <select 
                  value={bookingData.serviceRequested} onChange={(e) => setBookingData({...bookingData, serviceRequested: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm bg-gray-50 text-gray-700"
                >
                  <option value="Study Space">Study Space</option>
                  <option value="Research Help">Research Help</option>
                  <option value="Archival Access">Archival Access</option>
                </select>
                <input 
                  type="date" required 
                  value={bookingData.requestedDate} onChange={(e) => setBookingData({...bookingData, requestedDate: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm bg-gray-50 text-gray-700"
                />
              </div>
              <div className="flex-grow"></div>
              <button disabled={isSubmitting} type="submit" className="w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors text-sm flex items-center justify-center disabled:opacity-50 mt-4">
                <Send size={16} className="mr-2" /> {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </motion.div>

          {/* Card 4: Membership */}
          <motion.div variants={itemVariants} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-8"><Award className="text-white" size={24} /></div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">Membership Programs</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">From student passes to corporate institutional access, our membership tiers support lifelong learning.</p>
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-center text-sm border-b border-gray-100 pb-3"><span className="font-bold text-primary mr-4">01</span><span className="text-gray-600">Student & Scholar Access</span></div>
              <div className="flex items-center text-sm border-b border-gray-100 pb-3"><span className="font-bold text-primary mr-4">02</span><span className="text-gray-600">Professional Research Tier</span></div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}