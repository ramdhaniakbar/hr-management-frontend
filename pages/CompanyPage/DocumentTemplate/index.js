import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/DocumentTemplate/DocumentTemplate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEllipsisVertical, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DownloadTemplate from "./download";

export default function announcement() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} style={{ fontSize: 32, color: "white" }} />
          <div className={styles.logo}>
            <Image src="/EasyHandler_Hitam.png" alt="logo" width={50} height={50} />
          </div>
          <div className={styles.headerRight}>
            <FontAwesomeIcon className={styles.icon2} icon={faEnvelope} style={{ fontSize: 29, color: "white" }} />
          </div>
        </div>
        <div class="row mt-3 me-1">
          <div class="d-flex justify-content-between">
            <div className={`${styles["wrapper"]}`}>
              <div className={styles.company}>
                <p>Company</p>
              </div>
              <div className={styles.judul}>
                <h2>Document Template</h2>
              </div>
              <div className={styles.content}>
                <h4>Surat Keterangan Kerja</h4>
                <p>
                  Informasi bahwa benar pekerja dan sedang aktif<br></br>
                  bekerja di perusahaan.
                </p>

                <div class="d-flex justify-content-end">
                  <div class="mt-5">
                    <button type="button" className={`${styles.btndownload} me-3`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Download
                    </button>
                    <FontAwesomeIcon className={`${styles.icon3} me-3`} icon={faEllipsisVertical} style={{ fontSize: 20 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles["btn-create"]} col-2`}>
              <button type="button" className={`${styles.create} btn btn-primary`}>
                Create template
              </button>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className={`${styles["modal-dialog"]} modal-dialog modal-dialog-centered`}>
            <DownloadTemplate />
          </div>
        </div>
      </main>
    </div>
  );
}
