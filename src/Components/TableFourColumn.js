import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import TableHead from "./TableHead";
import classes from "./Table.module.css";
import TableBody from "./TableBody";
import { CSVLink } from "react-csv";
import Pagination from "./Pagination";

function TableFourColumn({ loanData, identifier, header, rows }) {
  const [searchAccount, setSearchAccount] = useState("");
  const [searchDescription, setSearchDescription] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");

  const datafiltering = loanData.filter((item) => {
    if (
      !globalSearch &&
      !searchAccount &&
      !searchDescription &&
      !searchBy &&
      !searchDate
    )
      return item;
    if (globalSearch !== "") {
      return (
        item[identifier[0]]
          .toLowerCase()
          .includes(globalSearch.toLowerCase()) ||
        item[identifier[1]]
          .toLowerCase()
          .includes(globalSearch.toLowerCase()) ||
        item[identifier[2]]
          .toLowerCase()
          .includes(globalSearch.toLowerCase()) ||
        item[identifier[3]].toLowerCase().includes(globalSearch.toLowerCase())
      );
    }
    if (searchAccount !== "") {
      return item[identifier[0]]
        .toLowerCase()
        .includes(searchAccount.toLowerCase());
    }
    if (searchDescription !== "") {
      return item[identifier[1]]
        .toLowerCase()
        .includes(searchDescription.toLowerCase());
    }
    if (searchBy !== "") {
      return item[identifier[2]].toLowerCase().includes(searchBy.toLowerCase());
    }
    if (searchDate !== "") {
      return item[identifier[3]]
        .toLowerCase()
        .includes(searchDate.toLowerCase());
    }
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [rowPerPage] = useState(rows);

  const indexOfLastPage = currentPage * rowPerPage;
  const indexOfFirstPage = indexOfLastPage - rowPerPage;
  const currentPosts = datafiltering.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((pervState) => {
      if (pervState === Math.ceil(datafiltering.length / rowPerPage)) {
        return pervState;
      } else {
        return pervState + 1;
      }
    });
  const prevPage = () =>
    setCurrentPage((pervState) => {
      if (pervState === 1) {
        return pervState;
      } else {
        return pervState - 1;
      }
    });

  const dataMapping = currentPosts.map((el, i) => (
    <TableBody
      key={i}
      account={el[identifier[0]]}
      description={el[identifier[1]]}
      enteredby={el[identifier[2]]}
      date={el[identifier[3]]}
    />
  ));

  return (
    <div className={classes.margin}>
      <div className={classes.main}>
        <div className={classes.flex}>
          <h2 className={classes.header}>Portfolio at glance</h2>
          <CSVLink data={loanData}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z" />
            </svg>
          </CSVLink>
        </div>
        <div className={classes.flexSearch}>
          <input
            type="search"
            placeholder="Search"
            className="form-control"
            style={{ width: "400px" }}
            onChange={(e) => {
              setGlobalSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <Table striped bordered hover responsive>
        <TableHead header={header} />
        <tbody>
          <tr>
            <td>
              <input
                className={classes.input}
                placeholder="Filter Account"
                onChange={(e) => {
                  setSearchAccount(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                className={classes.input}
                placeholder="Filter Event"
                onChange={(e) => {
                  setSearchDescription(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                className={classes.input}
                placeholder="Filter User"
                onChange={(e) => {
                  setSearchBy(e.target.value);
                }}
              />
            </td>
            <td>
              <input
                className={classes.input}
                placeholder="Filter Date"
                onChange={(e) => {
                  setSearchDate(e.target.value);
                }}
              />
            </td>
          </tr>
          {dataMapping}
        </tbody>
      </Table>
      <Pagination
        rowsPerPage={rowPerPage}
        totalData={loanData.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default TableFourColumn;
