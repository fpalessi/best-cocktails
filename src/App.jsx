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
        <header className="py-5">
          <h1>Encuentra tu cocktail favorito 🍸</h1>
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
