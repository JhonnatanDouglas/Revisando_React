import "./App.css";

function App() {
  const teacher = {
    name: "Alex",
    job: "Professor",
    budget: 15000,
  };

  const saveTeacher = (teacher: string) => {
    console.log(teacher);
  };

  return (
    <>
      <li>
        <h2>nome: {teacher.name}</h2>
        <span>profissao: {teacher.job}</span>
        <span>salario: {teacher.budget}</span>
        <button onClick={() => saveTeacher("teacher")}>salvar professor</button>
      </li>
    </>
  );
}

export default App;
