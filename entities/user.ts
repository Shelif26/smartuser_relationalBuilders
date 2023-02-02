import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  DeleteDateColumn
} from "typeorm";
import { AS_Partner } from "./partner";

@Entity()
export class AS_user {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;

  @Column({
    type: "varchar",
  })
  FirstName: string;

  @Column({
    type: "varchar",
  })
  SecondName: string;

  @Column({
    type: "varchar",
  })
  UUId!: string;

  @Column({
    type: "varchar",
  })
  Email: string;

  @Column({
    type: "varchar",
  })
  Mob_no: string;

  @CreateDateColumn({ name: "created_timestamp", nullable: false })
  createdTimestamp?: Date;

  @DeleteDateColumn({
    nullable:false
  })
  DeleteDateColumn:Date

  @OneToOne(() => AS_Partner, (Partner) => AS_Partner.AS_user, {
    onDelete: "CASCADE",
    cascade: ["insert", "update"],
  })
  Partner: AS_Partner;
}
