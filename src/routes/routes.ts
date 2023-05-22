import express, { Request, Response } from "express";
const router = express.Router();

router.get("/home", (req: Request, res: Response): void => {
  res.json({ message: "Home Page" });
});

router.get("/about", (req: Request, res: Response): void => {
  res.json({ message: "About Page" });
});

export { router };
