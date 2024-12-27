import express from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/test", (req, res) => {
  res.send("Test passed");
});

authRouter.get("/google", authController.google);

export default authRouter;
