// third-party libraries
import request from "supertest";

// app modules
import app from "../../../app";

// tests
describe("Get /api/v1/teams", () => {
  it("Should fetch all teams", async () => {
    await request(app)
      .get("/api/v1/teams")
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBeTruthy;
        expect(res.body.message).toEqual("All teams fetched");
      });
  });
});
