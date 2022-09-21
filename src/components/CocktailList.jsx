import { Row } from "react-bootstrap";
import useCocktail from "../hooks/useCocktail";
import CocktailItem from "./CocktailItem";

const CocktailList = () => {
  const { cocktail } = useCocktail();
  return (
    <Row className="mt-5">
      {cocktail.map((cocktail) => (
        <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </Row>
  );
};

export default CocktailList;
