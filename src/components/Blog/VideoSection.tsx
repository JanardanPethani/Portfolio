import React from "react";

interface VideoSectionProps {
  src: string;
  title: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ src, title }) => {
  return (
    <div className="mb-4">
      <iframe
        width="100%"
        height="400"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
        {title}
      </p>
    </div>
  );
};

export default VideoSection;
