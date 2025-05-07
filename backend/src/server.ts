import express from "express";
import logger from "@/infra/logger";
import { Request, Response } from "express";

const app = express();
const port = "3000";

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "API Runing" })
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});