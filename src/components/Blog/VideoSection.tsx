import React from "react";

interface VideoSectionProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  src,
  title,
  width = 560,
  height = 315,
}) => {
  return (
    <div className="my-8">
      <div className="relative group">
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-gray-500/20 dark:shadow-gray-900/50 bg-gray-100 dark:bg-gray-800">
          <iframe
            src={src}
            width={width}
            height={height}
            className="w-full aspect-video"
            title={title || "Embedded video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Title */}
        {title && (
          <div className="mt-4 text-center">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
