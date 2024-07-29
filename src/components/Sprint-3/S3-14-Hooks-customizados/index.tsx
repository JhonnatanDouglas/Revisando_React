import { useState } from "react";
import Modal_3 from "./index_2";

const LocalModal_3 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <Modal_3 closeModal={openCloseModal}>
          <p>Aqui está o modal</p>
        </Modal_3>
      ) : (
        <p>Modal está fechado</p>
      )}
      <button
        className="transition-all duration-300 ease-linear text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={openCloseModal}
      >
        Open Modal
      </button>
    </>
  );
};

export default LocalModal_3;
