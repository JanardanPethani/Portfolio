import React from "react";

interface TableProps {
  headers: string[];
  rows: (string[])[];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 text-left text-sm">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-800">
          {headers.map((header, idx) => (
            <th key={idx} className="border px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td
                key={cellIdx}
                className={
                  "border px-4 py-2" + (cellIdx === 0 ? " font-semibold" : "")
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table; 