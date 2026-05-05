import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Phone,  Tag, Heart, ChevronLeft, ChevronRight, MessageCircle, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logoMilktea from '@/assets/iAmMilktea/iammilktea-logo.png';
import coverPhoto from '@/assets/iAmMilktea/iAmMilkTea-Coverphoto.jpg';
import carousel1 from '@/assets/iAmMilktea/iammilktea-carousel1.jpg';
import carousel2 from '@/assets/iAmMilktea/iammilktea-carousel2.jpg';
import carousel3 from '@/assets/iAmMilktea/iammilktea-carousel3.jpg';
import carousel4 from '@/assets/iAmMilktea/iammilktea-carousel4.jpg';
import carousel5 from '@/assets/iAmMilktea/iammilktea-carousel5.jpg';
import carousel6 from '@/assets/iAmMilktea/iammilktea-carousel6.jpg';

const heroImages = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

export default function IAmMilktea() {
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
        <title>I AM MILKTEA</title>
        <link rel="icon" type="image/png" href="/iammilktea-logo.png?v=milktea" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={coverPhoto}
            alt="I AM MILKTEA Background"
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
                src={logoMilktea}
                alt="I AM MILKTEA Logo"
                className="h-80 md:h-85 object-contain mx-auto"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              I AM MILKTEA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-3xl text-white/95 mb-12 font-light tracking-wide"
            >
              "I Am... Milktea. I Am your daily dose of Joy."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#menu"
                className="px-10 py-4 bg-[#94a036] hover:bg-[#b8c015] text-[white] font-semibold transition-colors duration-300 rounded-xl"
              >
                View Menu
              </a>
              <a
                href="mailto:info@iammilktea.com"
                className="px-10 py-4 bg-white hover:bg-gray-100 text-[#94a036] font-semibold transition-colors duration-300 rounded-xl"
              >
                Email Us
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
                    alt={`I AM MILKTEA ${idx + 1}`}
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
                        idx === currentSlide ? 'bg-[#d0d91b] w-8' : 'bg-white/40 w-2 hover:bg-white/60'
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
                Your Daily Dose of Happiness
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Your daily dose of happiness is just a visit away! Whether you are craving a creamy,
                  refreshing drink or looking for the perfect spot to bond with your barkada, we've got
                  a cup with your name on it.
                </p>
                <p>
                  We serve a wide variety of creamy milktea flavors, perfectly paired with our daily
                  fresh-baked breads.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-4xl font-bold text-[#94a036] mb-2">100%</div>
                  <div className="text-sm text-slate-600">Fresh Daily</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#94a036] mb-2">1</div>
                  <div className="text-sm text-slate-600">Location</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#94a036] mb-2">6</div>
                  <div className="text-sm text-slate-600">Days/Week</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-32 bg-[#94a036] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light leading-relaxed"
          >
            Refreshing moments in every cup — the perfect blend of taste and joy
          </motion.p>
        </div>
      </section>

      {/* Cup Sizes & Pricing */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Our Cup Sizes</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Choose your perfect size — from a quick sip to a generous treat!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { size: 'Small', volume: '12 oz', price: 'From ₱45', description: 'Perfect for a quick treat' },
              { size: 'Medium', volume: '16 oz',price: 'From ₱60', description: 'The classic choice' },
              { size: 'Large', volume: '22 oz',price: 'From ₱75', description: 'Maximum satisfaction' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/80 p-10 hover:shadow-xl transition-shadow rounded-2xl"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.size}</h4>
                <p className="text-slate-500 mb-4">{item.volume}</p>
                <p className="text-5xl font-bold text-[#94a036]">{item.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">Ask our friendly staff about our available flavors and fresh bread of the day!</p>
          </div>
        </div>
      </section>

      {/* Deals & Promos */}
      <section className="py-32 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Deals & Promos</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              We love treating our customers! Check out our latest specials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 p-12 hover:shadow-xl transition-shadow rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-[#d0d91b]" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">Barkada Treat-Tea!</h3>
              </div>
              <p className="text-slate-600 mb-4 text-lg">
                Buy any 3 cups (any size) and get 1 <strong>FREE Small Size</strong> cup of any flavor!
              </p>
              <p className="text-sm text-slate-500">Perfect for sharing with your squad.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 p-12 hover:shadow-xl transition-shadow rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Tag className="text-[#d0d91b]" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">Double Delight Promo!</h3>
              </div>
              <p className="text-slate-600 mb-4 text-lg">
                Buy 1, Take 1 with a <strong>50% discount</strong> on your second cup!
              </p>
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <p className="text-[#94a036] font-bold">Small</p>
                  <p className="text-2xl font-bold text-slate-900">₱45</p>
                </div>
                <div>
                  <p className="text-[#94a036] font-bold">Medium</p>
                  <p className="text-2xl font-bold text-slate-900">₱60</p>
                </div>
                <div>
                  <p className="text-[#94a036] font-bold">Large</p>
                  <p className="text-2xl font-bold text-slate-900">₱75</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-lg">Follow our Facebook Page @IamMilkteaUrdaneta for limited-time seasonal promos, new flavors, and giveaways!</p>
          </div>
        </div>
      </section>

      {/* Philosophy / Sunday Rest */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="mx-auto mb-8 text-[#d5261e]" size={64} />
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Our Philosophy</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              At I AM MILKTEA, we believe that just as a good cup of tea needs time to steep, we also need
              time to rest and reconnect.
            </p>
            <div className="bg-[#f8f7f4] p-12 shadow-lg border border-slate-100 max-w-2xl mx-auto rounded-2xl">
              <h3 className="text-2xl font-bold text-[#d5261e] mb-4">Sunday Rest Day</h3>
              <p className="text-slate-600 italic mb-4 text-lg">Psalm 136:1 - "Give thanks to the Lord for He is good. His love endures forever."</p>
              <p className="text-slate-600 text-lg">
                In observance of the Lord's Day, our store is <strong>CLOSED every Sunday</strong>. We encourage
                our staff and customers to spend this time in fellowship, rest, and worship with family. We
                recharge our hearts on Sunday so we can serve you with even more joy from Monday to Saturday!
              </p>
            </div>
          </motion.div>
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

            <div className="border-l-4 border-[#d0d91b] pl-8 py-4">
              <p className="text-2xl md:text-3xl text-slate-700 mb-8 leading-relaxed italic">
                "Best milktea in town! The creaminess is just right and the flavors are amazing."
              </p>
              <div>
                <p className="text-lg font-bold text-slate-900">Maria C.</p>
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
              Drop by our store in Urdaneta City, or send us a message on Facebook for any inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-slate-900">Urdaneta City</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Zone 2 Pedro T. Orata (Bactad), Urdaneta City, Pangasinan, Philippines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Hours & Contact */}
      <section id="contact" className="py-32 bg-[#94a036] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Contact Us</h2>
            <p className="text-3xl md:text-4xl font-light mb-6">Open Monday - Saturday</p>
            <p className="text-xl text-white/90 max-w-2xl">
              Message our Facebook Page or give us a call for any inquiries or orders.
              <br />
              <span className="text-[#dfe83e] font-semibold">
                Interested in franchising? <Link to="/franchise-opportunities" className="underline hover:text-white">Learn more about owning your own store!</Link>
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
              href="https://www.facebook.com/IAmMilkteaUrdaneta"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#94a036] font-semibold transition-colors duration-300 rounded-xl"
            >
              <MessageCircle size={24} />
              <span className="text-lg">Message on Facebook</span>
            </a>
            <a
              href="tel:+639123456789"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white transition-colors duration-300 rounded-xl"
            >
              <Phone size={24} />
              <span className="text-lg">Email Us</span>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
