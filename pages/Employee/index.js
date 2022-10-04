import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columns } from "./columns";
import styles from "/styles/Employee.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Employee() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.container}>
      <Head>
        <title>Company Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faBars}
            style={{ fontSize: 32, color: "white" }}
          />
          <div className={styles.logo}>
            <Image
              src="/EasyHandler_Hitam.png"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.headerRight}>
            <a href="#">
              <FontAwesomeIcon
                className={styles.icon2}
                icon={faEnvelope}
                style={{ fontSize: 29, color: "white" }}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className={styles.icon2}
                icon={faUser}
                style={{ fontSize: 29, color: "white" }}
              />
            </a>
          </div>
        </div>

        <div className={styles.content}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroups) => (
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {headerGroups.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
