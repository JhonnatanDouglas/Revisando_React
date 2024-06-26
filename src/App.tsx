import "./styles/reset.css";
import "./styles/styles.css";

type Item = {
  id: number;
  name: string;
  job: string;
};

function App() {
  const lista: Item[] = [
    { id: 1, name: "Ana", job: "Engenheira" },
    { id: 2, name: "Bruno", job: "Desenvolvedor" },
    { id: 3, name: "Carlos", job: "Designer" },
    { id: 4, name: "Diana", job: "Gerente de Projetos" },
    { id: 5, name: "Eduardo", job: "Analista de Dados" },
    { id: 6, name: "Fernanda", job: "Arquiteta" },
    { id: 7, name: "Gabriel", job: "Médico" },
    { id: 8, name: "Helena", job: "Advogada" },
    { id: 9, name: "Igor", job: "Professor" },
    { id: 10, name: "Juliana", job: "Marketing" },
  ];
  return (
    <ul className="list__cards">
      {lista.map(({ id, job, name }) => (
        <li
          key={id}
          className="cards"
        >
          <h1>Nome: {name}</h1>
          <h3>Profissao: {job}</h3>
        </li>
      ))}
    </ul>
  );
}

export default App;
