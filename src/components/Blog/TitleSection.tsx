import React from "react";

interface TitleSectionProps {
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 mt-10">
      {children}
    </h2>
  );
};

export default TitleSection;
