import { motion } from "framer-motion";

import { useSliderEl } from "./hook";

type Props = {
  tileData: (string | string[])[];
  direction?: 1 | -1;
  containerStyle?: string;
  tileStyle?: string;
};

export const SliderEl: React.FC<Props> = ({
  tileData,
  direction = 1,
  containerStyle,
  tileStyle,
}) => {
  const { containerRef, tileRefs, containerTranslateY, tileVariants } =
    useSliderEl(direction);

  return (
    <motion.div
      className={containerStyle}
      ref={containerRef}
      style={{
        transform: `translateY(${containerTranslateY}px)`,
        position: "relative",
      }}
      transition={{ type: "tween", ease: [0.42, 0, 1, 4.2], duration: 1.2 }}
    >
      {tileData.map((tile, index) => {
        const motionProps = {
          className: tileStyle,
          ref: (el: HTMLDivElement | HTMLUListElement | null) => {
            if (el) tileRefs.current[index] = el;
          },
          variants: tileVariants,
          initial: "hidden",
          animate: "visible",
          exit: "hidden",
        };

        if (Array.isArray(tile)) {
          return (
            <motion.ul
              key={tile[0].slice(0, 5)}
              {...motionProps}
              style={{ flexDirection: "column", overflowWrap: "break-word" }}
            >
              {tile.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </motion.ul>
          );
        }
        return (
          <motion.div key={tile.slice(0, 5)} {...motionProps}>
            {tile}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
