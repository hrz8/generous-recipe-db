import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Recipe } from "./Recipe";
import { StepIngredients } from "./StepIngredients";

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  step_number!: number;

  @Column("text", {
    nullable: true
  })
  description?: string;

  @Column({
    nullable: true
  })
  timer?: number;

  @Column({
    length: 100,
    nullable: true
  })
  image?: string;

  // Relations FK
  @ManyToOne((_: any) => Recipe, {
    nullable: false
  })
  recipe!: Recipe;

  // Relations 1toM
  @OneToMany(
    (_: any) => StepIngredients,
    stepIngredients => stepIngredients.step
  )
  stepIngredients?: StepIngredients[];
}
