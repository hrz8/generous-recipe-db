import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { IngredientCategory } from "./IngredientCategory";
import { RecipeCategory } from "./RecipeCategory";
import { StepIngredients } from "./StepIngredients";
import { User } from "./User";

@Entity()
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 255,
  })
  name!: string;

  @Column("text", {
    nullable: true
  })
  description?: string;

  // Relations FK
  @ManyToOne((_: any) => User, {
    nullable: false
  })
  @JoinColumn({
    name: "author_id"
  })
  author!: User;

  // Relations M2M
  @ManyToMany(() => RecipeCategory)
  @JoinTable({
    name: "recipe_category_recipe"
  })
  recipeCategories?: RecipeCategory[];

  // Relations 1toM
  @OneToMany(
    (_: any) => StepIngredients,
    stepIngredients => stepIngredients.recipe
  )
  stepIngredients?: StepIngredients[];
}
