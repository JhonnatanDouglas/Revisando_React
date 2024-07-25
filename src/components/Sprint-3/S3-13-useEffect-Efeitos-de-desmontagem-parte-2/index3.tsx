import { useEffect, useRef } from "react";

interface iModal_2 {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalAprendendo = ({ children, closeModal }: iModal_2) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!divRef.current?.contains(e.target as Node)) {
        closeModal();
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.addEventListener("mousedown", handleClick);
      window.addEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
      role="dialog"
    >
      <div
        ref={divRef}
        className="relative w-full max-w-md p-6 overflow-hidden bg-white rounded-lg shadow-lg"
      >
        <button
          ref={buttonRef}
          onClick={closeModal}
        >
          Fechar
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalAprendendo;
