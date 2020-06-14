// third-party libraries
import express from "express";

// router
const authRoute = express.Router();

// routes
authRoute.route("/").post();

export default authRoute;
