// db config
import db from "../config/knex";

// Service concerning teams
const teamService = {
  /**
   * Fetchs all teams
   * @returns
   */
  async fetchAllTeams(): Promise<any[]> {
    try {
      const allTeams = await db("teams").select("*");
      return allTeams;
    } catch (error) {
      return error;
    }
  },

  /**
   * Adds a new team
   * @param name
   * @param createdBy
   * @returns
   */
  async addTeam(name: string, createdBy: number): Promise<any> {
    try {
      const newTeam = await db("teams")
        .insert({
          name,
          created_by: createdBy
        })
        .returning("*");
      return newTeam;
    } catch (error) {
      return error;
    }
  },

  /**
   * Fetchs a team by team Id
   * @param teamId
   * @returns
   */
  async fetchTeamById(teamId: number): Promise<any> {
    try {
      const team = await db("teams").select("*").where({ id: teamId });
      return team[0];
    } catch (error) {
      return error;
    }
  }
};

export default teamService;
