// third-party libraries
import { Request, Response } from "express";

// helper functions
import errorResponse from "../../helpers/errorResponse";

// services
import teamService from "../../services/teamService";

// teams controller
const teamCtrl = {
  /**
   * Fetched all teams
   * @param req
   * @param res
   * @returns
   */
  async fetchAllTeams(req: Request, res: Response): Promise<Response> {
    try {
      const allTeams = await teamService.fetchAllTeams();
      return res.status(200).json({
        message: "All teams fetched",
        teams: allTeams
      });
    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Adds a new team
   * @param req
   * @param res
   * @returns
   */
  async addTeam(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    try {
      const team = await teamService.addTeam(name, 2);
      return res.status(201).json({
        message: "New team added",
        team
      });
    } catch (error) {
      return errorResponse(error, res);
    }
  },

  /**
   * Fetches a team by team id
   * @param req
   * @param res
   * @returns
   */
  async fetchTeamById(req: Request, res: Response): Promise<Response> {
    const teamId = parseInt(req.params.id);
    try {
      const team = await teamService.fetchTeamById(teamId);
      return res
        .status(200)
        .json({ message: "Team fetched successfully", team });
    } catch (error) {
      return errorResponse(error, res);
    }
  }
};

export default teamCtrl;
