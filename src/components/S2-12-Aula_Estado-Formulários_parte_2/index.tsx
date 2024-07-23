import { useState } from "react";

const Formulario_2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    budget: "",
  });

  const submit: (event: any) => void = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      job: "",
      budget: "",
    });
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <input
            placeholder="Nome"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            placeholder="Trabalho"
            type="text"
            value={formData.job}
            onChange={(e) => setFormData({ ...formData, job: e.target.value })}
          />
          <input
            placeholder="Salario"
            type="text"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Formulario_2;
