import React from "react";

function Pagination({ rowsPerPage, totalData, paginate, nextPage, prevPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {/* <ul>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul> */}
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button onClick={() => prevPage()} className="page-link">
            Previous
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button onClick={() => paginate(num)} className="page-link">
              {num}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button onClick={() => nextPage()} className="page-link">
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
