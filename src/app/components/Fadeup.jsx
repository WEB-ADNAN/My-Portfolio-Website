"use client"

import { motion } from "framer-motion";

const Fadeup = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            duration: 0.7,
            ease: "easeOut",
        }}
    >
      {children}
    </motion.div>
  );
};

export default Fadeup;