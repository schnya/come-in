import { useEffect, useRef } from "react";
import "./styles.css";

const Forest = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const currentVideoRef = videoRef.current;
      if (currentVideoRef) {
        currentVideoRef.style.transform = `translateY(${scrollTop / 6}px)`;
      }

      const currentContentRef = contentRef.current;
      if (currentContentRef) {
        currentContentRef.style.transform = `translateY(-${scrollTop * 1.1}px)`;
      }
    };

    const handleWheel = (event: {
      preventDefault: () => void;
      deltaY: number;
    }) => {
      event.preventDefault();
      window.scrollBy(0, event.deltaY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="forest-container">
      <div className="parallax">
        <video autoPlay loop muted playsInline className="video" ref={videoRef}>
          <source src="/videos/manOnPierRiver.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="overlay">
        <h1>Welcome to the Forest</h1>
      </header>
      <div className="forest-content" ref={contentRef}>
        <h2>Explore Nature</h2>
        <p>
          Discover the beauty of the forest with its lush greenery and diverse
          wildlife. Immerse yourself in nature through various activities.
        </p>

        <h2>Activities in the Forest</h2>
        <ul>
          <li>
            <strong>Hiking:</strong> Experience stunning trails and breathtaking
            views.
          </li>
          <li>
            <strong>Birdwatching:</strong> Spot various bird species in their
            natural habitat.
          </li>
          <li>
            <strong>Photography:</strong> Capture the stunning landscapes and
            wildlife.
          </li>
          <li>
            <strong>Camping:</strong> Spend a night under the stars surrounded
            by nature.
          </li>
          <li>
            <strong>Nature Walks:</strong> Guided tours to learn about flora and
            fauna.
          </li>
        </ul>

        <h2>Conservation Efforts</h2>
        <p>
          Join us in protecting our forests. Learn more about sustainable
          practices and how you can contribute to preserving the environment for
          future generations.
        </p>
        <h3>How You Can Help:</h3>
        <ul>
          <li>Participate in local clean-up events.</li>
          <li>Support reforestation initiatives.</li>
          <li>Reduce plastic usage to minimize pollution.</li>
          <li>Educate others about the importance of conservation.</li>
        </ul>
      </div>
    </div>
  );
};

export default Forest;
