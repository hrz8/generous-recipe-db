import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class RecipeCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 45,
  })
  name!: string;

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
