import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { EarthCanvas } from "./canvas"; // ✅ Added here

const ContactCard = ({ label, value, icon: Icon, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (onClick) onClick(value);
    if (onClick) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-tertiary p-8 rounded-2xl w-full sm:w-[320px] flex flex-col items-center cursor-pointer relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={handleClick}
    >
      <div className="text-5xl mb-4 text-blue-400">
        <Icon />
      </div>
      <h3 className="text-white text-xl font-bold mb-3">{label}</h3>
      <p className="text-secondary text-center">{value}</p>
      {copied && (
        <span className="absolute top-2 right-2 text-green-400 text-sm">
          Copied!
        </span>
      )}
    </motion.div>
  );
};

const Contact = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 bg-black-100 p-6">
      {/* Text Section */}
      <motion.div className="text-center max-w-xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me</h2>
        <p className="mt-4 text-secondary">
          Hi! I’m Yanes Hadiouche, a passionate Web Developer. Feel free to
          reach out via email, phone, or LinkedIn. I’d love to hear about your
          project or just connect!
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        <ContactCard
          label="Email"
          value="Yanes75@hotmail.fr"
          icon={FaEnvelope}
          onClick={handleCopy}
        />
        <ContactCard
          label="Phone"
          value="+33661184849"
          icon={FaPhone}
          onClick={handleCopy}
        />
        <ContactCard
          label="LinkedIn"
          value="View Profile"
          icon={FaLinkedin}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/yann-hadiouche-00b7ab114/",
              "_blank"
            )
          }
        />
      </div>

      {/* Earth Animation */}
      <div className="w-full h-[400px] mt-12">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
