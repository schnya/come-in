import { useRouter } from "next/navigation";
import { FaShuffle } from "react-icons/fa6";

import { FallingButton } from "@/components/atoms/FallingButton";

import { useRandomMove } from "./hooks";

const pages = [
  "/",
  "/donesia",
  "/hoge",
  "/fuga",
  "/piyo",
  "/life-flourished-here",
];

export const RandomMoveButton = () => {
  const router = useRouter();
  const { visible, position, cheersToRandomPosition, fetchRandomPage } =
    useRandomMove(pages);

  const navigateToRandomPage = () => {
    const randomPage = fetchRandomPage();
    router.push(`/demo${randomPage}`);
    cheersToRandomPosition();
  };

  return (
    <>
      {visible && (
        <div className="fixed z-50" style={position}>
          <FallingButton onClick={navigateToRandomPage}>
            <svg width="24" height="21.01">
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#4f46e5", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#000000", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#d1006b", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <g fill="url(#gradient1)">
                <FaShuffle
                  size={24}
                  fill="linear-gradient(#4f46e5, #ccc, #d1006b)"
                />
              </g>
            </svg>
          </FallingButton>
        </div>
      )}
    </>
  );
};
