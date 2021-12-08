// third-party libraries
import express from "express";

// routers
const mainRouter = express.Router();
import userRoutes from "./users/userRoutes";
import authRouter from "./auth/authRoutes";

// routes
mainRouter.use("/users", userRoutes);
mainRouter.use("/auth", authRouter);

export default mainRouter;
