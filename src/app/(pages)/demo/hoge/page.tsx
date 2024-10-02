"use client";

import { motion } from "framer-motion";

import Forest from "@/components/organisms/Forest";

export default function Demo() {
  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0.2 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0.5 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <Forest />
    </motion.div>
  );
}
