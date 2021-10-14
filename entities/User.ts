import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 45,
  })
  name!: string;
}
