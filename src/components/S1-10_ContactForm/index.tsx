import InputLabel from "../../fragments/InputLabel";

const ContactForm = () => {
  return (
    <form>
      <h2>fale conosco</h2>
      <InputLabel InputLabel="Nome" />
      <InputLabel InputLabel="Idade" />
      <InputLabel InputLabel="Profissao" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
