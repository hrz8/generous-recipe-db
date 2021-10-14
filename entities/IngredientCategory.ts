import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class IngredientCategory {
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

  // Relations SELF
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
