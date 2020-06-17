// third-party libraries
import express from "express";

// controllers
import userController from "./userControllers";

// router
const userRoutes = express.Router();

// routes
userRoutes.route("/").get(userController.getAllUsers);

export default userRoutes;
