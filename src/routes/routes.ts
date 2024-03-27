import { Router } from "express";
import { client } from "../db/connection";

const router = Router();

router.get("/", async (req, res) => {
  await client.connect();
  const data = await client.query("SELECT * from clientes");
  const { rows } = data;
  res.send(rows);
  await client.end();
});

router.post("/", async (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);
});

export default router;
