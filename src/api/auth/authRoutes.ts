// third-party libraries
import express from "express";

// controller
import authController from "./authControllers";

// middlewares
import validateInput from "../../middlewares/validateInput";

// service
import validationService from "../../services/validationService";

// router
const authRoute = express.Router();

// routes
authRoute
  .route("/login")
  .post(validateInput(validationService.login), authController.loginUser);
authRoute
  .route("/logout")
  .delete(validateInput(validationService.login), authController.logout);

export default authRoute;
