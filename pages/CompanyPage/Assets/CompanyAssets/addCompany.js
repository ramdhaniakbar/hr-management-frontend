import React from "react";
import Head from "next/head";
import styles from "/styles/Company/ModalAdd.module.css";

const ModalAdd = ({ closeModal }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Company Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      </Head>

      <div className={`${styles.modal} modal-content`}>
        <div className={`${styles.modalContent} modal-header mt-2 ms-3 mb-3 me-3 border-bottom`}>
          <h3 class="modal-title">Add Company Assets</h3>
        </div>

        <div className={`${styles.modalBody} modal-body ms-3`}>
          <div class="d-flex justify-content-between">
            <div class="col-5">
              <label for="assetsCategory" className={`${styles.formLabel} form-label`}>
                Assets Category
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="assetsCategory" className={`${styles.inputAssetsCategory} form-control`}></input>
              </div>
            </div>

            <div class="col-5 me-3">
              <label for="serialNumber" className={`${styles.formLabel} form-label`}>
                Quantity
              </label>
              <div className={`input-group mb-3`}>
                <input type="text" id="serialNumber" className={`${styles.inputAssetsCategory} form-control`}></input>
              </div>
            </div>
          </div>

          <div class="me-3 mt-4 mb-5">
            <label for="description" className={`${styles.formLabel} form-label`}>
              Description
            </label>
            <div className={`${styles.desc} input-group mb-3`}>
              <textarea type="text" id="description" className={`${styles.inputAssetsCategory} form-control`}></textarea>
            </div>
          </div>

          <button type="button" className={`${styles.btnModal} btn btn-outline-secondary mt-3 me-2 btn-sm`}>
            CLICK HERE TO UPLOAD
          </button>
        </div>

        <div class="modal-footer border-top mb-2">
          <button type="button" className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-1 btn-sm`} onClick={() => closeModal(false)}>
            CLOSE
          </button>
          <button type="button" className={`${styles.btnModal} btn btn-outline-secondary mt-2 me-2 btn-sm`}>
            UPDATE
          </button>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </div>
  );
};

export default ModalAdd;
