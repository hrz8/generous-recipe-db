import {
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class IngredientCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 255,
  })
  name!: string;

  @Column("text")
  description!: string;

  @ManyToOne(
    (_: any) => IngredientCategory,
    (ingredientCategory) => ingredientCategory.children
  )
  parent?: IngredientCategory;

  @OneToMany(
    (_: any) => IngredientCategory,
    (ingredientCategory) => ingredientCategory.parent
  )
  children?: IngredientCategory[];
}
