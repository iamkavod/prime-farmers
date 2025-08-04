"use client";
import { Button } from "@/components/ui/button";
import FullScreenImage from "@/components/widgets/FullScreenImage";
import { fetchGoogleDriveFiles } from "@/lib/googleDrive";
import { ChevronRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 6;

interface MediaFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  src?: string;
}

interface GalleryItem {
  src: string;
  isVideo: boolean;
  mimeType: string;
  thumbnailSrc?: string;
}

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fullScreenMedia, setFullScreenMedia] = useState<GalleryItem | null>(
    null,
  );
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getMediaFiles() {
      try {
        const files = await fetchGoogleDriveFiles();
        setMediaFiles(files);
      } catch (err) {
        setError("Failed to fetch gallery items.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getMediaFiles();
  }, []);

  const galleryItems = useMemo(() => {
    return mediaFiles.map((file) => ({
      src: file.src || "",
      isVideo: file.mimeType.startsWith("video/"),
      mimeType: file.mimeType,
      thumbnailSrc: file.thumbnailLink,
    }));
  }, [mediaFiles]);

  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return galleryItems.slice(startIndex, endIndex);
  }, [currentPage, galleryItems]);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const openFullScreen = (item: GalleryItem) => {
    setFullScreenMedia(item);
  };

  const closeFullScreen = () => {
    setFullScreenMedia(null);
  };

  // Helper to distribute items into columns for masonry layout
  const getMasonryColumns = (items: GalleryItem[], numColumns: number) => {
    const columns: GalleryItem[][] = Array.from(
      { length: numColumns },
      () => [],
    );
    items.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

  // Use 4 columns for masonry based on the example's md:grid-cols-4 structure
  const masonryColumns = getMasonryColumns(currentItems, 4);

  return (
    <main className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('images/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white p-4">
          <p className="flex items-center justify-center text-sm mb-2 text-gray-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Gallery</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid Section */}
      {loading ? (
        <div className="container mx-auto px-4 py-12 text-center">
          <p>Loading gallery...</p>
        </div>
      ) : error ? (
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      ) : galleryItems.length === 0 ? (
        <main className="container mx-auto px-4 py-12 text-center">
          <p>No images or videos found in the gallery.</p>
        </main>
      ) : (
        <section id="media" className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {masonryColumns.map((column, colIndex) => (
              <div key={colIndex} className="grid gap-4">
                {column.map((item, itemIndex) => (
                  <div
                    key={item.src + "-" + itemIndex}
                    className="relative overflow-hidden h-fit rounded-lg shadow-md group cursor-pointer"
                    onClick={() => openFullScreen(item)}
                  >
                    {item.isVideo ? (
                      <>
                        <Image
                          src={
                            item.thumbnailSrc ||
                            "https://placehold.co/150x150/e0e0e0/ffffff?text=Video"
                          }
                          alt={`Video thumbnail ${itemIndex + 1}`}
                          width={500}
                          height={300}
                          className="h-auto max-w-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105" // Added h-auto max-w-full
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300 rounded-lg">
                          <PlayCircle className="text-white w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={`Gallery image ${itemIndex + 1}`}
                        width={500}
                        height={300}
                        className="h-auto max-w-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105" // Added h-auto max-w-full
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center my-12">
            <Button
              asChild
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              variant="outline"
              className="bg-green-500 hover:bg-green-500/20 text-white"
            >
              <a href="#media">Previous</a>
            </Button>
            <span className="mx-4 text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              asChild
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              className="bg-green-500 hover:bg-green-500/20 text-white"
            >
              <a href="#media">Next</a>
            </Button>
          </div>
        </section>
      )}

      {fullScreenMedia && (
        <FullScreenImage
          src={fullScreenMedia.src}
          isVideo={fullScreenMedia.isVideo}
          mimeType={fullScreenMedia.mimeType}
          onClose={closeFullScreen}
        />
      )}
    </main>
  );
}
