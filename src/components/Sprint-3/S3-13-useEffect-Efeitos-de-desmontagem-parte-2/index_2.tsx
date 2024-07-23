import React, { KeyboardEvent, useEffect, useRef } from "react";

interface iModal_1 {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal_3 = ({ children, closeModal }: iModal_1) => {
  // tipagem correta para modalRef
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      // console.log(e.target.value); // não há necessidade de acessar e.target.value para MouseEvent
      if (!modalRef.current?.contains(e.target as Node)) {
        closeModal(); // aqui, clicando fora irá fechar o modal
        console.log("clicou");
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      console.log(e.key);
      if (e.key === "Escape") {
        // closeModal();
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className=""
      role="dialog"
    >
      <div
        className=""
        ref={modalRef}
      >
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

export default Modal_3;
