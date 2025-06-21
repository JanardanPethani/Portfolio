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
    <div className="mb-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
      />
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
        {alt}
      </p>
    </div>
  );
};

export default ImageSection;
