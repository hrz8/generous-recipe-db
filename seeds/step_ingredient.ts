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
  },
  {
    ingredient: ingredients[0],
    amount: 10,
    unit: "gram",
    recipe: recipes[3],
    step: steps[5]
  },
  {
    ingredient: ingredients[4],
    amount: 21,
    unit: "sdt",
    recipe: recipes[3],
    step: steps[6]
  },
  {
    ingredient: ingredients[1],
    amount: 1,
    unit: "liter",
    recipe: recipes[3],
    step: steps[7]
  }
]

export default stepIngredients;
