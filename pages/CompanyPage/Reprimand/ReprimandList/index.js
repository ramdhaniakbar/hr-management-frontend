import React, { Component, useMemo, useState } from "react";
import Link from "next/link";
import styles from "/styles/Reprimand/ReprimandList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useGlobalFilter, useTable, usePagination } from "react-table";
import Navbar from "../../../Component/navbar";
import AddNew from "./AddNew";
import Filter from "./Filter";

export default function ReprimandList() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { globalFilter, pageIndex, pageSize } = state;

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.image}>
          <img src="/image_535.png" className={styles.image}></img>
        </div>
        <div className={styles.box}>
          <div className={styles.link}>
            <a href="/CompanyPage/Reprimand/ReprimandList">Reprimand List</a>
            <a href="/CompanyPage/Reprimand/ReprimandType">Reprimand Type</a>
          </div>
          <div className={styles.content}>
            <div class="d-flex justify-content-between align-items-center table-light">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mt-4 ms-4 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalCreate"
              >
                ADD NEW
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mt-4 me-4 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalFilter"
              >
                FILTER
              </button>
            </div>
            <section class="section-sellect-search mb-4">
              <div class="container-fluid">
                <div class="row mt-3 justify-content-end me-1">
                  <div class="col-2">
                    <label
                      for="search"
                      className={`${styles.formLabel} form-label`}
                    >
                      Search
                    </label>
                    <div className={`input-group mb-3`}>
                      <span className={`${styles.spanIcon} input-group-text`}>
                        <FontAwesomeIcon
                          className={styles.searchIcon}
                          icon={faMagnifyingGlass}
                        />
                      </span>
                      <input
                        type="text"
                        className={`${styles.searchInput} form-control`}
                      ></input>
                    </div>
                  </div>
                  <div class="col-1">
                    <label
                      for="select"
                      className={`${styles.formLabel} form-label`}
                    >
                      Showing
                    </label>
                    <select
                      className={`${styles.formSelect} form-select`}
                      id="select"
                    >
                      <option selected>10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="75">75</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section class="section-table">
              <div className={`${styles.contentTable} container-fluid`}>
                <div class="row align-items-start mx-2">
                  <table
                    {...getTableProps}
                    className="table mb-3 shadow-sm rounded-3 overflow-hidden align-middle mb-0 bg-white"
                  >
                    <thead className="bg-light">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                              {column.render("Header")}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
                              );
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
                  <p className={styles.textShow}>
                    Showing 1 to {pageSize} of {pageSize} entries
                  </p>
                  <div>
                    <Link href="#">
                      <FontAwesomeIcon
                        onClick={() => previousPage()}
                        icon={faAngleLeft}
                        className={`${
                          !canPreviousPage
                            ? styles["arrow-icon-disabled"]
                            : styles["arrow-icon"]
                        } `}
                      />
                    </Link>
                    &nbsp; &nbsp;{" "}
                    <span className={styles.numberPage}>{pageIndex + 1}</span>{" "}
                    &nbsp; &nbsp;
                    <Link href="#">
                      <FontAwesomeIcon
                        onClick={() => nextPage()}
                        icon={faAngleRight}
                        className={`${
                          !canNextPage
                            ? styles["arrow-icon-disabled"]
                            : styles["arrow-icon"]
                        } `}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="modal fade"
          id="modalCreate"
          tabindex="-1"
          aria-labelledby="modalAdd"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <AddNew />
          </div>
        </div>

        <div
          class="modal fade"
          id="modalFilter"
          tabindex="-1"
          aria-labelledby="modalFilter"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <Filter />
          </div>
        </div>
      </main>
    </div>
  );
}
