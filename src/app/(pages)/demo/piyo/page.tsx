"use client";

import { motion } from "framer-motion";

import Forest from "@/components/organisms/Forest";

export default function Demo() {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <Forest />
    </motion.div>
  );
}
