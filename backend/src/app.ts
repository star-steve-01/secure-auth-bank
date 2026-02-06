import { configDotenv } from "dotenv";
import express from "express";

configDotenv();

const app = express();

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello from secure-auth-bank ..." });
});

export default app;