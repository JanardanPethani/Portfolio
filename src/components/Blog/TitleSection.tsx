import React from "react";

interface TitleSectionProps {
  children: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-gray-100 dark:to-blue-200 bg-clip-text text-transparent mb-6 mt-12 first:mt-0 relative">
      {children}
      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    </h2>
  );
};

export default TitleSection;
