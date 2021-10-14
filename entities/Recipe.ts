import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { IngredientCategory } from "./IngredientCategory";
import { RecipeCategory } from "./RecipeCategory";
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

  @ManyToOne((_: any) => User, {
    nullable: false
  })
  @JoinColumn({
    name: "author_id"
  })
  author!: User;

  @ManyToMany(() => RecipeCategory)
  @JoinTable({
    name: "recipe_category_recipe"
  })
  recipeCategories?: RecipeCategory[];
}
