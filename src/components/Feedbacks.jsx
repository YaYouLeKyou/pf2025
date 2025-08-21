import React from "react"; 
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const offers = [
  {
    title: "Starter Website",
    details:
      "A 3–5 page responsive website with a clean, modern design. Includes a homepage, about page, contact form, and gallery/portfolio section. Optimized for mobile and desktop, basic interactivity, and SEO-friendly structure.",
    price: "€250",
  },
  {
    title: "Pro Web Package",
    details:
      "Up to 8 pages featuring dynamic content, optional API integrations or WordPress CMS. Includes blog setup, portfolio showcase, and SEO-ready structure. Perfect for growing businesses or professional portfolios.",
    price: "€450",
  },
  {
    title: "Full Web Experience",
    details:
      "A fully custom website or app with advanced interactivity. Includes e-commerce, payment setup, user authentication, and dashboards. Ideal for startups or online stores.",
    price: "€750",
  },
];

const OfferCard = ({ index, title, details, price, isMobile }) => {
  const cardClasses = isMobile
    ? "bg-tertiary p-4 rounded-xl w-full max-w-sm min-h-[320px] flex flex-col justify-between"
    : "bg-tertiary p-8 rounded-2xl w-[360px] min-h-[420px] shadow-lg flex flex-col justify-between";

  const textClasses = "text-secondary text-[14px] leading-relaxed text-left break-words";

  const titleClasses = isMobile
    ? "text-white text-lg font-bold mb-3"
    : "text-white text-2xl font-bold mb-6";

  const priceClasses = isMobile
    ? "text-white font-extrabold text-xl"
    : "text-white font-extrabold text-3xl";

  if (isMobile) {
    return (
      <div className={cardClasses}>
        <div>
          <h3 className={titleClasses}>{title}</h3>
          <p className={textClasses}>{details}</p>
        </div>
        <div className="text-center mt-3">
          <span className={priceClasses}>{price}</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className={cardClasses}
    >
      <div>
        <h3 className={titleClasses}>{title}</h3>
        <p className={textClasses}>{details}</p>
      </div>
      <div className="text-center mt-4">
        <span className={priceClasses}>{price}</span>
      </div>
    </motion.div>
  );
};

const Offers = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const HeaderWrapper = isMobile ? "div" : motion.div;

  return (
    <div className="mt-10 bg-black-100 rounded-[20px]">
      {/* Header */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[120px]`}>
        <HeaderWrapper {...(!isMobile && { variants: textVariant() })}>
          <p className={styles.sectionSubText}>My Services</p>
          <h2 className={`${styles.sectionHeadText} mb-8`}>Web Development Offers.</h2>
        </HeaderWrapper>
      </div>

      {/* Cards */}
      <div
        className={`mt-8 pb-10 ${styles.paddingX} flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 items-center sm:justify-center`}
      >
        {offers.map((offer, index) => (
          <OfferCard key={offer.title} index={index} {...offer} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
