import useOutClick from "../../../hooks/useOutClick";
import useOutKeyDown from "../../../hooks/useOutKeyDown";

interface iModal_2 {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalAprendendo = ({ children, closeModal }: iModal_2) => {
  const divRef = useOutClick({ callback: closeModal });
  const buttonRef = useOutKeyDown({ callback: closeModal, typeKey: "Escape" });

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
