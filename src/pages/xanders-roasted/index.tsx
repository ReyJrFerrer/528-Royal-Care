import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageCircle,  Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/643389614_923161453403702_8860218479893790935_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG11Djve1xNWFre7xjJXb5f1POlA19fSxbU86UDX19LFnbeod2wMxNk3wemz5jqsDUonCBqa-LAqCAm7Zr6aBMh&_nc_ohc=nAZ_7Ibfpg4Q7kNvwExBbJ1&_nc_oc=AdoRRDMBi7SEoSHEAoeyd0_PItWFdO-IOZWEzhQYyqky6CwExSKT6MuIG6snV6VQjt4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=Lf_RPVFv6FAfZ9ezBzjGeQ&_nc_ss=7a3a8&oh=00_Af3DBC3CKmq4ZkBthzBwzjNs1cl9xFHvaf8u0-ZeRW5IUg&oe=69D683C9',
  'https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/644477203_1500411578756765_91466168498262308_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHSJAaDHxYF1xihr-JTBvkcWMo07hRxCkpYyjTuFHEKSu5ZNPFTBsYGoHJVOwVSUMOI_87bohoB6eRBjI2DsQyJ&_nc_ohc=ac4rO6yp1HcQ7kNvwFKtCMO&_nc_oc=AdpgaaeE5vN9VQIYJpRSOrEiWJ6LAq555ODd6oZVsGARTu9SHjnUzOIShEoXb1fU1C0&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=ZabKIZTHZKvXN4e0CKZEzg&_nc_ss=7a3a8&oh=00_Af252QfEWxeSFO7RPyI0dHPigsgY0JrauDmLgNm0MfUfaA&oe=69D66353',
  'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/548121307_122099461947021542_8213320326586436826_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeENvk0dBt6TwfuWMjIOrdJYOTdP83BnXXQ5N0_zcGdddNGt6FwVzIVf9i_P7beIim13B_iIy3gACSzNbv0DFhUF&_nc_ohc=QqXVQTVa3LoQ7kNvwF9xfFk&_nc_oc=AdpaHWu4EFPqdhkM3i_QEfbiUP-vs5ko_rVjyTgvwe2IUH6yN6QG3JDznX8DbRsCAHY&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=UX8rcuQekvOB9KlcJKQKqA&_nc_ss=7a3a8&oh=00_Af335-iYSMF3gtuE-4-aGICn5Aw8r2f16GhlemVLamP2vw&oe=69D6847E',
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/655611254_122127442437021542_8360373605262442929_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFs4prBmu4o54AZ9i3Qs_ixVlZdXLitxy5WVl1cuK3HLrKkd4AeDj97tdbCAZthEDGrfOpAgdEyXeUJx-MK9p8F&_nc_ohc=2osrOBt-0cUQ7kNvwEi-N03&_nc_oc=AdqoNdWEtHdVFKZQnEil1it0qF74kawHlJheb_pCcSv1B9jHy5d8NohG_QKcJ-vPzmo&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=gWyUEvlWBot7Lb1_YBn5nQ&_nc_ss=7a3a8&oh=00_Af1df3_DluLWON6Gt9orbR4uhHZaa2kLwQkFe6P1G3VJ1Q&oe=69D66432"
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
                src="src/assets/xandersLechon/xandersLechon-logo.png"
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
                className="px-10 py-4 bg-[#a04527] hover:bg-[#8b3a1f] text-white font-semibold transition-colors duration-300"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-white hover:bg-gray-100 text-[#a04527] font-semibold transition-colors duration-300"
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
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-4 transition-colors"
              >
                <ChevronLeft className="text-slate-900" size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-4 transition-colors"
              >
                <ChevronRight className="text-slate-900" size={20} />
              </button>

              {/* Carousel Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 transition-all ${
                      idx === currentSlide ? 'bg-white w-10' : 'bg-white/50 w-1.5 hover:bg-white/75'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
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
                className="bg-white p-10 hover:bg-[#f8f7f4] transition-colors duration-300"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                className="bg-white p-12 hover:bg-white/80 transition-colors duration-300"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                className="border-l-2 border-[#a04527] pl-6"
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
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-[#a04527] font-semibold transition-colors duration-300"
            >
              <MessageCircle size={24} />
              <span className="text-lg">Message on Facebook</span>
            </a>
            <a
              href="tel:+639123456789"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white transition-colors duration-300"
            >
              <Phone size={24} />
              <span className="text-lg">Call Us</span>
            </a>
          </motion.div>
        </div>
      </section>

    

    
    </div>
  );
}
