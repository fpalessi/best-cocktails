import { useContext } from "react";
import CocktailContext from "../context/CocktailProvider";

const useCocktail = () => {
  return useContext(CocktailContext);
};
export default useCocktail;
