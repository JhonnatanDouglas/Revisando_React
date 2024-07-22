import { useState } from "react";

interface iFruitsListDatabase {
  name: string;
  price: number;
  category: string;
}

const fruitsListDatabase: iFruitsListDatabase[] = [
  {
    name: "Morango",
    price: 15,
    category: "Frutas",
  },
  {
    name: "Uva",
    price: 23,
    category: "Frutas",
  },
  {
    name: "Banana",
    price: 23,
    category: "Frutas",
  },
  {
    name: "Beterraba",
    price: 5,
    category: "Legumes",
  },
];

const FruitsList = () => {
  const [fruitsList, setFruitsList] =
    useState<iFruitsListDatabase[]>(fruitsListDatabase);

  const reducing = fruitsList.reduce((prev, itemList) => {
    return prev + itemList.price;
  }, 0);

  const filteredFruitsLegumes = fruitsList.filter(
    (fruit) => fruit.category === "Legumes"
  );

  const filteredFruitsFrutas = fruitsList.filter(
    (fruit) => fruit.category === "Frutas"
  );

  const addFruit = () => {
    const newFruit = {
      name: "Abacaxi",
      price: 20,
      category: "Frutas",
    };
    setFruitsList([...fruitsList, newFruit]);
  };

  return (
    <>
      <h2>Lista de Frutas:</h2>
      <ul>
        {fruitsList.map(({ name, category, price }) => (
          <li key={name}>
            <h3>nome: {name}</h3>
            <h4>categoria: {category}</h4>
            <p>preço: {price}</p>
          </li>
        ))}
      </ul>
      <p>Preço total: {reducing}</p>
      <br />
      <br />
      <h2>Lista de Legumes por categoria:</h2>
      <ul>
        {filteredFruitsLegumes.map(({ name, category, price }) => (
          <li key={name}>
            <h3>nome: {name}</h3>
            <h4>categoria: {category}</h4>
            <p>preço: {price}</p>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <h2>Lista de Frutas por categoria:</h2>
      <ul>
        {filteredFruitsFrutas.map(({ name, category, price }) => (
          <li key={name}>
            <h3>nome: {name}</h3>
            <h4>categoria: {category}</h4>
            <p>preço: {price}</p>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={addFruit}>Adicionar nova fruta</button>
    </>
  );
};

export default FruitsList;
