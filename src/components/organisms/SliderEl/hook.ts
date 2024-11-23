import { circOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useSliderEl = (direction: 1 | -1) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | HTMLUListElement)[]>([]);
  const [containerTranslateY, setContainerTranslateY] = useState(0);

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
    const handleScroll = (e: { deltaY: number }) => {
      setContainerTranslateY((prev) => prev + e.deltaY * direction);
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [direction]);

  useEffect(() => {
    if (!containerRef.current || tileRefs.current.length === 0) return;

    const updatePosition = () => {
      const tiles = tileRefs.current;
      const firstTile = tiles[0];
      const lastTile = tiles[tiles.length - 1];

      if (!firstTile || !lastTile) return;

      const containerHeight = containerRef.current!.offsetHeight;
      // const firstTileTop = firstTile.getBoundingClientRect().top;
      // const lastTileBottom = lastTile.getBoundingClientRect().bottom;

      // if (-50 < firstTileTop) {
      //   tileRefs.current = [lastTile, ...tiles.slice(0, tiles.length - 1)];
      //   const index = tileData.findIndex((t) => t === lastTile.innerText);
      //   setTileTranslateY((prev) => {
      //     const updated = [...prev];
      //     updated[index] = -containerHeight;

      //     return updated;
      //   });
      //   lastTile.style.transform = `translateY(${-containerHeight}px)`;
      // } else if (lastTileBottom < containerHeight - 50) {
      //   console.log("lastTileBottom < containerHeight - 50");
      //   console.log(firstTile.innerText[0], lastTile.innerText[0]);

      //   tileRefs.current = [...tiles.slice(1), firstTile];
      //   firstTile.style.transform = `translateY(${containerHeight}px)`;
      // }

      if (containerTranslateY > containerHeight) {
        setContainerTranslateY(-containerHeight);
      } else if (containerTranslateY + containerHeight < 0) {
        setContainerTranslateY(containerHeight);
      }
    };

    const raf = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(raf);
  }, [containerTranslateY]);

  const tileVariants = {
    hidden: { opacity: 0, y: 500 * direction },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: circOut },
    },
  };

  return {
    containerRef,
    tileRefs,
    containerTranslateY,
    tileVariants,
  };
};
