import React from "react";

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8 first:mt-0 relative">
      {children}
      <div className="absolute -bottom-1.5 left-0 w-12 h-0.5 bg-blue-500 rounded-full" />
    </h3>
  );
};

export default SubTitle;
