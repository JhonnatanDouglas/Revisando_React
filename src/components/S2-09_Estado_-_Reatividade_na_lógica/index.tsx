import { useState } from "react";

const UseStateRelativo = () => {
  const [list, setList] = useState<number[]>([1, 2, 3]);

  const total = list.reduce((previousValue, currentNumber) => {
    return previousValue + currentNumber;
  });

  const addNumber = () => {
    setList([...list, 1]);
  };

  const [personList, setPersonList] = useState([
    { name: "leonhart", job: "desenvolvedor" },
    { name: "annie", job: "instrutor" },
    { name: "eren", job: "instrutor" },
  ]);

  const addPerson = () => {
    setPersonList([
      ...personList,
      { name: "rodrigao", job: "instalador de software" },
    ]);
  };

  const filteredPersonList = personList.filter(({ job }) => job == "instrutor");

  const addPersonFiltered = () => {
    const newPerson = { name: "agata", job: "instrutor" };
    setPersonList([...personList, newPerson]);
  };

  return (
    <>
      <div>
        {list.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </div>
      <p>O total é: {total}</p>
      <button onClick={addNumber}>add numero</button>
      <br />
      <br />
      <ul>
        {personList.map(({ job, name }) => (
          <li key={name}>
            <p>{name}</p>
            <p>{job}</p>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={addPerson}>Adicionar rodrigao</button>
      <ul>
        {filteredPersonList.map(({ job, name }) => (
          <li key={name}>
            <p>{name}</p>
            <p>{job}</p>
          </li>
        ))}
      </ul>
      <button onClick={addPersonFiltered}>Adicionar agata</button>
    </>
  );
};

export default UseStateRelativo;
