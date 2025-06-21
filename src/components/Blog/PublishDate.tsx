import React from "react";

interface PublishDateProps {
  date: string;
}

const PublishDate: React.FC<PublishDateProps> = ({ date }) => {
  return <p className="text-gray-500 dark:text-gray-400">{date}</p>;
};

export default PublishDate;
