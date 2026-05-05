import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, MessageCircle,  Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

import logoXanders from '@/assets/xandersLechon/xandersLechon-logo.png';
import coverphoto from '@/assets/xandersLechon/lechon-coverphoto.jpg';
import carousel1 from '@/assets/xandersLechon/lechon-carousel1.jpg';
import carousel2 from '@/assets/xandersLechon/lechon-carousel2.jpg';
import carousel3 from '@/assets/xandersLechon/lechon-carousel3.jpg';
import carousel4 from '@/assets/xandersLechon/lechon-carousel4.jpg';
import carousel5 from '@/assets/xandersLechon/lechon-carousel5.jpg';


const heroImages = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
];

export default function XandersLechon() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Xander's Lechon and Meals-On-The-Go</title>
        <link rel="icon" type="image/png" href="/xandersLechon-logo.png?v=xanders" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={coverphoto}
            alt="Delicious roasted food"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 px-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img
                src={logoXanders}
                alt="Xander's Lechon Logo"
                className="h-80 md:h-85 object-contain mx-auto"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Xander's Lechon & Meals On-The-Go
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-3xl text-white/95 mb-12 font-light tracking-wide"
            >
              Masarap. Affordable. Quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#menu"
                className="px-10 py-4 bg-[#a04527] hover:bg-[#8b3a1f] text-white font-semibold transition-colors duration-300 rounded-xl"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-white hover:bg-gray-100 text-[#a04527] font-semibold transition-colors duration-300 rounded-xl"
              >
                Order Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Carousel */}
      <section className="py-32 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden aspect-[4/3] order-2 lg:order-1"
            >
              <div className="bg-slate-700 rounded-2xl overflow-hidden relative h-full">
                {heroImages.map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={`Xander's Lechon ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === currentSlide ? 1 : 0 }}
                    transition={{ duration: 1.2 }}
                    referrerPolicy="no-referrer"
                  />
                ))}

                {/* Carousel Controls */}
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>

                {/* Carousel Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-[#a04527] w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Masarap. Affordable. Quality.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Craving the perfect roast? Whether you need a feast for the whole family or a quick,
                  budget-friendly meal on the go, Xander's serves up freshly roasted Lechon Manok, juicy
                  Pork Liempo, and delicious rice meals guaranteed to satisfy your hunger.
                </p>
                <p>
                  Every item is freshly prepared with quality ingredients, ensuring great taste at
                  affordable prices.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-4xl font-bold text-[#a04527] mb-2">100%</div>
                  <div className="text-sm text-slate-600">Fresh Daily</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#a04527] mb-2">6</div>
                  <div className="text-sm text-slate-600">Branches</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#a04527] mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Open</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Our Menu - Hot & Fresh Roasts */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Our Menu</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Hot & Fresh Roasts — Perfect for family dinners, gatherings, or when you just want a hearty
              meal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Pork Liempo', price: '₱310', description: 'Tender and juicy' },
              { name: 'Lechon Manok (Regular)', price: '₱290', description: 'Classic favorite' },
              { name: 'Lechon Manok (Jumbo)', price: '₱340', description: 'Extra large serving' },
              { name: 'Lechon Manok (Extra)', price: '₱360', description: 'Maximum satisfaction' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/80 p-10 hover:shadow-xl transition-shadow rounded-2xl"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-slate-500 mb-4">{item.description}</p>
                <p className="text-5xl font-bold text-[#a04527]">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On-The-Go Rice Meals */}
      <section className="py-32 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Rice Meals</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Quick, affordable, and packed with flavor — perfect for lunch or dinner on the go.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Spicy Garlic Chicken Meal', price: '₱60' },
              { name: 'Crispy Leeg Meal', price: '₱50' },
            ].map((meal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 p-12 hover:shadow-xl transition-shadow rounded-2xl"
              >
                <h4 className="text-3xl font-bold text-slate-900 mb-6">{meal.name}</h4>
                <p className="text-6xl font-bold text-[#a04527]">{meal.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sides & Refreshments */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Sides & Drinks</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Complete your meal with our homemade specials and refreshing beverages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Home-made Chicken Lumpia', description: 'Served with our signature sauce' },
              { name: 'Special Siomai', description: 'Ask about our specials' },
              { name: 'Ice-Cold Lemon Soda', description: 'Perfect for hot days' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 p-8 hover:shadow-xl transition-shadow rounded-2xl"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-32 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900">Customer Reviews</h2>

            <div className="border-l-4 border-[#a04527] pl-8 py-4">
              <p className="text-2xl md:text-3xl text-slate-700 mb-8 leading-relaxed italic">
                "Twice na akong nakabili ng kanilang letsong manok. Masarap naman!"
              </p>
              <div>
                <p className="text-lg font-bold text-slate-900">Mercedita S.</p>
                <p className="text-slate-600">Regular Customer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Visit Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Drop by either of our two branches in Calapan City, or send us a message on Facebook for
              delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: 'Nuciti Central Mall',
                location: 'Food Hall (Near Supermarket), Nuciti Central Mall, Calapan City',
              },
              {
                name: 'Comunal',
                location: 'Barangay Comunal, Calapan City, Oriental Mindoro 5200',
                note: 'Tapat ng New Creation Bakery',
              },
            ].map((branch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-3xl font-bold text-slate-900">{branch.name}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{branch.location}</p>
                {branch.note && <p className="text-[#a04527] font-medium">{branch.note}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Hours & Contact */}
      <section id="contact" className="py-32 bg-[#a04527] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Contact Us</h2>
            <p className="text-3xl md:text-4xl font-light mb-6">Open 24/7</p>
            <p className="text-xl text-white/90 max-w-2xl">
              Message our Facebook Page to place an order for delivery or for any inquiries.
              <br />
              <span className="text-[#46f805] font-semibold">
                Interested in franchising? <a href="/franchise-opportunities" className="underline hover:text-white">Learn more about owning your own store!</a>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#a04527] font-semibold transition-colors duration-300 rounded-xl"
            >
              <MessageCircle size={24} />
              <span className="text-lg">Message on Facebook</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#a04527] font-semibold transition-colors duration-300 rounded-xl"
            >
              <Phone size={24} />
              <span className="text-lg">Call Us</span>
            </Link>
          </motion.div>
        </div>
      </section>

    

    
    </div>
  );
}
