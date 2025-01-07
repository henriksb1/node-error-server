import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const server = express();
const port = 3000;

server.use(cors()); // Allow all origins

server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

server.get("/ok", (req: Request, res: Response) => {
  res.status(200).json({ message: "Success!" });
});

server.get("/bad-request", (req: Request, res: Response) => {
  res.status(400).json({ error: "Bad Request" });
});

server.get("/server-error", (req: Request, res: Response) => {
  res.status(500).json({ error: "Internal Server Error" });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
