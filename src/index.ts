import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: Number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world from Typescript!");
});

app.listen(port, () => {
  console.log(`Helow! Listening on port ${port}`);
});
