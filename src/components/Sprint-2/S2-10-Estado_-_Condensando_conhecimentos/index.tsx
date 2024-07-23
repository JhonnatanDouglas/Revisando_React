import { useState } from "react";

interface iTeacherList {
  name: string;
  budget: number;
  job: string;
}

const EstadoCondensado = () => {
  const [teacherList, setTeacherList] = useState<iTeacherList[]>([
    {
      name: "Alex",
      budget: 8000,
      job: "Instrutor",
    },
    {
      name: "Gabriel",
      budget: 12000,
      job: "Instrutor Líder",
    },
    {
      name: "Vilson",
      budget: 8500,
      job: "Instrutor",
    },
  ]);

  const teamTotalBudget: number = teacherList.reduce(
    (previousValue, listItem) => {
      return previousValue + listItem.budget;
    },
    0
  );

  const findTeachers = teacherList.filter(
    (teacher) => teacher.job === "Instrutor"
  );

  const findTeachersLider = teacherList.filter(
    (teacher) => teacher.job === "Instrutor Líder"
  );

  const addTeacher = () => {
    const newTeacher = {
      name: "Nicole",
      budget: 8500,
      job: "Instrutor",
    };

    setTeacherList([...teacherList, newTeacher]);
  };

  return (
    <>
      <h2>Membros da Equipe</h2>
      <ul>
        {teacherList.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>Custo total: {teamTotalBudget}</p>
      <br />
      <br />
      <h2>Instrutores Lideres</h2>
      <ul>
        {findTeachersLider.map((teacher) => (
          <li key={teacher.name}>{teacher.name}</li>
        ))}
      </ul>
      <br />
      <br />
      <h2>Instrutores</h2>
      <ul>
        {findTeachers.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <br />
      <br />
      <button
        className="bg-slate-500 text-white"
        onClick={addTeacher}
      >
        Adicionar pessoa
      </button>
    </>
  );
};

export default EstadoCondensado;
