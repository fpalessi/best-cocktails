import { Container } from "react-bootstrap";

import { CategoryProvider } from "./context/CategoryProvider";
import { CocktailProvider } from "./context/CocktailProvider";

import CocktailForm from "./components/CocktailForm";
import CocktailList from "./components/CocktailList";
import CocktailModal from "./components/CocktailModal";

function App() {
  return (
    <CategoryProvider>
      <CocktailProvider>
        <header className="py-3">
          <h1>Yo-Fave-Drink 🍸</h1>
          <p style={{ position: "fixed", left: "1%", top: "6%" }}>
            Not sure what to take?... No worries
          </p>
        </header>
        <Container className="mt-5">
          <CocktailForm />
          <CocktailList />
          <CocktailModal />
        </Container>
      </CocktailProvider>
    </CategoryProvider>
  );
}

export default App;
