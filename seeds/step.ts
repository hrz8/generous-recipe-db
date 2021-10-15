import { Step } from "../entities/Step";
import recipes from "./recipe";

const steps: Step[] = [
  // Telur GUlung
  {
    id: 1,
    recipe: recipes[1],
    step_number: 1,
    timer: 3,
    description: "menyiapkan"
  },
  {
    id: 2,
    recipe: recipes[1],
    step_number: 2,
    timer: 10,
    description: "meng cracking kan"
  },
  {
    id: 3,
    recipe: recipes[1],
    step_number: 3,
    timer: 15,
    description: "mengocok"
  },
  {
    id: 4,
    recipe: recipes[1],
    step_number: 4,
    timer: 10,
    description: "menggoreng"
  },
  {
    id: 5,
    recipe: recipes[1],
    step_number: 5,
    timer: 5,
    description: "meng cracking kan"
  }
]

export default steps;
