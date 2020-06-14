// third-party libraries
import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";

// main route
import mainRouter from "./api/v1/index";

// middlewares
import appMiddleware from "./middlewares/appMiddleware";

// instantiate app
dotenv.config();
const app = express();
appMiddleware(app);
const PORT = process.env.PORT;

// default routes
app.use("/api/v1", mainRouter);
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Welcome to Logan Bug Tracker API"
  });
});

// start app on port
if (!module.parent) {
  try {
    app.listen(PORT, () => {
      console.log(`App started. Listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}
