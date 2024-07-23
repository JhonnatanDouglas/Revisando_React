import { useState } from "react";

interface iObj {
  name: string;
  age: string;
  country: string;
}

const NovoFormulario = () => {
  const [list, setList] = useState<iObj[]>([
    {
      name: "",
      age: "",
      country: "",
    },
  ]);

  const [formData, setFormData] = useState<iObj>({
    name: "",
    age: "",
    country: "",
  });

  const submit: (event: any) => void = (event) => {
    event.preventDefault();
    console.log(formData);
    setList([...list, formData]);
    setFormData({ name: "", age: "", country: "" });
  };

  return (
    <div>
      <ul>
        {list.map(({ name, age, country }) => (
          <li key={name}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{country}</p>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Idade"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="País"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NovoFormulario;
