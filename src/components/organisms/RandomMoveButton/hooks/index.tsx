import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { POSITION } from "../constants/position";

export const useRandomMove = (pages: string[]) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<{ bottom: number; right: number }>({
    bottom: 0,
    right: 0,
  });

  const getRandomPosition = useCallback(() => {
    return POSITION[Math.floor(Math.random() * POSITION.length)];
  }, []);

  const cheersToRandomPosition = useCallback(() => {
    setTimeout(() => {
      setVisible(true);

      const bottom = getRandomPosition();
      const right = getRandomPosition();
      setPosition({ bottom, right });
    }, 10000);
  }, [getRandomPosition]);

  useEffect(() => cheersToRandomPosition(), [cheersToRandomPosition]);

  /**
   * 🌈✨ Let's create a bubbly hook for random page navigation!
   */
  const currentPage = usePathname();
  const [visitedPages, setVisitedPages] = useState<string[]>([]); // Keep track of the fun places we've visited! 🎉

  // 🎉 Function to fetch a random page while ensuring it’s different from our current path!
  const fetchRandomPage = () => {
    let randomPage: string;
    const weightedPages = createWeightedPages(); // Get our special weighted pages! 🌈

    // Keep trying until we find a new page! 🌟
    do {
      randomPage = selectRandomPage(weightedPages);
    } while (randomPage === currentPage);

    setVisitedPages((prev) => [...prev, randomPage]); // Let's remember where we've been! 🗺️

    return randomPage; // Yay! Here’s our new adventure! 🎈
  };

  // 🎈 Function to create a happy weighted array of pages!
  const createWeightedPages = () => {
    return pages.flatMap((page) => {
      return visitedPages.includes(page)
        ? Array(1).fill(page) // If visited, just a little peek! 😊
        : Array(4).fill(page); // If not, let's give it more chances to shine! 🌟
    });
  };

  // 🌟 Function to select a random page from the weighted list of joy!
  const selectRandomPage = (weightedPages: string[]) => {
    const randomIndex = Math.floor(Math.random() * weightedPages.length);
    return weightedPages[randomIndex]; // Grab a lucky page! 🍀
  };

  return {
    visible,
    position,
    cheersToRandomPosition,
    fetchRandomPage,
  };
};
