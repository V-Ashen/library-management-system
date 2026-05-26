"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', subject: '', message: ''
  });
  
  // New states for handling loading and success/error messages
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(''); // Clear previous messages

    try {
      // Send the data to our new API route!
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Your message has been sent to the library staff!' });
        // Clear the form
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Same as before) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-headline font-bold text-primary mb-4">Contact Library Services</h1>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            Have a question about our collections or need assistance with your research? Send us a message and our academic staff will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Information (Same as before) */}
          <div className="bg-primary p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-headline font-bold mb-6">Get in Touch</h3>
              <p className="text-neutral/80 font-body text-sm mb-10 leading-relaxed">
                Our reference desk is open during standard academic hours. For urgent archival requests, please call us directly.
              </p>
              <div className="space-y-6 font-body text-sm">
                <div className="flex items-center"><MapPin className="text-secondary mr-4" size={20} /><span>1200 Knowledge Avenue, Academic District</span></div>
                <div className="flex items-center"><Phone className="text-secondary mr-4" size={20} /><span>+1 (555) 019-8372</span></div>
                <div className="flex items-center"><Mail className="text-secondary mr-4" size={20} /><span>reference@alexandrialibrary.edu</span></div>
              </div>
            </div>
          </div>

          {/* Right Side: The Contact Form */}
          <div className="col-span-2 p-10">
            <form onSubmit={handleSubmit} className="space-y-6 font-body">
              
              {/* SUCCESS/ERROR MESSAGE DISPLAY */}
              {status && (
                <div className={`p-4 rounded-md text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                  <input type="text" name="fullName" value={formData.fullName} required onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow bg-neutral/50" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} required onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow bg-neutral/50" placeholder="name@university.edu" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow bg-neutral/50" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">Subject *</label>
                  <input type="text" name="subject" value={formData.subject} required onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow bg-neutral/50" placeholder="Research Inquiry" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message *</label>
                <textarea name="message" value={formData.message} rows="5" required onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow bg-neutral/50 resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <div className="pt-4">
                {/* Notice we disable the button while submitting! */}
                <Button variant="primary" type="submit" disabled={isSubmitting} className="w-full md:w-auto flex items-center justify-center disabled:opacity-50">
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}