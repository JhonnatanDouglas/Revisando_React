import "./App.css";
import ContactForm from "./components/S1-10_ContactForm";
import PersonCard from "./components/S1-11_props";

function App() {
  return (
    <>
      <PersonCard
        personAge={18}
        personName="Leonhart"
      />
      <PersonCard
        personAge={20}
        personName="Annie"
      />
      <ContactForm />
    </>
  );
}

export default App;
