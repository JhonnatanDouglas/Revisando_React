import { useEffect, useState } from "react";
import FormularioDeAtualizacao from "./index2";

const EfeitosDeAtualizacao = () => {
  const localToDoList = localStorage.getItem("@TODOLIST");
  const [toDo, setToDo] =
    useState[localToDoList ? JSON.parse(localToDoList) : []];

  const addToDo = (FormData) => {
    const newToDo = { ...FormData, id: crypto.randomUUID() };
    setToDo([...toDo, newToDo]);
  };

  useEffect(() => {
    localStorage.setItem("@TODOLIST", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <div>
        <FormularioDeAtualizacao addToDoList={addToDo}>
          <ul>
            {toDo.map((list, index) => (
              <li key={index}>{list.text}</li>
            ))}
          </ul>
        </FormularioDeAtualizacao>
      </div>
    </>
  );
};

export default EfeitosDeAtualizacao;
