import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const offers = [
  {
    title: "Starter Website",
    details:
      "A 3–5 page responsive website with a clean, modern design. Includes a homepage, about page, contact form, and gallery/portfolio section. Optimized for mobile and desktop, basic interactivity like hover effects, and SEO-friendly structure. Ideal for personal projects, freelancers, or small local businesses starting online presence.",
    price: "€250",
  },
  {
    title: "Pro Web Package",
    details:
      "Up to 8 pages featuring dynamic content, smooth animations, and optional API integrations or WordPress CMS. Includes blog setup, portfolio showcase, contact forms with notifications, and social media links. Mobile-friendly, SEO-ready, and suitable for growing businesses, professional portfolios, or niche blogs looking to impress visitors.",
    price: "€450",
  },
  {
    title: "Full Web Experience",
    details:
      "A fully custom website or web application with advanced interactivity. Includes responsive design for all devices, SEO basics, e-commerce integration (optional), payment gateway setup, user authentication, and admin dashboard if needed. Perfect for startups, professional services, or online stores.",
    price: "€750",
  },
];

const OfferCard = ({ index, title, details, price }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.7)}
    className="bg-tertiary p-8 rounded-2xl w-full sm:w-[320px] min-h-[450px] shadow-lg flex flex-col justify-between hover:scale-105 transition-transform"
  >
    <div>
      <h3 className="text-white text-2xl font-bold mb-6">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed text-justify mb-3">{details}</p>
    </div>
    <div className="text-center">
      <span className="text-white font-extrabold text-3xl">{price}</span>
    </div>
  </motion.div>
);

const Offers = () => {
  return (
    <div className={`mt-16 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Services</p>
          <h2 className={`${styles.sectionHeadText} mb-12`}>Web Development Offers.</h2>
        </motion.div>
      </div>

      <div className={`-mt-24 pb-14 ${styles.paddingX} flex flex-wrap gap-10 justify-center`}>
        {offers.map((offer, index) => (
          <OfferCard key={offer.title} index={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
