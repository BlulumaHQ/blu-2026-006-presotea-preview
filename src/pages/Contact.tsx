import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } }),
};

const Contact = () => (
  <main>
    <PageBanner title="Contact Us" subtitle="We'd love to hear from you" />

    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-label block mb-3">Send a Message</span>
            <h2 className="section-title mb-8">
              Get in <span className="section-title-script">Touch</span>
            </h2>
            <form action="https://formspree.io/f/mbdabbql" method="POST" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="name" placeholder="Your Name" required className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <input type="email" name="email" placeholder="Email Address" required className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <input type="text" name="subject" placeholder="Subject" className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <textarea name="message" placeholder="Your Message" rows={6} required className="w-full px-5 py-3 rounded-xl border border-border bg-popover text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <input type="hidden" name="_subject" value="New Contact - Presotea BC" />
              <button type="submit" className="btn-primary-custom">
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <div className="bg-popover p-8 rounded-2xl shadow-sm mb-6">
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-tea-green flex-shrink-0" />
                  <div>
                    <div className="font-medium text-charcoal">Head Office</div>
                    <div className="text-sm text-muted-foreground">British Columbia, Canada</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-tea-green flex-shrink-0" />
                  <div>
                    <div className="font-medium text-charcoal">Email</div>
                    <a href="mailto:info@presoteabc.ca" className="text-sm text-muted-foreground hover:text-tea-green transition-colors">
                      info@presoteabc.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <iframe
                title="Presotea BC Location"
                src="https://www.google.com/maps?q=Presotea+Richmond+BC&output=embed"
                className="w-full h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
