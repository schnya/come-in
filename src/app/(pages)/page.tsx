"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Home() {
  const magicalMountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sparklyCanvas = magicalMountRef.current;

    if (sparklyCanvas) {
      const happyScene = new THREE.Scene();
      const rainbowCamera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const magicalRenderer = new THREE.WebGLRenderer();
      magicalRenderer.setSize(window.innerWidth, window.innerHeight);
      sparklyCanvas.appendChild(magicalRenderer.domElement);

      const cuteGeometry = new THREE.BoxGeometry();
      const bubblyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const happyCube = new THREE.Mesh(cuteGeometry, bubblyMaterial);
      happyScene.add(happyCube);

      rainbowCamera.position.z = 5;

      const animateCuteCube = function () {
        requestAnimationFrame(animateCuteCube);
        happyCube.rotation.x += 0.01;
        happyCube.rotation.y += 0.01;
        magicalRenderer.render(happyScene, rainbowCamera);
      };

      animateCuteCube();

      return () => {
        if (sparklyCanvas) {
          sparklyCanvas.removeChild(magicalRenderer.domElement);
        }
      };
    }
  }, []);

  return (
    <>
      <div ref={magicalMountRef} />
      <div className="absolute top-0 flex flex-col items-center justify-center min-h-screen p-4 gap-8 sm:p-8">
        <main className="flex flex-col gap-8 text-center sm:text-left sm:flex-row sm:gap-12">
          <Image
            className="w-40 h-40"
            src="/images/schnya.webp"
            alt="site logo"
            width={180}
            height={180}
            priority
          />
          <ol className="list-inside list-decimal text-sm font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Try making a
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                new dish
              </code>{" "}
              from your favorite recipe book! 🍽️
            </li>
            <li>
              Serve the dish to friends or family and enjoy the smiles! ✨
            </li>
          </ol>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm h-10 px-4 sm:h-12 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Find a Recipe Now!
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm h-10 px-4 sm:h-12 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the Grocery List!
            </a>
          </div>
        </main>
        <footer className="flex flex-wrap justify-center gap-4 p-4 text-sm text-gray-500 sm:justify-start sm:text-base sm:p-8">
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Cooking Tips 📖💫
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Dessert Recipes 💡✨
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Cooking Blog 🌍💖
          </a>
        </footer>
      </div>
    </>
  );
}
