import React from "react";

interface DetailSectionProps {
  children: React.ReactNode;
}

const DetailSection: React.FC<DetailSectionProps> = ({ children }) => {
  return (
    <div className="text-lg leading-relaxed text-foreground mb-8 space-y-4">
      {children}
    </div>
  );
};

export default DetailSection;
