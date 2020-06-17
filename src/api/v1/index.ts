// third-party libraries
import express from "express";

// routers
const mainRouter = express.Router();
import userRoutes from "./users/userRoutes";

// routes
mainRouter.use("/users", userRoutes);

export default mainRouter;
