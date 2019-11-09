import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Category } from "./category.entity";
import { Fragment } from "./fragment.entity";

@Entity({ name: "points" })
export class Point extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Category[];

  @ManyToMany(type => Fragment)
  @JoinTable()
  fragments: Fragment[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
