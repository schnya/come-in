import { circOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type TileData = (string | string[])[];

export const useSliderEl = (tileData: TileData, direction: 1 | -1) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | HTMLUListElement)[]>([]);
  const [duration, setDuration] = useState(1);
  const [containerTranslateY, setContainerTranslateY] = useState(0);
  const [tileTranslateY, setTileTranslateY] = useState(tileData.map(() => 0));

  const tileVariants = {
    hidden: { opacity: 0, y: 500 * direction },
    visible: (index: number) => ({
      opacity: 1,
      y: tileTranslateY[index],
      transition: { duration, ease: circOut },
    }),
  };

  useEffect(() => setDuration(0), []);

  useEffect(() => {
    const adjustFontSize = () => {
      tileRefs.current.forEach((tile) => {
        const length = tile.innerText.length;
        const MAX_LENGTH = 36;
        if (length < MAX_LENGTH) {
          const fontSize = 13 * (1 + (MAX_LENGTH - length) / MAX_LENGTH);
          const lineHeight = fontSize * 1.4;

          tile.style.fontSize = `${fontSize}px`;
          tile.style.lineHeight = `${lineHeight}px`;
        }
      });
    };

    adjustFontSize();
  }, [tileRefs]);

  useEffect(() => {
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleScroll = (e: { deltaY: number }) => {
      setContainerTranslateY((prev) => prev + e.deltaY * direction);
    };
    const handleTouchMove = (e: TouchEvent) => {
      handleScroll({ deltaY: startY - e.touches[0].clientY });
      startY = e.touches[0].clientY;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [direction]);

  useEffect(() => {
    if (!containerRef.current || tileRefs.current.length === 0) return;

    const updatePosition = () => {
      const tiles = tileRefs.current;
      const firstTile = tiles[0];
      const lastTile = tiles[tiles.length - 1];

      if (!firstTile || !lastTile) return;

      const containerHeight = containerRef.current!.offsetHeight;
      const firstTileBottom = firstTile.getBoundingClientRect().bottom;
      const lastTileTop = lastTile.getBoundingClientRect().top;

      if (lastTileTop + 70 > containerHeight) {
        tileRefs.current = [lastTile, ...tiles.slice(0, tiles.length - 1)];
        const index = tileData.findIndex((t) => t === lastTile.innerText);
        setTileTranslateY((prev) => {
          const updated = [...prev];
          updated[index] = (() =>
            updated[index] === -containerHeight
              ? containerHeight
              : updated[index] === containerHeight
              ? 0
              : -containerHeight)();

          return updated;
        });
      } else if (firstTileBottom < -70) {
        tileRefs.current = [...tiles.slice(1), firstTile];
        const index = tileData.findIndex((t) => t === firstTile.innerText);
        setTileTranslateY((prev) => {
          const updated = [...prev];
          updated[index] = (() =>
            updated[index] === -containerHeight
              ? 0
              : updated[index] === 0
              ? containerHeight
              : -containerHeight)();

          return updated;
        });
      }

      if (containerTranslateY > containerHeight) {
        setContainerTranslateY(-containerHeight);
        setTileTranslateY((prev) => prev.map(() => 0));
      } else if (containerTranslateY + containerHeight < 0) {
        setContainerTranslateY(containerHeight);
        setTileTranslateY((prev) => prev.map(() => 0));
      }
    };

    const raf = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(raf);
  }, [containerTranslateY, tileData]);

  return {
    containerRef,
    tileRefs,
    containerTranslateY,
    tileVariants,
  };
};
