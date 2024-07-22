import { useState } from "react";

const IntroUseState = () => {
  const [count, setCount] = useState<number>(0);
  const [nameList, setNameList] = useState<number[]>([1, 2, 3, 4, 5]);

  const addNumber = () => {
    setCount(count + 1);
  };

  const removeNumber = () => {
    setCount(count - 1);
  };

  const addNumberList = () => {
    setNameList([...nameList, 1]);
  };

  return (
    <>
      <h1>{count}</h1>
      <button
        className="p-5 m-1 bg-slate-400"
        onClick={addNumber}
      >
        +
      </button>
      <button
        className="p-5 m-1 bg-slate-400"
        onClick={removeNumber}
      >
        -
      </button>

      <ul>
        {nameList.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <button onClick={addNumberList}>Adicionar numero</button>
    </>
  );
};

export default IntroUseState;
