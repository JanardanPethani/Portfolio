import React from "react";

interface TitleSectionProps {
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-12 first:mt-0 relative">
      {children}
      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-blue-500 rounded-full" />
    </h2>
  );
};

export default TitleSection;
