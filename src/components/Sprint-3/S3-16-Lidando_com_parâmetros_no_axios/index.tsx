import { useEffect, useState } from "react";
import api from "../../../services/api";
import { iFruitAlex } from "../../../interfaces/fruitsAPIInterfaces";

function ParametrosComAxios() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [fruitList, setFruitList] = useState<iFruitAlex[]>([]);

  useEffect(() => {
    const getFruits = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("fruits", {
          params: {
            category: category !== "" ? category : undefined,
          },
        });
        setFruitList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFruits();
  }, [category]);

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setCategory("")}>Todos</button>
        </li>
        <li>
          <button onClick={() => setCategory("vermelha")}>Vermelhas</button>
        </li>
        <li>
          <button onClick={() => setCategory("amarela")}>Amarelas</button>
        </li>
      </ul>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {fruitList.map(({ id, name }) => (
            <li key={id}>
              <h2>{name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ParametrosComAxios;
