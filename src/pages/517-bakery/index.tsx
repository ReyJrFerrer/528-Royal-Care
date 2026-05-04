import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, CakeSlice, ChevronLeft, ChevronRight, MessageCircle, Star, Users, Sparkles, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import logo517 from '@/assets/517bakery/517Bakery-logo.svg';

const heroImages = [
  'https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/616808165_2789056431432366_1870926798069140740_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGW7sK_7uHOVe_WZLGUqbWdKGzTYC7clDkobNNgLtyUOQntfvSZGyMq7eJAxska3XRLaeWg_suI67-LUJRygD2K&_nc_ohc=EHNwe-2FwMYQ7kNvwHe-sGT&_nc_oc=AdoNyYTP-u4p65JOLyD4LDmny3n4lOjXAnMq1Nvgh4cc3CWAV9jJxtoOvrPz3xEX7i4&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=MNj-c1BKcVtMAOHgY_veUg&_nc_ss=7a3a8&oh=00_Af0kDH67JP6U73_og-IdOuEvjYVLj3cuY5LDkfXHI4i7qg&oe=69D6911E',
  'https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/514530142_2607830062888338_6279359940407710573_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG7od6H-AkfKIj8JDSh6q5UzVM_f3QuiUHNUz9_dC6JQbIGfwS3gQPT2Gg3frVXPWosFasVHil7Hd4OWKJMp1V2&_nc_ohc=byuQ36CZjsMQ7kNvwFGtvSf&_nc_oc=AdpGNBicf-CtESq7f8tbDuJt1P__FoFJYWdzoArdAk3M0CSIKILrkpqYLEqrO6Fsaeg&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=dovEFkIxWMoP1x2ZZK4pWw&_nc_ss=7a3a8&oh=00_Af3uKVxfPtJZEaR-2pFQdbdxqRaIBQBbZlwFCqqaEq83Bw&oe=69D68BD8',
  'https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/469454101_1113483393770809_8886681112257621535_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH8v5VInpbIR6SshT4So4PUToRd9ZWN9ZROhF31lY31lLITVqMPuuSyxvGVlnUVK7oatM4ojKeUGHtxPCtPd3mc&_nc_ohc=M63C4UhO04AQ7kNvwHDjtuc&_nc_oc=AdpCGNQSwDoTFFxEJcbOe73B7AzmwE9-7CttrwAkaoyz8aXyLtldj5Wp1V0iAH5hetE&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=aKgfY8OLkg3cTfnXxpxiaw&_nc_ss=7a3a8&oh=00_Af2zTijuiIJzK0v7MnuFMPilKIOGCu4mKOedcQFoe4ZdRg&oe=69D6A24D',
];

