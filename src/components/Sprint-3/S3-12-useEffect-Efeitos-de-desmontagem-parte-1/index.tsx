import { useState } from "react";
import Modal_2 from "./index_2";

const LocalModal_2 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <Modal_2 closeModal={openCloseModal}>
          <p>Aqui está o modal</p>{" "}
        </Modal_2>
      ) : (
        <p>Modal está fechado</p>
      )}
      <button onClick={openCloseModal}>Open Modal</button>
    </>
  );
};

export default LocalModal_2;
