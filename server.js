import express from "express";
const server = express();
const port = 3000;

server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

server.get("/ok", (req, res) => {
  res.status(200).json({ message: "Success!" });
});

server.get("/bad-request", (req, res) => {
  res.status(400).json({ error: "Bad Request" });
});

server.get("/server-error", (req, res) => {
  res.status(500).json({ error: "Internal Server Error" });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
