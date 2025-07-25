import React from "react";

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="my-6 md:my-8">
      <div className="w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
};

interface TableHeadProps {
  children: React.ReactNode;
}

const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return (
    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
      {children}
    </thead>
  );
};

interface TableBodyProps {
  children: React.ReactNode;
}

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
      {children}
    </tbody>
  );
};

interface TableRowProps {
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
      {children}
    </tr>
  );
};

interface TableHeaderProps {
  children: React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return (
    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider whitespace-nowrap">
      {children}
    </th>
  );
};

interface TableCellProps {
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return (
    <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-700 dark:text-gray-300">
      {children}
    </td>
  );
};

export { Table, TableHead, TableBody, TableRow, TableHeader, TableCell };