export default function Bakery517() {
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
        <title>New Creation 517 Bakery</title>
        <link rel="icon" type="image/png" href="/517Bakery-logo.svg?v=bakery" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/605603825_2774294856241857_150239403152761515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHz-7Iwk-bm0Tn7fW1HqdHCXlq647-GtgVeWrrjv4a2BZrTuJTD_GAwcgr4q6jXEkZJHXGylRzWJVwoHaHCXYDz&_nc_ohc=sRF9dbFO1-0Q7kNvwEUzhzD&_nc_oc=AdqlJlTYJnjWMLJCyHpQM1Wg54PjUl271ynssKFppdxISmkFcjKc8ZDsCCih4tB_w6I&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=yI-lC1ZgAPKG6P3OqI12YQ&_nc_ss=7a3a8&oh=00_Af3K2rIrXbjK3s5NALQeQnlkU8C60eioz0EFZewB7t6V6w&oe=69D69ECA"
            alt="Fresh baked goods"
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
            >
              <img
                src={logo517}
                alt="New Creation 517 Bakery Logo"
                className="h-80 md:h-85 object-contain mx-auto"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              New Creation 517 Bakery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-2xl text-white/95 mb-8 font-light italic"
            >
              "Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!" — 2 Corinthians 5:17
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#fdd304] mb-12 font-medium"
            >
              Baked with love, served with joy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#cakes"
                className="px-10 py-4 bg-[#fe023c] hover:bg-[#e0012f] text-white font-semibold transition-colors duration-300 rounded-xl"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-white hover:bg-gray-100 text-[#8e180d] font-semibold transition-colors duration-300 rounded-xl"
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
              className="relative overflow-hidden aspect-[4/3] order-2 lg:order-1 rounded-2xl bg-slate-700"
            >
              {heroImages.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`New Creation 517 Bakery ${idx + 1}`}
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
                <ChevronLeft className="text-white" size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-colors"
              >
                <ChevronRight className="text-white" size={20} />
              </button>

              {/* Carousel Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlide ? 'bg-[#fdd304] w-10' : 'bg-white/50 w-1.5 hover:bg-white/75'
                    }`}
                  />
                ))}
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
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Welcome to New Creation 517 Bakery! From our humble beginnings to now having 26 branches
                  all over Abra, Pangasinan, and Mindoro province, we are dedicated to bringing joy to your
                  everyday life and special milestones.
                </p>
                <p>
                  From our daily fresh-baked breads to our beautifully crafted custom cakes, we bake with
                  love, care, and a commitment to our community.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-4xl font-bold text-[#8e180d] mb-2">26</div>
                  <div className="text-sm text-slate-600">Branches</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#8e180d] mb-2">Free</div>
                  <div className="text-sm text-slate-600">Delivery</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#8e180d] mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Open</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-32 bg-[#8e180d] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light leading-relaxed"
          >
            Baked with love, served with joy — celebrating every milestone
          </motion.p>
        </div>
      </section>

      {/* Custom Cakes */}
      <section id="cakes" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Custom Cakes</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Celebrate your milestones with a cake that looks just as good as it tastes!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Customized Cakes', description: 'Tailored exactly to your theme and design' },
              { name: 'Money Cakes', description: 'Add a fun, rewarding surprise to your celebration!' },
              { name: 'Fondant Cakes', description: 'Smooth, elegant, and highly detailed designs' },
              { name: 'Number Cakes', description: 'Perfect for birthdays and anniversaries' },
              { name: 'Cheese Cakes', description: 'Rich, creamy, and baked to perfection' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/80 p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <CakeSlice className="text-[#cc8d2b] mb-4" size={32} />
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 italic">
              To reserve your custom cake, simply message us on our Facebook page or text us with your design ideas!
            </p>
          </div>
        </div>
      </section>

      {/* Everyday Bakes */}
      <section className="py-32 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Everyday Bakes</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Looking for your daily snacks or sweet cravings? We have a delightful selection ready for you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: 'Royal Bibingka', description: 'Traditional Filipino rice cake' },
              { name: 'Custard Cake', description: 'Creamy and delicious' },
              { name: 'Caramel Cake', description: 'Sweet indulgence in every bite' },
              { name: 'Fresh Loaf Bread', description: 'Baked fresh daily' },
              { name: 'Homemade Peanut Butter', description: 'Perfect spread for any bread' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/80 p-8 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#8e180d] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-white/80 max-w-2xl">
              "Apakasarap talaga!" – We pride ourselves on the delicious feedback from our loyal customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Delicious', desc: 'Proudly serving the best baked goods in town' },
              { icon: Truck, title: 'Free Delivery', desc: 'Hassle-free delivery within Bangued area' },
              { icon: Clock, title: 'Always Open', desc: 'Cravings dont have a schedule — we are open 24/7!' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-[#cc8d2b]/20 text-[#cc8d2b] rounded-2xl flex items-center justify-center mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
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

            <div className="border-l-4 border-[#8e180d] pl-8 py-4">
              <p className="text-2xl md:text-3xl text-slate-700 mb-8 leading-relaxed italic">
                "Apakasarap talaga! Laging bukas ang bakery na 'to. libre pa ang delivery!"
              </p>
              <div>
                <p className="text-lg font-bold text-slate-900">Maria L.</p>
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
              We are growing! Thanks to your continuous support, we now have 26 locations to serve you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'NCB 517 McKenley', location: 'Zone 7, Bangued, Abra' },
              { name: 'NCB 517 Zone 5', location: 'Bangued (Beside ADTEMCO Coop), Abra' },
              { name: 'NCB 517 Calaba', location: 'Bangued (In front of AMDC), Abra' },
              { name: 'NCB 517 Calapan City', location: 'Calapan City, Oriental Mindoro' },
              { name: 'NCB 517 Villasis', location: 'Villasis, Pangasinan' },
              { name: 'NCB 517 Urdaneta', location: 'Urdaneta City, Pangasinan' },
            ].map((branch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 p-8 rounded-2xl"
              >
                <MapPin className="text-[#fe023c] mb-4" size={24} />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{branch.name}</h3>
                <p className="text-slate-600">{branch.location}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600">
              Plus 21 more locations across Abra, Pangasinan, and Mindoro!
            </p>
          </div>
        </div>
      </section>

      {/* Store Hours & Contact */}
      <section id="contact" className="py-32 bg-[#8e180d] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Contact Us</h2>
            <p className="text-3xl md:text-4xl font-light mb-6">Always Open</p>
            <p className="text-xl text-white/90 max-w-2xl mb-2">
              Contact Number: 09397535636 (Jan Dale Zarate)
            </p>
            <p className="text-xl text-white/90 max-w-2xl mb-2">
              Message us directly on our Facebook Page to order!
            </p>
              <p className="text-xl text-white/90 max-w-2xl">
              Email Address: zaratejandadale15@gmail.com

              <br/>
                 <span className="text-[#fdd304] font-semibold">
              Interested in franchising? <Link to="/franchise-opportunities" className="underline hover:text-white">Learn more about owning your own store!</Link>
            </span>
            </p>
          
            <br />
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://www.facebook.com/NC517"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#fe023c] hover:bg-[#e0012f] text-white font-semibold transition-colors duration-300 rounded-xl"
            >
              <MessageCircle size={24} />
              <span className="text-lg">Message on Facebook</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#8e180d] font-semibold transition-colors duration-300 rounded-xl"
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
