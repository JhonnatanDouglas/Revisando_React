import "./App.css";
import ContactForm from "./components/S1-10_ContactForm";
import PersonCard from "./components/S1-11_props";
import PageTemplate from "./components/S1-12-pageTemplate";
import PropChildren from "./components/S1-12-propChildren";

function App() {
  return (
    <>
      <PageTemplate>
        <PersonCard
          personAge={18}
          personName="Leonhart"
        />
        <PersonCard
          personAge={20}
          personName="Annie"
        />
        <ContactForm />
        <PropChildren>
          <h1>test</h1>
          <p>test 2</p>
        </PropChildren>
      </PageTemplate>
    </>
  );
}

export default App;
