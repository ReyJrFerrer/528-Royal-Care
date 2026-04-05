import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Coffee, CakeSlice, Drumstick, MessageCircle, Phone } from 'lucide-react';

const brands = [
  { id: 'i-am-milktea', name: 'I AM MILKTEA', tagline: '"I Am... Milktea. I Am your daily dose of Joy."', icon: Coffee, color: 'lime' },
  { id: '517-bakery', name: '517 Bakery', tagline: '"Baked with love, served with joy." — 2 Corinthians 5:17', icon: CakeSlice, color: 'amber' },
  { id: 'xanders-roasted', name: "Xander's Lechon", tagline: '"Masarap. Affordable. Quality."', icon: Drumstick, color: 'rose' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="src/assets/cover photo.png" 
            alt="Corporate Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          
          >
            <img 
              src="src/assets/logo.png" 
              alt="528 Royal Crown Logo" 
              className="h-70 md:h-75 object-contain mx-auto"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mastering Craft,<br/>
              <span className="text-[#fdd304]">Multiplying Blessings.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl mx-auto">
              528 Royal Care is a premier holding company managing a diverse portfolio of successful food and beverage franchises.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/franchise-opportunities" 
              className="px-10 py-4 bg-[#fe023c] hover:bg-[#e0012f] text-white font-semibold transition-colors duration-300"
            >
              Explore Franchises
            </Link>
            <a 
              href="#our-brands" 
              className="px-10 py-4 bg-white hover:bg-gray-100 text-[#8e180d] font-semibold transition-colors duration-300"
            >
              View Our Brands
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Foundation - Deuteronomy 28 */}
      <section className="py-20 bg-[#8e180d] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Foundation</h2>
          
            <p className="text-lg leading-relaxed text-white/90">
              "If you fully obey the Lord your God and carefully follow all his commands I give you today, the Lord your God will set you high above all the nations on earth. You will be blessed in the city and blessed in the country. The Lord will make you the head, not the tail."
            </p>
            <p className="text-3xl md:text-4xl font-bold text-[#fdd304] mt-6">Deuteronomy 28:13</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-slate-600 max-w-2xl">We provide end-to-end support to ensure your franchise thrives in a competitive market.</p>
          </motion.div>

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
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f8f7f4] p-10 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#8e180d]/10 text-[#8e180d] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
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
                'i-am-milktea': 'src/assets/iAmMilktea/iammilktea-logo.png',
                '517-bakery': 'src/assets/517bakery/517Bakery-logo.png',
                'xanders-roasted': 'src/assets/xandersLechon/xandersLechon-logo.png',
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

      {/* Contact Section */}
      <section className="py-32 bg-[#8e180d] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Partner With Us</h2>
            <p className="text-2xl md:text-3xl font-light mb-6">Ready to Build Your Future?</p>
            <p className="text-xl text-white/90 max-w-2xl mb-2">
              Join our growing family of entrepreneurs and build a successful business with our proven brands.
            </p>
            <p className="text-[#fdd304] font-semibold">
              Interested in franchising? <Link to="/franchise-opportunities" className="underline hover:text-white">Learn more about owning your own store!</Link>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/franchise-opportunities"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#fe023c] hover:bg-[#e0012f] text-white font-semibold transition-colors duration-300"
            >
              <MessageCircle size={24} />
              <span className="text-lg">Inquire Now</span>
            </Link>
            <a
              href="tel:+639123456789"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#8e180d] font-semibold transition-colors duration-300"
            >
              <Phone size={24} />
              <span className="text-lg">Call Us</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="https://picsum.photos/seed/528logo/200/60"
                alt="528 Royal Crown Logo"
                className="h-12 object-contain mb-3"
              />
              <p className="text-slate-400">Building Brands, Empowering Futures.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/franchise-opportunities" className="block text-slate-400 hover:text-white transition-colors">
                  Franchise Opportunities
                </Link>
                <Link to="/i-am-milktea" className="block text-slate-400 hover:text-white transition-colors">
                  I AM MILKTEA
                </Link>
                <Link to="/517-bakery" className="block text-slate-400 hover:text-white transition-colors">
                  517 Bakery
                </Link>
                <Link to="/xanders-roasted" className="block text-slate-400 hover:text-white transition-colors">
                  Xander's Lechon
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>528 Royal Care</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
            <p>&copy; 2026 528 Royal Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
