"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FullScreenImage from "@/components/widgets/FullScreenImage";

const allImages = [
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/400x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
];

const IMAGES_PER_PAGE = 6;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);

  const currentImages = useMemo(() => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    return allImages.slice(startIndex, endIndex);
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <main className="container mx-auto px-4">
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-headline">Our Gallery</h2>
        <p className="text-muted-foreground mt-2 text-lg mx-auto max-w-2xl">
          Explore moments from our community, events, and the beautiful
          landscapes of our farms.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentImages.map((src, index) => (
          <div
            key={index}
            className="w-full h-64 relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => openFullScreen(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center my-12">
        <Button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          variant="outline"
          className="hover:bg-accent/20 hover:text-primary-foreground"
        >
          Previous
        </Button>
        <span className="mx-4 text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          variant="outline"
          className="hover:bg-accent/20 hover:text-primary-foreground"
        >
          Next
        </Button>
      </div>

      {fullScreenImage && (
        <FullScreenImage src={fullScreenImage} onClose={closeFullScreen} />
      )}
    </main>
  );
}
