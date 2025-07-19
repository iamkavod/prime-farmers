"use client";
import { useState, useEffect, useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import farm1 from "@/assets/img/farm1.webp";
import farm2 from "@/assets/img/farm2.webp";
import farm3 from "@/assets/img/farm3.webp";
import farm4 from "@/assets/img/farm4.webp";

export default function FarmImages() {
  const images = [farm1.src, farm2.src, farm3.src, farm4.src];

  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInView) {
      interval = setInterval(() => {
        goToNext();
      }, 8000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex, isInView]);

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-lime-500 to-green-900 h-screen max-h-[500px] sm:max-h-[1000px] p-6 my-4">
      <div
        ref={ref}
        className="max-w-4xl 2xl:max-w-7xl relative w-full shadow-xl rounded-xl lg:rounded-2xl overflow-hidden h-[200px] sm:h-[320px] md:h-[530px] lg:h-[80vh] lg:max-h-[650px]"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Farm Image ${currentIndex + 1}`}
            className="w-full h-full bg-accent/30 object-cover rounded-xl absolute inset-0"
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x400/CCCCCC/000000?text=Image+Not+Found";
              e.currentTarget.onerror = null;
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <button
            onClick={goToPrevious}
            className="bg-accent/60 text-white p-3 rounded-r-lg shadow-md hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <button
            onClick={goToNext}
            className="bg-accent/60 text-white p-3 rounded-l-lg shadow-md hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-accent"
                  : "bg-white/50 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>

        <p className="absolute left-0 right-0 p-4 text-sm md:text-xl 2xl:text-2xl text-white bg-gradient-to-r from-black/30 to-transparent text-shadow-sm">
          Explore the beauty of our farm through these captivating images, each
          photo tells a story of sustainable agriculture and natural harmony.
        </p>
      </div>
    </div>
  );
}
