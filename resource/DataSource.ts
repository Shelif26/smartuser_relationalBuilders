import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const DBConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "",
  password: "",
  port: 5432,
  database: "",
  synchronize: false,
  logging: true,
  entities: ["./entities/*ts"],
});
