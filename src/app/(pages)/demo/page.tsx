"use client";

import { motion } from "framer-motion";

import Forest from "@/components/organisms/Forest";

export default function Demo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.8 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <Forest />
    </motion.div>
  );
}
