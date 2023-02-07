// import React, { useEffect, useState } from "react";
// import data from "./mock-data.json";
// import TableFourColumn from "./Components/TableFourColumn";
// import Pagination from "./Components/Pagination";

// // Only header array and Url to fetch the data needs to be passed

// function App() {
//   const [loanData, setLoanData] = useState(data);
//   // console.log(loanData);
//   const all = loanData[0];
//   const identifier = Object.keys(all);
//   // The below header array needs to entered based on the Table headers required
//   const header = ["Loan account", "Loan Event", "Entered By", "Date"];
//   let dataFilters = undefined;
//   const HandleData = (dataFilter) => {
//     // console.log(dataFilter);
//     dataFilters = dataFilter;
//   };

//   // Enter url below to fetch data
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await fetch("");
//   //     setLoanData(response.data)
//   //   };

//   //   fetchData();
//   // }, []);

//   const [currentPage, setCurrentPage] = useState(1);
//   // Set the number of rows that is required below
//   const [rowPerPage, setRowPerPage] = useState(3);

//   const indexOfLastPage = currentPage * rowPerPage;
//   const indexOfFirstPage = indexOfLastPage - rowPerPage;
//   const currentPosts = loanData.slice(indexOfFirstPage, indexOfLastPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const nextPage = () =>
//     setCurrentPage((pervState) => {
//       if (pervState === Math.ceil(loanData.length / rowPerPage)) {
//         return pervState;
//       } else {
//         return pervState + 1;
//       }
//     });
//   const prevPage = () =>
//     setCurrentPage((pervState) => {
//       if (pervState === 1) {
//         return pervState;
//       } else {
//         return pervState - 1;
//       }
//     });

//   return (
//     <div>
//       <TableFourColumn
//         loanData={currentPosts}
//         identifier={identifier}
//         excelData={loanData}
//         header={header}
//         HandleData={HandleData}
//       />
//       <Pagination
//         rowsPerPage={rowPerPage}
//         totalData={loanData.length}
//         paginate={paginate}
//         nextPage={nextPage}
//         prevPage={prevPage}
//       />
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import data from "./mock-data.json";
import TableFourColumn from "./Components/TableFourColumn";

// Only header array and Url to fetch the data needs to be passed.
// The rows can as well be adjusted through the rows prop that is passed to the TableFourColumn component.

function App() {
  const [loanData, setLoanData] = useState(data);
  const all = loanData[0];
  const identifier = Object.keys(all);

  // The below header array needs to entered based on the Table headers required.
  const header = ["Loan account", "Loan Event", "Entered By", "Date"];

  // Enter url below to fetch data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("");
  //     setLoanData(response.data)
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <TableFourColumn
        loanData={loanData}
        identifier={identifier}
        header={header}
        // The rows can be adjusted by changeing the value in the rows prop.
        rows={3}
      />
    </div>
  );
}

export default App;
