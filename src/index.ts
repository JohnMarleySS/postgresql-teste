import router from "./routes/routes";
import dotenv from "dotenv";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

interface RequestBody {
  name: string;
}

app.use(router);

const appListen = process.env.PORT || 3001;
app.listen(appListen, () => console.log(`Aberto na porta: ${appListen}`));
