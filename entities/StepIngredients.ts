import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Ingredient } from "./Ingredient";
import { Recipe } from "./Recipe";
import { Step } from "./Step";

@Entity()
export class StepIngredients extends BaseEntity {
  @Column({
    nullable: true
  })
  amount?: number;

  @Column({
    length: 25,
    nullable: true
  })
  unit?: string;

  // Relations FK
  @ManyToOne((_: any) => Ingredient, {
    nullable: false
  })
  ingredient!: Ingredient;

  // Relations Mto1
  @ManyToOne(
    (_: any) => Recipe,
    recipe => recipe.stepIngredients,
    { primary: true }
  )
  recipe!: Recipe;

  @ManyToOne(
    (_: any) => Step,
    step => step.stepIngredients,
    { primary: true }
  )
  step!: Step;
}
