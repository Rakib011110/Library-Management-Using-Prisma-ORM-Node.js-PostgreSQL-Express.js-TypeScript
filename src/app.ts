import express, { Application, Request, Response } from "express";
import cors from "cors";
import routers from "./router";
import { errorHandler } from "./app/utils/errorHandler";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", routers);
app.use(errorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Server  is ok",
  });
});

export default app;
