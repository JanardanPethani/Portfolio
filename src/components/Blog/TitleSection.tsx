import React from "react";

interface TitleSectionProps {
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
      {children}
    </h2>
  );
};

export default TitleSection;
