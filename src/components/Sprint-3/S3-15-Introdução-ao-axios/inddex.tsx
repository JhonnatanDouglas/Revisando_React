import { useEffect, useState } from "react";
import api from "../../../services/api";
import { TechData } from "../../../interfaces/techsInterfaces";

const FruitsAPITest = () => {
  const [techList, setTechList] = useState<TechData>([]);

  useEffect(() => {
    const getFruits = async () => {
      const { data } = await api.get("allTechsList.json");
      console.log(data);
      setTechList(data);
    };
    getFruits();
  }, []);

  return (
    <div>
      <ul>
        {techList.map(({ id, stack, list }) => (
          <li key={id}>
            <p>{stack}</p>
            <ul>
              {list.map(({ id, name, link, alt }) => (
                <li key={id}>
                  <p>{name}</p>
                  <img
                    className="w-10"
                    src={link}
                    alt={alt}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsAPITest;
