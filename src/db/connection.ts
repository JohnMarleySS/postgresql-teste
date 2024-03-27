import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  port: 7000,
  database: "teste",
  password: "3112",
});
