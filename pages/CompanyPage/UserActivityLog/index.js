import React, { useMemo } from "react";
import Link from "next/link";
import styles from "/styles/UserActivityLog/UactivityLog.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPenToSquare, faXmark, faCaretUp, faCaretDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { COLUMNS } from "./columns";
import USER_ACTIVITY_LOG from "./USER_ACTIVITY_LOG.json";
import { useSortBy, useTable } from "react-table";
import Navbar from "../../Component/navbar";

export default function UserActivityLog() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USER_ACTIVITY_LOG, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className={styles.body}>
      <main className={styles.main} id="main">
        <Navbar />

        <main className={`${styles["content"]}`}>
          <section className="filter-date">
            <form class="form-inline" role="form">
              <div class="container-fluid">
                <div class="row">
                  <div class="form-group col-3">
                    <div class="input-group mb-3">
                      <label for="taskName" className={`form-label mt-4`}>
                        Start Date
                      </label>
                      <div className={`input-group`}>
                        <input type="date" id="taskName" placeholder="New Task" className={`${styles["input-group-user"]} form-control`}></input>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-3">
                    <div class="input-group mb-3">
                      <label for="taskName" className={`form-label mt-4`}>
                        End Date
                      </label>
                      <div className={`input-group`}>
                        <input type="date" id="taskName" placeholder="New Task" className={`${styles["input-group-user"]} form-control`}></input>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles["filter-button"]} form-group col`}>
                    <div class="input-group mb-3">
                      <button type="button" className={`${styles["btn-user"]} p-2 btn btn-sm btn-outline-secondary`}>
                        FILTER BY DATE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>

          <section className="export-table-filter mb-3">
            <div class="col-12 pt-4">
              <div class="mx-3">
                <div className={`${styles["task-content"]} d-flex`}>
                  <div className={`${styles["first-item"]} mt-4`}>
                    <button type="button" className={`${styles["btn-user"]} btn btn-sm btn-outline-secondary`}>
                      EXPORT TABLE
                    </button>
                  </div>
                  <div className={`${styles["select-option"]} col-2 mb-2`}>
                    <label for="select" className={`${styles["form-label"]} form-label`}>
                      Showing
                    </label>
                    <select className={`${styles["input-group-user"]} form-select`} aria-label="Default select example">
                      <option selected>10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  <div className={`col-3.5`}>
                    <label for="search" className={`${styles["form-label"]} form-label ms-3`}>
                      Search
                    </label>
                    <div className={`input-group`}>
                      <span className={`${styles["search-span"]} input-group-text`} id="basic-addon1">
                        <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
                      </span>
                      <input className={`${styles["input-group-user"]} form-control`} type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-table">
            <div className={`container-fluid`}>
              <div className={`${styles["content-table"]} row align-items-start mx-2`}>
                <table {...getTableProps()} className={`${styles["table"]} table mt-3`}>
                  <thead className={`${styles["table-thead"]}`}>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute mt-2`}>
                                  <FontAwesomeIcon icon={faCaretDown} />
                                </span>
                              ) : (
                                <span className={`${styles["icon-sorting"]} d-flex align-items-start flex-column position-absolute`}>
                                  <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                                </span>
                              )
                            ) : (
                              <span className={`${styles["icon"]} d-flex align-items-start flex-column position-absolute`}>
                                <FontAwesomeIcon icon={faCaretUp} className={`${styles["column-icon"]}`} />
                                <FontAwesomeIcon icon={faCaretDown} />
                              </span>
                            )}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className={`${styles["table-tbody"]}`}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section class="section-paginate mt-3">
            <div className={`container-fluid`}>
              <div className={`${styles.rowPaginate}`}>
                <p className={styles.textShow}>Showing 1 to 2 of 2 entries</p>
                <div>
                  <Link href="#">
                    <FontAwesomeIcon icon={faAngleLeft} className={styles.arrowIcon} />
                  </Link>
                  &nbsp; &nbsp; <span className={styles.numberPage}>1 &nbsp; 2 &nbsp; 3</span> &nbsp; &nbsp;
                  <Link href="#">
                    <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
                  </Link>
                </div>
                <ul class="pagination">
                  <li className={`${styles.prevPage} page-item disabled`}>
                    <a className={`${styles.pageLinkPrev} page-link`}>Previous</a>
                  </li>
                  <li className={`${styles.nextPage} page-item`}>
                    <a className={`${styles.pageLinkNext} page-link`} href="#">
                      Go
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </main>
    </div>
  );
}
