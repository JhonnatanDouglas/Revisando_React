import { useState } from "react";
import Modal_1 from ".";

const LocalModal_1 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <Modal_1 closeModal={openCloseModal}>
          <p>Aqui está o modal</p>{" "}
        </Modal_1>
      ) : (
        <p>Modal está fechado</p>
      )}
      <button onClick={openCloseModal}>Open Modal</button>
    </>
  );
};

export default LocalModal_1;
