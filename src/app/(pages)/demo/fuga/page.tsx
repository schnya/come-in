"use client";

import { motion } from "framer-motion";

import Forest from "@/components/organisms/Forest";

export default function Demo() {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: -90, opacity: 0.5 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <Forest />
    </motion.div>
  );
}
