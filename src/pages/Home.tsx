import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Coffee, CakeSlice, Drumstick } from 'lucide-react';

const brands = [
  { id: 'i-am-miltea', name: 'I AM MILKTEA', tagline: 'Refreshing moments in every cup.', icon: Coffee, color: 'lime' },
  { id: '517-bakery', name: '517 Bakery', tagline: 'Baked with love, served with a smile.', icon: CakeSlice, color: 'amber' },
  { id: 'xanders-roasted', name: "Xander's Roasted", tagline: 'Savory perfection in every bite.', icon: Drumstick, color: 'rose' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/corporate/1920/1080" 
            alt="Corporate Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Building Brands,<br/>
              <span className="text-amber-500">Empowering Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              528 Royal Care is a premier holding company managing a diverse portfolio of successful food and beverage franchises. Join our growing family of entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/franchise-opportunities" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl text-slate-900 bg-amber-500 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30"
              >
                Explore Franchises
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="#our-brands" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20"
              >
                View Our Brands
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With 528 Royal Crown?</h2>
            <p className="text-slate-600 text-lg">We provide end-to-end support to ensure your franchise thrives in a competitive market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Proven Business Models', desc: 'Our brands have a track record of success and profitability across multiple locations.' },
              { icon: Users, title: 'Comprehensive Training', desc: 'We equip you and your team with the skills needed to deliver excellence from day one.' },
              { icon: Award, title: 'Quality Assurance', desc: 'Strict quality controls and premium supply chains ensure consistent customer satisfaction.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section id="our-brands" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Premium Brands</h2>
              <p className="text-slate-600 text-lg">Discover our diverse portfolio of food and beverage concepts, each crafted to cater to unique market demands.</p>
            </div>
            <Link to="/franchise-opportunities" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors group">
              View all opportunities <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brands.map((brand, idx) => {
              const Icon = brand.icon;
              const heroImages = {
                'i-am-miltea': 'https://picsum.photos/seed/milktea/800/600',
                '517-bakery': 'https://picsum.photos/seed/bakery/800/600',
                'xanders-roasted': 'https://picsum.photos/seed/roastedchicken/800/600',
              };
              
              return (
                <motion.div 
                  key={brand.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={heroImages[brand.id as keyof typeof heroImages]} 
                      alt={brand.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                      <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl text-white border border-white/30">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-slate-600 mb-6 flex-grow">{brand.tagline}</p>
                    <Link 
                      to={`/${brand.id}`}
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-900 font-medium rounded-xl transition-colors border border-slate-200"
                    >
                      Explore Brand
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
