// third-party libraries
import "babel-polyfill";
import express from "express";

// main route
import mainRouter from "./api/index";

// middlewares
import appMiddleware from "./middlewares/appMiddleware";

// instantiate app
const app = express();
appMiddleware(app);

// default routes
app.use("/api/v1", mainRouter);
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Welcome to Logan Bug Tracker API"
  });
});

export default app;
