import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class RecipeCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 45,
  })
  name!: string;

  // Relations SELF
  @ManyToOne(
    (_: any) => RecipeCategory,
    (recipeCategory) => recipeCategory.children
  )
  parent?: RecipeCategory;

  @OneToMany(
    (_: any) => RecipeCategory,
    (recipeCategory) => recipeCategory.parent
  )
  children?: RecipeCategory[];
}
