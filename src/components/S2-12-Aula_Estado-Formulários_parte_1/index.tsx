import { useState } from "react";

const Formulario_1 = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [budget, setBudget] = useState("");

  const submit: (event: any) => void = (event) => {
    event.preventDefault();
    console.log({ name, job, budget });
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <input
            placeholder="Nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Trabalho"
            type="text"
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            placeholder="Salario"
            type="text"
            onChange={(e) => setBudget(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Formulario_1;
