import { useState } from "react";

const RenderizacaoCondicional = () => {
  const [isActive, setIsActive] = useState(true);

  const changeActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        {isActive ? <p>Sim</p> : <p>Não</p>}
        <div
          className={isActive ? "bg-black p-5 m-5" : "bg-yellow-300 p-5 m-5"}
        ></div>
        <button onClick={changeActive}>
          {isActive ? "Desativar" : "Ativar"}
        </button>
      </div>
    </>
  );
};

export default RenderizacaoCondicional;
