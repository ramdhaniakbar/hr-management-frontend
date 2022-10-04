import React from "react";
import Head from "next/head";
import styles from "/styles/Reprimand/Filter.module.css";

const Filter = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}
          >
            <h3 class="modal-title">Search</h3>
          </div>

          <div class="modal-body ms-3">
            <div className={`col-5`}>
              <h6>Assign To</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Open this select menu--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Departement</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Open this select menu--</option>
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Type</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Open this select menu--</option>
              </select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Started Date</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              ></select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Expired Date</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              ></select>
            </div>
            <div className={`col-5 mt-3`}>
              <h6>Status</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
                <option selected>--Open this select menu--</option>
              </select>
            </div>
            <div class="d-flex justify-content-between">
              <div class="col-10 mt-3">
                <label
                  for="content"
                  className={`${styles.formLabel} form-label`}
                >
                  Content
                </label>
                <div className={`input-group mb-3`}>
                  <input
                    type="text"
                    id="content"
                    className={`${styles.inputcontent} form-control`}
                  ></input>
                </div>
              </div>
            </div>
            <div class="col-10">
              <label for="content" className={`${styles.formLabel} form-label`}>
                Feedback
              </label>
              <div className={`input-group mb-3`}>
                <input
                  type="text"
                  id="content"
                  className={`${styles.inputcontent} form-control`}
                ></input>
              </div>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              SEARCH
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              RESET
            </button>
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}
              data-bs-dismiss="modal"
            >
              CANCEL
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Filter;
