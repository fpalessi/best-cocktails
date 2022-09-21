import { Col, Card, Button } from "react-bootstrap";
import useCocktail from "../hooks/useCocktail";

const CocktailItem = ({ cocktail }) => {
  const { handleModalClick, handleCocktailId } = useCocktail();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-5">
        <Card.Img
          variant="top"
          src={cocktail.strDrinkThumb}
          alt={`Imagen de ${cocktail.strDrink}`}
        />
        <Card.Body>
          <Card.Title className="card_title">{cocktail.strDrink}</Card.Title>
          <Button
            variant="secondary"
            className="recipe"
            onClick={() => {
              handleModalClick();
              handleCocktailId(cocktail.idDrink);
            }}
          >
            Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CocktailItem;
