import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '@/assets/logo.svg';

const franchises = [
  { id: 'i-am-milktea', name: 'I AM MILKTEA' },
  { id: '517-bakery', name: '517 Bakery' },
  { id: 'xanders-roasted', name: "Xander's Roasted" },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="528 Royal Care" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl tracking-tight">528 Royal Care</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className={`text-sm font-medium transition-colors hover:text-amber-600 ${location.pathname === '/' ? 'text-amber-600' : 'text-slate-600'}`}>
                Home
              </Link>
              <div className="relative group">
                <button className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors flex items-center gap-1">
                  Our Franchises <ChevronRight size={16} className="group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left scale-95 group-hover:scale-100">
                  <div className="p-2 flex flex-col gap-1">
                    {franchises.map((f) => (
                      <Link 
                        key={f.id} 
                        to={`/${f.id}`}
                        className="px-4 py-3 text-sm rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700 hover:text-amber-600"
                      >
                        {f.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/franchise-opportunities" className={`text-sm font-medium transition-colors hover:text-amber-600 ${location.pathname === '/franchise-opportunities' ? 'text-amber-600' : 'text-slate-600'}`}>
                Franchise Opportunities
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-800">Home</Link>
                <div className="h-px bg-slate-100" />
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Our Franchises</span>
                {franchises.map((f) => (
                  <Link 
                    key={f.id} 
                    to={`/${f.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-800 pl-4 border-l-2 border-transparent hover:border-amber-500"
                  >
                    {f.name}
                  </Link>
                ))}
                <div className="h-px bg-slate-100" />
                <Link to="/franchise-opportunities" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-800">Franchise Opportunities</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img 
                  src={logo}
                  alt="528 Royal Care" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-lg text-white tracking-tight">528 Royal Care</span>
              </Link>
              <p className="text-sm max-w-md">
                Empowering entrepreneurs through exceptional franchise opportunities. We build brands that communities love.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Franchises</h3>
              <ul className="space-y-2 text-sm">
                {franchises.map(f => (
                  <li key={f.id}>
                    <Link to={`/${f.id}`} className="hover:text-amber-500 transition-colors">{f.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                <li><Link to="/franchise-opportunities" className="hover:text-amber-500 transition-colors">Franchise With Us</Link></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
            &copy; {new Date().getFullYear()} 528 Royal Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
