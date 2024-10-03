"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { MediaItem } from "@/components/organisms/MediaItem";

export default function LifeFlourishedHere() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -200]); // 背景
  // const y2 = useTransform(scrollY, [0, 1000], [0, -100]); // 中間層
  // const y3 = useTransform(scrollY, [0, 1000], [0, 0]); // 前景

  return (
    <div className="relative h-[200vh]">
      <motion.div
        className="absolute top-0 left-0 right-0 h-full bg-cover"
        style={{ y: y1 }}
      >
        <MediaItem
          alt="Osaka"
          mediaItemId="AA2w_P-UmQf1QwjHSIbEEtvV_AT8Qkr2KSI_ejxW-YpxqsbqKlu5Ceas7hxcxj9quJzgEYXvSWRomvsaguAWc2_YsligohTQEw"
          className="-z-10 min-h-screen overflow-hidden"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="relative z-10 text-center text-white pt-[50vh] p-6">
        <div className="bg-yellow-400 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-6xl font-bold text-red-600">
            Osaka Isn’t Just a City!
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            It’s a vibrant powerhouse filled with passion! 🔥✨
          </p>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-blue-600">
            The Kitchen of Japan 🍣
          </h2>
          <p className="mt-2 text-gray-700">
            Here, culinary culture thrives! From <strong>takoyaki</strong> to{" "}
            <strong>okonomiyaki</strong>, the street food scene is a wonderland,
            bursting with flavors that invite you to explore! 😋
          </p>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-green-600">
            Lively People 🤪
          </h2>
          <p className="mt-2 text-gray-700">
            You can’t walk down the street without hearing a cheerful “Nande
            yanen!” (What’s that about?)—it’s all about the humor and connection
            that flows through this city! 💬
          </p>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold text-purple-600">
            Universal Studios Japan 🎢
          </h2>
          <p className="mt-2 text-gray-700">
            The heart of entertainment in Osaka! Every visit is a dive into a
            world of dreams and excitement! The thrill you feel there is
            addictive—it keeps you coming back for more!
          </p>
        </div>

        <div className="mt-6 p-4 bg-yellow-400 rounded-lg shadow-lg text-center">
          <h2 className="text-4xl font-bold text-red-600">
            Embrace the Pride! 🔥💖
          </h2>
          <p className="mt-2 text-lg text-gray-800">
            Osaka’s culture, festivals, food, and the fiery spirit of its people
            create an experience like no other! So, let that passionate energy
            shine through in everything you do!
          </p>
        </div>
      </div>
    </div>
  );
}
