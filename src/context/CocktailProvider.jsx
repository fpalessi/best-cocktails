import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CocktailContext = createContext();

const CocktailProvider = ({ children }) => {
  const [cocktail, setCocktail] = useState([]);
  const [modal, setModal] = useState(false);
  const [cocktailID, setCocktailID] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  // Renders component everytime cocktailID changes.
  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!cocktailID) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;
        // Get is default for axios
        const { data } = await axios(url);
        // Set on State
        console.log(data);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [cocktailID]);
  // Injecting data passed from form
  const getCocktail = async (formData) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formData.name}&c=${formData.category}`;
      const { data } = await axios(url);
      // Set on State
      setCocktail(data.drinks);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Handles
  const handleModalClick = () => {
    // State to opposite
    setModal(!modal);
  };
  const handleCocktailId = (id) => {
    // Sets ID on State so we can getRecipe();
    setCocktailID(id);
  };

  return (
    <CocktailContext.Provider
      value={{
        getCocktail,
        cocktail,
        handleModalClick,
        modal,
        handleCocktailId,
        recipe,
        loading,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
export { CocktailProvider };

export default CocktailContext;
