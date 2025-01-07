import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { Route } from "./interfaces";

const server = express();
const port = 3000;

server.use(cors()); // Allow all origins
server.use(express.json()); // Parse JSON bodies

server.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const routes: { [path: string]: Route } = {
  "/ok": { statusCode: 200, response: { message: "Success!" } },
  "/bad-request": {
    statusCode: 400,
    response: {
      error: "Bad Request",
      message: "There was a problem with your request.",
    },
  },
  "/server-error": {
    statusCode: 500,
    response: {
      error: "Internal Server Error",
      message: "Something went wrong on our end.",
    },
  },
};

Object.keys(routes).forEach((path) => {
  const { statusCode, response } = routes[path];

  server.get(path, (_req: Request, res: Response) => {
    res.status(statusCode).json(response);
  });

  server.post(path, (_req: Request, res: Response) => {
    res.status(statusCode).json(response);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
