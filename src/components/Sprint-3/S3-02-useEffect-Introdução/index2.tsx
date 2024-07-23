import { useEffect, useState } from "react";

const CiloDeVidaModal_2 = () => {
  const [count, setCount] = useState(0);

  // quando a montagem do componente acontecer

  useEffect(() => {
    console.log("Uma montagem aconteceu");
  }, []);

  // quando uma atualizaçao acontecer no componente

  useEffect(() => {
    console.log("Uma montagem foi editada");
  }, [count]);

  // quando a desmontagem acontecer

  useEffect(() => {
    return () => {
      console.log("uma desmontagem aconteceu");
    };
  }, []);

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

export default CiloDeVidaModal_2;
