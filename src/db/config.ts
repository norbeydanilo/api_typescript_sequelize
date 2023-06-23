import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
import * as dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DB,
  logging: false,
  models: [Todos],
});

export default connection;
