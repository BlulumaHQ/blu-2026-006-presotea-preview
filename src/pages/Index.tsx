import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Award, Coffee, Heart } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import heroBg from "@/assets/hero-bg.jpg";
import drinkFruitTea from "@/assets/drink-fruit-tea.jpg";
import drinkMilkTea from "@/assets/drink-milk-tea.jpg";
import drinkMatcha from "@/assets/drink-matcha.jpg";
import drinkLatte from "@/assets/drink-latte.jpg";
import drinkCloud from "@/assets/drink-cloud.jpg";
import drinkTeapresso from "@/assets/drink-teapresso.jpg";
import storeImg from "@/assets/presotea-store.jpg";
import aboutImg from "@/assets/presotea-about-1.jpg";
import leafDecoration from "@/assets/leaf-decoration.png";
import mascot from "@/assets/presotea-mascot.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const featuredDrinks = [
  { name: "Passion Fruit Pineapple Tea", category: "Fruit Tea", image: drinkFruitTea },
  { name: "Okinawa Brown Sugar Milk Tea", category: "Milk Tea", image: drinkMilkTea },
  { name: "Matcha Latte", category: "Fresh Milk Latte", image: drinkMatcha },
];

const menuCategories = [
  { name: "Milk Tea Series", desc: "Classic blends with premium tea bases", image: drinkMilkTea, price: "From $5.50" },
  { name: "Fresh Teapresso", desc: "Single-origin teas brewed to order", image: drinkTeapresso, price: "From $4.50" },
  { name: "Fruit Tea Series", desc: "Seasonal fruits, freshly made", image: drinkFruitTea, price: "From $5.75" },
  { name: "Fresh Milk Latte", desc: "Premium tea topped with fresh milk", image: drinkLatte, price: "From $5.95" },
  { name: "Cloud Series", desc: "Fruit-based slushies & smoothies", image: drinkCloud, price: "From $6.25" },
  { name: "Signature Special", desc: "Unique house blends", image: drinkMatcha, price: "From $6.50" },
];

const stats = [
  { number: "250+", label: "Global Locations" },
  { number: "10+", label: "Countries" },
  { number: "100%", label: "Fresh Brewed" },
  { number: "2006", label: "Established" },
];

const testimonials = [
  {
    text: "The freshness is unmatched. You can taste the difference when tea is brewed to order rather than sitting in a pot all day. Presotea changed how I think about bubble tea.",
    author: "Sarah L.",
    role: "Regular Customer",
  },
  {
    text: "Skip the line with their app and customize everything exactly how you want it. The Okinawa Brown Sugar Milk Tea is my daily ritual now.",
    author: "James C.",
    role: "App User",
  },
  {
    text: "As someone who appreciates authentic tea culture, Presotea's Teapresso technology is a game-changer. Real tea taste, every single time.",
    author: "Michelle W.",
    role: "Tea Enthusiast",
  },
];

const Index = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Fresh bubble tea drinks" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} custom={0} className="section-label !text-primary-foreground/70 block mb-4">
              Presotea 鮮茶道
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground font-display"
            >
              Fresh Tea,{" "}
              <span className="section-title-script text-5xl md:text-6xl lg:text-7xl">Fresh Made!</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-primary-foreground/80 max-w-lg leading-relaxed"
            >
              Experience the natural flavor of tea brewed to order using our innovative espresso-type extraction technology.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary-custom">
                View Our Menu <ArrowRight size={16} />
              </Link>
              <Link to="/locations" className="btn-outline-custom !border-primary-foreground/50 !text-primary-foreground hover:!bg-primary-foreground/10">
                Find a Store <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-cream py-20 md:py-28 relative">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-label block mb-3">
              Our Philosophy
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="section-title">
              Signature Taste You'll Love{" "}
              <span className="section-title-script">Each Time</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Fresh Ingredients", desc: "High-quality seasonal fruits sourced directly from Taiwan and local farms." },
              { icon: Coffee, title: "Teapresso Technology", desc: "Patented espresso-type machine extraction replaces conventional large-kettle brewing." },
              { icon: Award, title: "Fifth Generation", desc: "Originating from a famous five-generation tea factory in Taiwan since 2006." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-tea-green" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-charcoal">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DRINKS */}
      <section className="bg-warm-white py-20 md:py-28 relative">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="section-label block mb-3">Our Picks</span>
            <h2 className="section-title">
              What's Your Today's <span className="section-title-script">Pick?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {featuredDrinks.map((drink, i) => (
              <motion.div
                key={drink.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-drink"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={drink.image} alt={drink.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <span className="text-xs uppercase tracking-widest text-tea-green font-medium">{drink.category}</span>
                  <h3 className="font-display text-lg font-semibold mt-1 text-charcoal">{drink.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary-custom">
              Full Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW with store image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[400px]">
            <img src={aboutImg} alt="Presotea fresh tea" className="w-full h-full object-cover" />
          </div>
          <div className="bg-olive-section flex items-center p-10 md:p-16 lg:p-20">
            <div>
              <span className="section-label !text-gold block mb-3">Warm & Refreshing</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground leading-tight">
                The Concept of Tea <span className="section-title-script">Reimagined by Us</span>
              </h2>
              <p className="text-primary-foreground/75 mt-6 leading-relaxed">
                Presotea insists on providing freshness and healthiness in drinks. Our tea-blending team devotes themselves to researching and developing drinks that satisfy modern tastes while maintaining a natural flavor profile.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold font-display text-gold">{stat.number}</div>
                    <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary-custom mt-8 inline-flex">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label block mb-3">Explore</span>
            <h2 className="section-title">
              Our <span className="section-title-script">Menu</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i % 3}
                className="flex items-center gap-4 p-4 rounded-xl bg-popover hover:shadow-md transition-shadow"
              >
                <img src={cat.image} alt={cat.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-charcoal">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{cat.desc}</p>
                  <span className="text-xs font-semibold text-tea-green mt-1 block">{cat.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-outline-custom">
              View Full Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* STORE SHOWCASE */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        <img src={storeImg} alt="Presotea Store Interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container mx-auto relative z-10 text-center py-20">
          <span className="section-label !text-gold block mb-3">Visit Us</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground">
            Find Your Nearest <span className="section-title-script">Presotea</span>
          </h2>
          <p className="text-primary-foreground/75 mt-4 max-w-lg mx-auto">
            Multiple locations across British Columbia to serve you the freshest tea every day.
          </p>
          <Link to="/locations" className="btn-primary-custom mt-8 inline-flex">
            View Locations <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label block mb-3">Testimonials</span>
            <h2 className="section-title">
              What Our Customers <span className="section-title-script">Love</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-popover p-8 rounded-2xl shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Heart key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-tea-green font-semibold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-charcoal">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APP CTA */}
      <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
        <img src={leafDecoration} alt="" className="absolute top-0 left-0 w-40 opacity-15 -rotate-45 pointer-events-none" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">Mobile App</span>
              <h2 className="section-title">
                Skip the Line, <span className="section-title-script">Order Ahead!</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Download the Presotea Canada App and enjoy seamless ordering, customized drinks, rewards, and exclusive promotions right from your phone.
              </p>
              <Link to="/app" className="btn-primary-custom mt-8 inline-flex">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex justify-center">
              <img src={mascot} alt="Presotea Mascot" className="w-56 md:w-72 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-olive-section py-20">
        <div className="container mx-auto text-center">
          <span className="section-label !text-gold block mb-3">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
            Want to Get to <span className="section-title-script">Know Us?</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-md mx-auto">
            Have a question, partnership inquiry, or just want to say hello? We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary-custom mt-8 inline-flex">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
