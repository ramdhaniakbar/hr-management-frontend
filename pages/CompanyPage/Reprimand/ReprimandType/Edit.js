import React from "react";
import Head from "next/head";
import styles from "/styles/AddNewReprimand.module.css";

const AddNew = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.modal} modal-content rounded-0`}>
          <div
            className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}
          >
            <h3 class="modal-title">Edit Reprimand Type</h3>
          </div>

          <div class="modal-body ms-3">
            <div className={`col-5 mt-3`}>
              <h6>Content</h6>
              <select
                className={`${styles["select-option"]} form-select`}
                aria-label="Default select example"
              >
              </select>
            </div>
          </div>

          <div class="modal-footer border-top mb-2">
            <button
              type="button"
              className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`}
              onClick={() => closeModal(false)}
            >
              SUMBIT
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

export default AddNew;
