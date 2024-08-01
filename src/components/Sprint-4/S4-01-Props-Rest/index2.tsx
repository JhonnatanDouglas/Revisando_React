import { InputHTMLAttributes } from "react";

interface iLabel extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputTestProps = ({ label, ...rest }: iLabel) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input {...rest} />
    </div>
  );
};
