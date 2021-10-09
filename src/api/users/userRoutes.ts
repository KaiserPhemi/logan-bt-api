// third-party libraries
import express from "express";

// middlewares
import validateInput from "../../middlewares/validateInput";

// services
import validationService from "../../services/validationService";

// controllers
import userController from "./userControllers";

// router
const userRoutes = express.Router();

// routes
userRoutes
  .route("/")
  .get(userController.getAllUsers)
  .post(validateInput(validationService.addUser), userController.addUser);

userRoutes.route("/verify").put(userController.verifyUser);

export default userRoutes;
