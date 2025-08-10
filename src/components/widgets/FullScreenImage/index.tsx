"use client";
import { X, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FullScreenImageProps {
  src: string;
  onClose: () => void;
  isVideo: boolean;
  mimeType?: string;
  size?: string;
  thumbnailSrc?: string;
}

export default function FullScreenImage({
  src,
  onClose,
  isVideo,
  mimeType,
  size,
  thumbnailSrc,
}: FullScreenImageProps) {
  const fileSizeInMB = size ? parseInt(size) / (1024 * 1024) : 0;
  const isLargeFile = fileSizeInMB > 100;
  const [videoError, setVideoError] = useState(false);

  const handleError = () => {
    setVideoError(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-75">
      <div className="relative size-full flex items-center justify-center max-w-4xl max-h-4xl">
        <div className="absolute inset-0 size-full" onClick={onClose} />
        {(isVideo && isLargeFile) || videoError ? (
          <div className="flex flex-col z-1 items-center justify-center">
            <Image
              src={
                thumbnailSrc ||
                "https://placehold.co/150x150/e0e0e0/ffffff?text=Video"
              }
              alt="Thumbnail of large image"
              width={500}
              height={300}
              objectFit="contain"
              className="rounded-lg w-32 mb-4"
            />
            <p className="text-white mb-4">
              {videoError
                ? "Failed to load video. Please try again later."
                : `This file is too large to display directly (${fileSizeInMB.toFixed(2)} MB).`}
            </p>
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <a href={src} download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2" /> Download Original File
              </a>
            </Button>
          </div>
        ) : isVideo ? (
          <video
            controls
            controlsList="nofullscreen"
            autoPlay
            loop
            className="rounded-lg size-full object-contain"
            onError={handleError}
          >
            <source
              src={`/api/resolve-video?url=${encodeURIComponent(src)}`}
              type={mimeType}
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={src}
            alt="Full-screen image"
            layout="fill"
            objectFit="contain"
            className="rounded-lg pointer-events-none"
          />
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        <X />
      </button>
    </div>
  );
}
