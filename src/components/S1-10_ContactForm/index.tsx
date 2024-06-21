import InputLabel from "../../fragments/InputLabel";
import InputLabelProps from "../../fragments/S1-11_InputLabel";

const ContactForm = () => {
  return (
    <form>
      <h2>fale conosco</h2>
      <InputLabel InputLabel="Nome: " />
      <InputLabel InputLabel="Idade: " />
      <InputLabel InputLabel="Profissao: " />
      <br />
      <br />
      <InputLabelProps
        id="1"
        type="text"
        InputLabel="Nome de Usuario: "
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
