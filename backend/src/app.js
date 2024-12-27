import express from "express";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from authserver");
});

app.use("/auth", authRouter);

export default app;
