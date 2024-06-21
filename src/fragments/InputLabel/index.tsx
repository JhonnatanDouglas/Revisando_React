interface InputLabelProps {
  InputLabel: string;
}

const InputLabel = ({ InputLabel }: InputLabelProps) => {
  return (
    <fieldset>
      <label htmlFor="">{InputLabel}</label>
      <input type="text" />
    </fieldset>
  );
};

export default InputLabel;
