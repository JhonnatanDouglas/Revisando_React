import { useState } from "react";

const CiloDeVidaModal = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={addCount}>Incrementar contador</button>
    </div>
  );
};

export default CiloDeVidaModal;
