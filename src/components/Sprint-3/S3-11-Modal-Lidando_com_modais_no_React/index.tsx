import React from "react";

interface iModal_1 {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal_1 = ({ children, closeModal }: iModal_1) => {
  return (
    <div
      className=""
      role="dialog"
    >
      <div className="">
        <button
          className=""
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
