interface iLabelProps {
  id: string;
  type: "email" | "text" | "number";
  InputLabel: string;
}

const InputLabelProps = ({ id, type, InputLabel }: iLabelProps) => {
  return (
    <fieldset>
      <label htmlFor={id}>{InputLabel}</label>
      <input type={type} />
    </fieldset>
  );
};

export default InputLabelProps;
