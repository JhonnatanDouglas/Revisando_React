interface iPersonCard {
  personName: string;
  personAge: number;
}

const PersonCard = ({ personName, personAge }: iPersonCard) => {
  return (
    <li>
      <h3>Nome Completo: {personName}</h3>
      <p>Idade: {personAge}</p>
    </li>
  );
};

export default PersonCard;
