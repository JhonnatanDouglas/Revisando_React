import React, { useEffect, useRef } from "react";

interface iModal_1 {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal_3 = ({ children, closeModal }: iModal_1) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        closeModal();
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
      role="dialog"
    >
      <div
        className="relative w-full max-w-md p-6 overflow-hidden bg-white rounded-lg shadow-lg"
        ref={modalRef}
      >
        <button
          ref={buttonRef}
          className="absolute px-3 py-1 text-sm font-medium text-white transition-all duration-300 ease-linear bg-blue-700 rounded-lg right-2 top-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={closeModal}
        >
          X
        </button>
        <div className="text-gray-800">{children}</div>
      </div>
    </div>
  );
};

export default Modal_3;
