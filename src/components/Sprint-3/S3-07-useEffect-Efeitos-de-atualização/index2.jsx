import { useState } from "react";

const FormularioDeAtualizacao = ({ addToDoList }) => {
  const [text, setText] = useState({ name: "" });

  const submit = (e) => {
    e.preventDefault();
    addToDoList(text);
    setText({ name: "" });
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Adicionar texto"
          value={text.name}
          onChange={(e) => setText({ name: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormularioDeAtualizacao;
