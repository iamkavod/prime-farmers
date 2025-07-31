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
      }, 5000);
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
      <div
        ref={ref}
        className="absolute inset-0 size-full"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Farm Image ${currentIndex + 1}`}
            className="size-full bg-accent/30 object-cover absolute inset-0 brightness-60"
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
      </div>
  );
}
