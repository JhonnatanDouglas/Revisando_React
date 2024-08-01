import { Link } from "react-router-dom";
import RoutesMain from "./routes/RoutesMain";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Ir para Home</Link>
          <Link to="/contato">Ir para Contato</Link>
          <Link to="/sobre">Ir para Sobre</Link>
        </nav>
      </header>
      <RoutesMain />
    </>
  );
}

export default App;
