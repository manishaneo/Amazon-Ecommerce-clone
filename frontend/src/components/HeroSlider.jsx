import { useState, useEffect } from "react";

const heroImages = [
  "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71wZJEiwksL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61VacHcWgNL._SX3000_.jpg",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full">
      <img
        src={heroImages[index]}
        className="w-full h-[400px] object-cover"
      />
    </div>
  );
};

export default HeroSlider;
