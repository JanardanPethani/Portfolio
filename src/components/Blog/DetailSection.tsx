import React from "react";

interface DetailSectionProps {
  children: React.ReactNode;
}

const DetailSection: React.FC<DetailSectionProps> = ({ children }) => {
  return (
    <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 space-y-4">
      {children}
    </div>
  );
};

export default DetailSection;
