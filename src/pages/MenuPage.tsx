import { useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import drinkFruitTea from "@/assets/drink-fruit-tea.jpg";
import drinkMilkTea from "@/assets/drink-milk-tea.jpg";
import drinkMatcha from "@/assets/drink-matcha.jpg";
import drinkLatte from "@/assets/drink-latte.jpg";
import drinkCloud from "@/assets/drink-cloud.jpg";
import drinkTeapresso from "@/assets/drink-teapresso.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

interface DrinkItem {
  name: string;
  price: string;
}

interface Category {
  name: string;
  image: string;
  items: DrinkItem[];
}

const categories: Category[] = [
  {
    name: "Milk Tea Series",
    image: drinkMilkTea,
    items: [
      { name: "Earl Grey Milk Tea", price: "$5.75" },
      { name: "Panda Pearl Milk Tea", price: "$6.25" },
      { name: "Okinawa Brown Sugar Milk Tea", price: "$6.50" },
      { name: "Classic Milk Tea", price: "$5.50" },
      { name: "Taro Milk Tea", price: "$5.95" },
      { name: "Milk Tea Triple Combo", price: "$6.95" },
    ],
  },
  {
    name: "Fresh Teapresso",
    image: drinkTeapresso,
    items: [
      { name: "A-Li-Shan Iced Tea", price: "$4.75" },
      { name: "Supreme Jasmine Green Tea", price: "$4.50" },
      { name: "Roasted Oolong", price: "$4.75" },
      { name: "Four Season Spring Tea", price: "$4.50" },
      { name: "Premium Black Tea", price: "$4.50" },
    ],
  },
  {
    name: "Fruit Tea Series",
    image: drinkFruitTea,
    items: [
      { name: "Passion Fruit Pineapple Tea", price: "$5.95" },
      { name: "Wintermelon Lemon", price: "$5.75" },
      { name: "Mango Green Tea", price: "$5.95" },
      { name: "Lychee Black Tea", price: "$5.95" },
      { name: "Kumquat Lemon Green Tea", price: "$5.75" },
    ],
  },
  {
    name: "Fresh Milk Latte",
    image: drinkLatte,
    items: [
      { name: "Black Tea Latte", price: "$5.95" },
      { name: "Matcha Latte", price: "$6.25" },
      { name: "Oolong Tea Latte", price: "$5.95" },
      { name: "Brown Sugar Latte", price: "$6.25" },
      { name: "Taro Fresh Milk", price: "$6.50" },
    ],
  },
  {
    name: "Cloud Series",
    image: drinkCloud,
    items: [
      { name: "Strawberry Cloud", price: "$6.50" },
      { name: "Matcha Oreo Cloud", price: "$6.75" },
      { name: "Mango Cloud", price: "$6.50" },
      { name: "Taro Cloud", price: "$6.50" },
    ],
  },
  {
    name: "Signature Special",
    image: drinkMatcha,
    items: [
      { name: "Matcha Red Bean", price: "$6.75" },
      { name: "Brown Sugar Tiger Milk Tea", price: "$6.95" },
      { name: "QQ Happy Family Milk Tea", price: "$7.25" },
      { name: "Dirty Brown Sugar Fresh Milk", price: "$6.95" },
    ],
  },
];

const MenuPage = () => {
  const [active, setActive] = useState(0);

  return (
    <main>
      <PageBanner title="Our Menu" subtitle="Fresh tea, fresh made — brewed to order with premium ingredients" />

      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-tea-green text-primary-foreground shadow-md"
                    : "bg-popover text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={categories[active].image}
                alt={categories[active].name}
                className="w-full aspect-square object-cover"
              />
            </motion.div>

            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal mb-8">
                {categories[active].name}
              </h2>
              <div className="space-y-0">
                {categories[active].items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={i}
                    className="flex items-center justify-between py-4 border-b border-border"
                  >
                    <span className="font-medium text-charcoal">{item.name}</span>
                    <span className="font-semibold text-tea-green">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                * Prices may vary by location. Add toppings: Pearls, Grass Jelly, Pudding, Aloe Vera (+$0.75 each).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
