import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

import { RandomMoveButton } from "@/components/organisms/Forest/RandomMoveButton";

export default function DemoLayout({ children }: PropsWithChildren) {
  return (
    <AnimatePresence>
      {children}
      <RandomMoveButton />
    </AnimatePresence>
  );
}
