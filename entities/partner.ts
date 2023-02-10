import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { AS_user } from "./user";

@Entity()
export class AS_Partner {
  // static save(entity: AS_Partner | null) {
  //   throw new Error("Method not implemented.");
  // }
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;

  @Column({
    type: "varchar",
  })
  Association: string;

  @Column({
    type: "varchar",
  })
  Partner: string;

  @Column({
    type: "varchar",
  })
  PartnerID: string;

  @OneToOne(() => AS_user, {
    cascade: ["insert", "update"],
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "userid",
  })
  user: AS_user;
  static AS_user: any;
}
