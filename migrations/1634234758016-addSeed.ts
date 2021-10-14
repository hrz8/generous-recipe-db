import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { Ingredient } from "../entities/Ingredient";
import { IngredientCategory } from "../entities/IngredientCategory";
import { Recipe } from "../entities/Recipe";
import { RecipeCategory } from "../entities/RecipeCategory";
import { User } from "../entities/User";
import ingredients from "../seeds/ingredient";
import ingredientCategories from "../seeds/ingredient_category";
import recipes from "../seeds/recipe";
import recipeCategories from "../seeds/recipe_category";
import users from "../seeds/user";

export class addSeed1634234758016 implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    await Promise.all([
      getRepository(User).save(users),
      getRepository(IngredientCategory).save(ingredientCategories),
      getRepository(RecipeCategory).save(recipeCategories)
    ]);
    await getRepository(Ingredient).save(ingredients);
    await getRepository(Recipe).save(recipes);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
