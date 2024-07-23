import { useState } from "react";
import CiloDeVidaModal from "./index2";

const CicloDeVida = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Button</button>
        {isOpen ? <CiloDeVidaModal /> : null}
      </div>
    </>
  );
};

export default CicloDeVida;
