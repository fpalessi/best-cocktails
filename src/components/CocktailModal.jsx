import { Modal, Image } from "react-bootstrap";
import useCocktail from "../hooks/useCocktail";

const CocktailModal = () => {
  const { modal, handleModalClick, recipe, loading } = useCocktail();
  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      // We just want to add to the array the ingredients that have any value (!empty)
      // If there is any value on strIngredient, we'll be pushing them to the array
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(<li>{recipe[`strIngredient${i}`]}</li>);
        return ingredients;
      }
    }
  };

  // if not loading, shows modal
  return (
    !loading && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          src={recipe.strDrinkThumb}
          alt={`Imagen de ${recipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-2">
            <h2>Instrucciones</h2>
            {recipe.strInstructions}
          </div>
          <div className="p-2">
            <h2>Ingredientes </h2>
            {showIngredients()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default CocktailModal;
