import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Gift, Star, Zap } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import mascot from "@/assets/presotea-mascot.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } }),
};

const features = [
  { icon: Zap, title: "Skip the Line", desc: "Order ahead and pick up without waiting. Your fresh tea, ready when you are." },
  { icon: Star, title: "Easy Customization", desc: "Adjust sweetness, ice level, and toppings exactly to your preference." },
  { icon: Gift, title: "Exclusive Rewards", desc: "Earn points with every purchase and redeem them for free drinks and special offers." },
  { icon: Smartphone, title: "Seamless Experience", desc: "Track your orders, view history, and discover new seasonal drinks effortlessly." },
];

const AppPage = () => (
  <main>
    <PageBanner title="Presotea App" subtitle="Your favorite tea, just a tap away" />

    {/* Features */}
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label block mb-3">Download Now</span>
            <h2 className="section-title">
              Skip the Line, <span className="section-title-script">Order Ahead!</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              The Presotea Canada App makes ordering your favorite drinks easier than ever. Enjoy seamless ordering, customized drinks, rewards, and exclusive promotions right from your phone.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
                App Store <ArrowRight size={16} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-outline-custom">
                Google Play <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.img
              src={mascot}
              alt="Presotea Mascot"
              className="w-56 md:w-72"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Feature Grid */}
    <section className="bg-warm-white py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="section-label block mb-3">App Features</span>
          <h2 className="section-title">
            Why You'll <span className="section-title-script">Love It</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-popover p-8 rounded-2xl shadow-sm flex gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <f.icon size={24} className="text-tea-green" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AppPage;
