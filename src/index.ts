import express, { Request, Response } from "express";
import { router } from "./routes/routes";
import { homeDetail } from "./controller/user";
import connects from "./config/db";
const app = express();
const PORT = 4000;

app.use("/home", homeDetail);
app.get("/tst", (req: Request, res: Response): void => {
  res.json({ data: "/ Page" });
});

connects();

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
