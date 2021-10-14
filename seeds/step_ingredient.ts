import { StepIngredients } from "../entities/StepIngredients";
import ingredients from "./ingredient";
import recipes from "./recipe";
import steps from "./step";

const stepIngredients: StepIngredients[] = [
  {
    ingredient: ingredients[6],
    amount: 20,
    unit: "pcs",
    recipe: recipes[1],
    step: steps[1]
  },
  {
    ingredient: ingredients[7],
    amount: 500,
    unit: "ml",
    recipe: recipes[1],
    step: steps[3]
  }
]

export default stepIngredients;
