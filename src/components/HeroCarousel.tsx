import { useState } from "react";
import image1 from "../carouselle/carroselle_1.jpg";
import image2 from "../carouselle/carroselle_2.jpg";
import image3 from "../carouselle/carroselle_3.jpg";
import image4 from "../carouselle/carroselle_4.jpg";

const SimpleCarousel = () => {
  // Sample images
  const images = [
    image1, 
    image2,
    image3,
    image4, 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-96 h-48 overflow-hidden border border-gray-300 rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimpleCarousel;
