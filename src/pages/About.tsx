import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { Leaf, Coffee, Award, Target } from "lucide-react";
import aboutImg from "@/assets/presotea-about-1.jpg";
import storeImg from "@/assets/presotea-store.jpg";
import franchiseImg from "@/assets/presotea-franchise.jpg";
import leafDecoration from "@/assets/leaf-decoration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
};

const About = () => (
  <main>
    <PageBanner title="About Us" subtitle="Our story, mission, and the Teapresso revolution" />

    {/* Story */}
    <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
      <img src={leafDecoration} alt="" className="absolute -right-10 top-10 w-48 opacity-10 pointer-events-none" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label block mb-3">Our Story</span>
            <h2 className="section-title">
              From Taiwan to <span className="section-title-script">British Columbia</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Presotea originated from a famous fifth-generation tea factory in Taiwan. In 2006, the brand was launched to challenge the conventional tea-brewing method. By using high-end technology usually reserved for coffee, Presotea ensures every cup is fresh and consistent.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              The first BC location opened in Richmond in 2016, bringing authentic Taiwanese tea culture with modern innovation to Canadian communities. Today, Presotea serves customers across multiple locations in British Columbia.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <img src={aboutImg} alt="Presotea fresh tea experience" className="rounded-2xl shadow-lg w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-warm-white py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-popover p-10 rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
              <Target size={24} className="text-tea-green" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide healthy, affordable, and high-quality fresh tea drinks to customers by utilizing transparent manufacturing processes and traditional tea art.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="bg-popover p-10 rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5">
              <Award size={24} className="text-tea-green" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the customer's #1 ideal brand of tea drink globally by blending traditional tea culture with modern innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Teapresso Technology */}
    <section className="bg-olive-section py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src={franchiseImg} alt="Presotea Teapresso technology" className="rounded-2xl shadow-lg w-full" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <span className="section-label !text-gold block mb-3">Innovation</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground leading-tight">
              The Teapresso <span className="section-title-script">Revolution</span>
            </h2>
            <p className="text-primary-foreground/75 mt-6 leading-relaxed">
              Presotea revolutionized the bubble tea industry by replacing conventional large-kettle brewing with a patented espresso-type machine extraction process. This ensures every cup maintains the highest quality, consistency, and freshness.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: Leaf, label: "Fresh Ingredients" },
                { icon: Coffee, label: "Brewed to Order" },
                { icon: Award, label: "Patented Process" },
                { icon: Target, label: "Consistent Quality" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <span className="text-sm font-medium text-primary-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Store Interior */}
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto text-center">
        <span className="section-label block mb-3">Our Stores</span>
        <h2 className="section-title mb-10">
          Modern & <span className="section-title-script">Inviting</span>
        </h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src={storeImg} alt="Presotea store interior" className="rounded-2xl shadow-lg w-full max-w-4xl mx-auto" />
        </motion.div>
        <p className="text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
          Our stores feature a modern, bright aesthetic that reflects the freshness and quality of our products. Every Presotea location is designed to provide a welcoming space for tea lovers.
        </p>
      </div>
    </section>
  </main>
);

export default About;
