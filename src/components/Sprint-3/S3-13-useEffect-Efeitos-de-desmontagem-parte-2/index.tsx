import { useState } from "react";
import Modal_3 from "./index_2";

const LocalModal_3 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <Modal_3 closeModal={openCloseModal}>
          <p>Aqui está o modal</p>{" "}
        </Modal_3>
      ) : (
        <p>Modal está fechado</p>
      )}
      <button onClick={openCloseModal}>Open Modal</button>
    </>
  );
};

export default LocalModal_3;
