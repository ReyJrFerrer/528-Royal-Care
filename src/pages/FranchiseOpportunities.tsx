import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Store, TrendingUp, ShieldCheck, Coffee, CakeSlice, Drumstick } from 'lucide-react';
import LazyImage from '@/components/LazyImage';


import bakery517Logo from '@/assets/517bakery/517Bakery-logo.svg';
import xandersLogo from '@/assets/xandersLechon/xandersLechon-logo.png';


const franchises = [
  { id: '517-bakery', name: '517 Bakery', tagline: 'Baked with love, served with a smile.', icon: CakeSlice, color: 'amber', desc: 'Bring the aroma of 517 Bakery to your community. Our franchise program includes recipes, operational guidelines, and ongoing support.' },
  { id: 'xanders-roasted', name: "Xander's Lechon & Meals On-The-Go", tagline: 'Masarap. Affordable. Quality.', icon: Drumstick, color: 'amber', desc: "Bring the sizzle of Xander's roasted specialties to your community. Our franchise program includes recipes, operational guidelines, and ongoing support." },
];

export default function FranchiseOpportunities() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Franchise Opportunities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Partner with 528 Royal Care and build a profitable business with our proven, high-demand brands.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Store, title: 'Turnkey Setup', desc: 'We provide full assistance from location scouting to store design and construction.' },
            { icon: TrendingUp, title: 'Marketing Support', desc: 'Benefit from national campaigns and localized marketing strategies to drive foot traffic.' },
            { icon: ShieldCheck, title: 'Operational Excellence', desc: 'Access to our proprietary systems, supply chain, and continuous operational training.' }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white/80 p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Franchise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Select from our diverse portfolio of successful food and beverage concepts.</p>
        </div>

        <div className="space-y-8">
          {franchises.map((franchise, idx) => {
            const heroImages = {
              '517-bakery': bakery517Logo,
              'xanders-roasted': xandersLogo,
            };
            
            return (
            <motion.div 
              key={franchise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <LazyImage
                  src={heroImages[franchise.id as keyof typeof heroImages]}
                  alt={franchise.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{franchise.name}</h3>
                  <span className={franchise.id === 'i-am-miltea' ? 'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d0d91b]/20 text-[#94a036]' : `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-${franchise.color}-100 text-${franchise.color}-700`}>
                    High Demand
                  </span>
                </div>
                <p className="text-slate-600 mb-6 text-lg">{franchise.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-amber-500" size={20} />
                    <span>Proven ROI</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-amber-500" size={20} />
                    <span>Training Included</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-amber-500" size={20} />
                    <span>Marketing Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-amber-500" size={20} />
                    <span>Exclusive Territory</span>
                  </div>
                </div>

                <div className="flex gap-4">
                   <Link to="/contact" >
                  <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl transition-colors">
                    Contact us
                  </button>
                  </Link>
                 
                  <Link 
                    to={`/${franchise.id}`}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-xl transition-colors flex items-center"
                  >
                    View Brand <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
