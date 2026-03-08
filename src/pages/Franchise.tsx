import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Shield, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import franchiseImg from "@/assets/presotea-franchise.jpg";
import storeImg from "@/assets/presotea-store.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } }),
};

const benefits = [
  { icon: TrendingUp, title: "Proven Business Model", desc: "250+ global locations with a track record of success across 10+ countries." },
  { icon: Shield, title: "Full Training & Support", desc: "Comprehensive training programs, operational manuals, and ongoing marketing support." },
  { icon: Users, title: "Strong Brand Recognition", desc: "An established international brand with loyal customers and growing market demand." },
  { icon: Lightbulb, title: "Innovative Technology", desc: "Patented Teapresso machine ensures product consistency and simplifies operations." },
];

const Franchise = () => (
  <main>
    <PageBanner title="Franchise" subtitle="Partner with a globally recognized tea brand" />

    {/* Why Presotea */}
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label block mb-3">Why Presotea</span>
            <h2 className="section-title">
              A Fresh <span className="section-title-script">Opportunity</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              The bubble tea market continues to grow globally. As a Presotea franchise partner, you'll benefit from our proven business model, patented technology, and comprehensive support system that has made us a leader in the industry.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <img src={franchiseImg} alt="Presotea franchise" className="rounded-2xl shadow-lg w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-warm-white py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="section-label block mb-3">Benefits</span>
          <h2 className="section-title">
            Why Partner <span className="section-title-script">With Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-popover p-8 rounded-2xl shadow-sm flex gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <b.icon size={24} className="text-tea-green" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Store Showcase */}
    <section className="relative min-h-[400px] flex items-center overflow-hidden">
      <img src={storeImg} alt="Presotea store" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="container mx-auto relative z-10 text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground">
          Ready to Start Your <span className="section-title-script">Journey?</span>
        </h2>
        <p className="text-primary-foreground/75 mt-4 max-w-lg mx-auto">
          Fill out our franchise inquiry form and our team will get back to you within 48 hours.
        </p>
        <Link to="/contact" className="btn-primary-custom mt-8 inline-flex">
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    {/* Franchise Form */}
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <span className="section-label block mb-3">Apply Now</span>
          <h2 className="section-title">
            Franchise <span className="section-title-script">Inquiry</span>
          </h2>
        </div>
        <form action="https://formspree.io/f/mbdabbql" method="POST" className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" name="name" placeholder="Full Name" required className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input type="email" name="email" placeholder="Email Address" required className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input type="text" name="city" placeholder="Preferred City" className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <input type="text" name="budget" placeholder="Estimated Budget" className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          <textarea name="message" placeholder="Tell us about your experience and interest" rows={5} className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          <input type="hidden" name="_subject" value="New Franchise Inquiry - Presotea BC" />
          <button type="submit" className="btn-primary-custom w-full justify-center">
            Submit Inquiry <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  </main>
);

export default Franchise;
