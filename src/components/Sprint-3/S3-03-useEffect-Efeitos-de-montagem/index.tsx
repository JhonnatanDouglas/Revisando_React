import { useEffect, useState } from "react";

interface iFruits {
  id: string;
  name: string;
  color: string;
  count: string;
}

const EfeitosDeMontagem = () => {
  const [fruitsList, setFruitsList] = useState<iFruits[]>([]);

  useEffect(() => {
    const getFruits = async () => {
      const res = await fetch("https://www.fruitmap.org/api/trees");
      const json = await res.json();
      setFruitsList(json);
    };
    getFruits();
  }, []);

  return (
    <>
      <ul>
        {fruitsList.map(({ id, name, color, count }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{color}</p>
            <p>{count}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EfeitosDeMontagem;
