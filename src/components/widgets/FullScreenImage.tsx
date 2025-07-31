"use client";
import { X } from "lucide-react";
import Image from "next/image";

interface FullScreenImageProps {
  src: string;
  onClose: () => void;
  isVideo: boolean;
  mimeType?: string; // Added mimeType prop
}

export default function FullScreenImage({
  src,
  onClose,
  isVideo,
  mimeType,
}: FullScreenImageProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-75"
      onClick={onClose}
    >
      <div className="relative size-full flex items-center justify-center max-w-4xl max-h-4xl">
        {isVideo ? (
          <video
            controls
            autoPlay
            loop
            className="rounded-lg w-full h-full object-contain"
          >
            <source src={src} type={mimeType} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={src}
            alt="Full-screen image"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
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
