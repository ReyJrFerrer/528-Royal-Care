import { useParams, Navigate } from 'react-router-dom';
import { businesses } from '../data';
import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Target, Eye, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BusinessDetail() {
  const { id } = useParams();
  const business = businesses.find(b => b.id === id);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'vision' | 'contact'>('home');

  if (!business) {
    return <Navigate to="/" replace />;
  }

  const colorThemes = {
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
  };
  
  const textThemes = {
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
  };

  const lightBgThemes = {
    emerald: 'bg-emerald-50',
    amber: 'bg-amber-50',
    rose: 'bg-rose-50',
  };

  const themeColor = colorThemes[business.color as keyof typeof colorThemes] || 'bg-slate-900';
  const textColor = textThemes[business.color as keyof typeof textThemes] || 'text-slate-900';
  const lightBgColor = lightBgThemes[business.color as keyof typeof lightBgThemes] || 'bg-slate-50';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={business.heroImage} 
            alt={business.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {business.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-200 font-light"
          >
            {business.tagline}
          </motion.p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'vision', label: 'Vision & Mission' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "whitespace-nowrap py-4 px-6 font-medium text-sm transition-colors relative",
                  activeTab === tab.id ? textColor : "text-slate-500 hover:text-slate-800"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className={cn("absolute bottom-0 left-0 right-0 h-0.5", themeColor)}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Welcome to {business.name}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {business.about.split('.')[0]}. Experience the best in quality and taste with our signature offerings.
                </p>
                <div className={cn("p-6 rounded-2xl border border-slate-100", lightBgColor)}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Franchise Opportunity</h3>
                  <p className="text-slate-700 mb-6">{business.franchiseInfo}</p>
                  <button className={cn("px-6 py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90 shadow-lg", themeColor, `shadow-${business.color}-500/30`)}>
                    Apply for Franchise
                  </button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[500px]">
                <img 
                  src={`${business.heroImage}?blur=1`} 
                  alt="Showcase" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="max-w-3xl mx-auto text-center">
              <div className={cn("w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6", lightBgColor, textColor)}>
                <Info size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {business.about}
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {['Premium Quality', 'Expert Craftsmanship', 'Customer First'].map((val, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className={cn("mx-auto mb-4", textColor)} size={28} />
                    <h4 className="font-bold text-slate-900">{val}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative overflow-hidden group">
                <div className={cn("absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 opacity-10 transition-transform group-hover:scale-110", themeColor)} />
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm", textColor)}>
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{business.vision}</p>
              </div>
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative overflow-hidden group">
                <div className={cn("absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 opacity-10 transition-transform group-hover:scale-110", themeColor)} />
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm", textColor)}>
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{business.mission}</p>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
              <div className={cn("p-10 md:w-2/5 text-white flex flex-col justify-between", themeColor)}>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-white/80 mb-8">We'd love to hear from you. Reach out for inquiries or feedback.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 opacity-80" size={20} />
                      <span>{business.contact.address}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="opacity-80" size={20} />
                      <span>{business.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="opacity-80" size={20} />
                      <span>{business.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:w-3/5">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className={cn("w-full py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90 mt-4", themeColor)}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
