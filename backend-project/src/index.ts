import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.get("/public", (req: Request, res: Response) => {
  res.send("Public API");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
