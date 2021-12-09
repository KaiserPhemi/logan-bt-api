// third-party libraries
import express from "express";

// routers
const mainRouter = express.Router();
import userRoutes from "./users/userRoutes";
import authRouter from "./auth/authRoutes";
import teamRouter from "./teams/teamRouter";

// routes
mainRouter.use("/users", userRoutes);
mainRouter.use("/auth", authRouter);
mainRouter.use("/teams", teamRouter);

export default mainRouter;
