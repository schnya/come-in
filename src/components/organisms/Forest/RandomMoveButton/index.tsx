"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";

import { FallingButton } from "@/components/atoms/FallingButton";

const pages = ["/", "/hoge", "/fuga", "/piyo"];

export const RandomMoveButton = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  });

  const hoge = () => {
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];
    router.push("/demo" + randomPage);
  };

  return (
    <>
      {visible && (
        <div className="z-10 absolute bottom-1/4 right-1/4">
          <FallingButton onClick={hoge}>
            <IoReload />
          </FallingButton>
        </div>
      )}
    </>
  );
};
