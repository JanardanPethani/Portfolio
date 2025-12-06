import React from "react";

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 mt-8 first:mt-0 relative">
      {children}
      <div className="absolute -bottom-1.5 left-0 w-12 h-0.5 bg-primary rounded-full" />
    </h3>
  );
};

export default SubTitle;
