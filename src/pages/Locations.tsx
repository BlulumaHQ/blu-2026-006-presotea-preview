import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { MapPin, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const locations = [
  { name: "Terra Nova, Richmond", address: "3631 No. 3 Rd, Richmond, BC", hours: "11:00 AM – 9:00 PM", mapQuery: "Presotea+Terra+Nova+Richmond+BC" },
  { name: "Tsawwassen", address: "1214 56 St, Delta, BC", hours: "11:00 AM – 9:00 PM", mapQuery: "Presotea+Tsawwassen+Delta+BC" },
  { name: "King George Hub, Surrey", address: "9850 King George Blvd, Surrey, BC", hours: "11:00 AM – 9:30 PM", mapQuery: "Presotea+King+George+Hub+Surrey+BC" },
  { name: "Metrotown, Burnaby", address: "4700 Kingsway, Burnaby, BC", hours: "10:00 AM – 9:00 PM", mapQuery: "Presotea+Metrotown+Burnaby+BC" },
  { name: "Guildford Town Centre, Surrey", address: "10355 152 St, Surrey, BC", hours: "10:00 AM – 9:00 PM", mapQuery: "Presotea+Guildford+Surrey+BC" },
  { name: "Oakridge Centre, Vancouver", address: "650 W 41st Ave, Vancouver, BC", hours: "10:00 AM – 9:00 PM", mapQuery: "Presotea+Oakridge+Vancouver+BC" },
];

const Locations = () => (
  <main>
    <PageBanner title="Our Locations" subtitle="Find a Presotea near you in British Columbia" />

    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i % 3}
              className="bg-popover rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video">
                <iframe
                  title={loc.name}
                  src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-charcoal">{loc.name}</h3>
                <div className="flex items-start gap-2 mt-3 text-sm text-muted-foreground">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-tea-green" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Clock size={14} className="flex-shrink-0 text-tea-green" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Locations;
