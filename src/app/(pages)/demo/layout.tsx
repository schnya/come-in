"use client";

import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

import { RandomMoveButton } from "@/components/organisms/RandomMoveButton";
import Head from "next/head";

export default function DemoLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence>
        {children}
        <RandomMoveButton />
      </AnimatePresence>
    </>
  );
}
