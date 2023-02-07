import React from "react";

function TableHead({ header }) {
  return (
    <thead>
      <tr>
        {header.map((header, i) => (
          <th key={i}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
