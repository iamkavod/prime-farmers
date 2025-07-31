"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FullScreenImage from "@/components/widgets/FullScreenImage";
import { fetchGoogleDriveFiles } from "@/lib/googleDrive"; // Removed getGoogleDriveFileUrl
import { PlayCircle } from "lucide-react";

const ITEMS_PER_PAGE = 6;

interface MediaFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  src?: string; // src is now part of MediaFile
}

interface GalleryItem {
  src: string;
  isVideo: boolean;
  mimeType: string;
  thumbnailSrc?: string;
}

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fullScreenMedia, setFullScreenMedia] = useState<GalleryItem | null>(null);
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
    return mediaFiles.map(file => ({
      src: file.src || "", // Use file.src directly
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

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <p>Loading gallery...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  if (galleryItems.length === 0) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <p>No images or videos found in the gallery.</p>
      </main>
    );
  }

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
        {currentItems.map((item, index) => (
          <div
            key={item.src}
            className="w-full h-64 relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => openFullScreen(item)}
          >
            {item.isVideo ? (
              <>
                <Image
                  src={item.thumbnailSrc || "/placeholder-video.png"}
                  alt={`Video thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300 rounded-lg">
                  <PlayCircle className="text-white w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </>
            ) : (
              <Image
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            )}
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
