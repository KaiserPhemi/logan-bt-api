// third-party libraries
import express from "express";

// controller
import teamCtrl from "./teamController";

// router
const teamRouter = express.Router();

teamRouter.route("/").get(teamCtrl.fetchAllTeams).post(teamCtrl.addTeam);
teamRouter.route("/:id").get(teamCtrl.fetchTeamById);

export default teamRouter;
