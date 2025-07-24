import React from "react";
import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  return (
    <div className="my-8">
      <div className="relative group">
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-gray-500/20 dark:shadow-gray-900/50">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Caption */}
        {alt && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              {alt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
