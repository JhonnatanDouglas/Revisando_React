import { useState } from "react";
import CiloDeVidaModal_2 from "./index2";

const CicloDeVida_2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Button</button>
        {isOpen ? <CiloDeVidaModal_2 /> : null}
      </div>
    </>
  );
};

export default CicloDeVida_2;
