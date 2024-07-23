import { useRef } from "react";

const UsandoReferencia = () => {
  const exemplo = useRef(null);

  return (
    <>
      <div>
        <button onClick={() => console.log(exemplo)}>Debug</button>
        <h1 ref={exemplo}>Exemplo</h1> {/* {current: h1} */}
        <br />
        <button onClick={() => console.log(exemplo.current)}>Debug</button>
        <h1 ref={exemplo}>Exemplo</h1> {/* <h1>Exemplo</h1> */}
      </div>
    </>
  );
};

export default UsandoReferencia;
