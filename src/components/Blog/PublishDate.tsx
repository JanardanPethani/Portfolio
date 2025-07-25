import React from "react";
import { Calendar } from "lucide-react";

interface PublishDateProps {
  date: string;
}

const PublishDate: React.FC<PublishDateProps> = ({ date }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex items-center text-gray-600 dark:text-gray-400 w-[-webkit-fill-available]">
      <Calendar className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
      <span className="font-medium">{formatDate(date)}</span>
    </div>
  );
};

export default PublishDate;
