import React from "react";
import styles from "./style.module.css";

interface iModal_1 {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal_1 = ({ children, closeModal }: iModal_1) => {
  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
    >
      <div className={styles.modalBox}>
        <button
          className={styles.closeButton}
          onClick={closeModal}
        >
          Fechar
        </button>
        <p className="text-gray-400">{children}</p>
      </div>
    </div>
  );
};

export default Modal_1;
