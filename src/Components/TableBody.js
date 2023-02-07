import React from "react";

function TableBody({ account, description, enteredby, date }) {
  return (
    <tr>
      <td style={{ width: "18%" }}>{account}</td>
      <td style={{ width: "38%" }}>{description}</td>
      <td style={{ width: "17%" }}>{enteredby}</td>
      <td>{date}</td>
    </tr>
  );
}

export default TableBody;
