import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
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
        <div className="max-w-3xl mx-auto">
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
