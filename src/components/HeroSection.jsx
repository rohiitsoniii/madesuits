import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[100vh] overflow-hidden max-md:h-[70vh]">
      <div
        className="absolute top-0 left-0 w-full h-[120vh] bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1709351478956-ISW357S5UVXFLFBNZRCM/2.17+man+suit4924.jpg?format=2500w')",
          backgroundSize: "cover",
          transform: `translateY(${-scrollY * 0.4}px)`,
          willChange: "transform",
        }}
      />

      <div className="absolute bottom-30 left-0 w-full px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-white text-4xl max-md:text-2xl mb-4 font-medium"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            BESPOKE TO MEASURE ™
          </p>
          <p className="text-white text-[18px] font-light italic">
            Communicating the Essence of our Craft
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
