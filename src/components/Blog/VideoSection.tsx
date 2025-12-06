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
        <div className="overflow-hidden rounded-2xl shadow-2xl bg-muted">
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
            <p className="text-sm font-medium text-foreground bg-muted/50 px-4 py-2 rounded-lg border border-border">
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
