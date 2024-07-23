import React, { useEffect, useRef } from "react";

interface iModal_1 {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal_2 = ({ children, closeModal }: iModal_1) => {
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

export default Modal_2;
