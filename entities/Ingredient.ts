import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { IngredientCategory } from "./IngredientCategory";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 45,
  })
  name!: string;

  @Column()
  color!: number;

  @Column({
    length: 45,
    nullable: true
  })
  img?: string;

  // Relations M2M
  @ManyToMany(() => IngredientCategory)
  @JoinTable({
    name: "ingredient_category_ingredient"
  })
  ingredientCatories?: IngredientCategory[];
}
