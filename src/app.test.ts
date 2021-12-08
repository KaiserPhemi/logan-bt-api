// third-party libraries
import request from "supertest";

// app modules
import app from "./app";

// test suite
describe("Get /", () => {
  it("Should run", async () => {
    await request(app)
      .get("/")
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBeTruthy;
        expect(res.body.message).toEqual("Welcome to Logan Bug Tracker API");
      });
  });
});
describe("Get /api/v1", () => {
  it("Should run", async () => {
    await request(app)
      .get("/api/v1")
      .expect(200)
      .then((res) => {
        expect(res.body.message).toBeTruthy;
        expect(res.body.message).toEqual("Welcome to Logan Bug Tracker API");
      });
  });
});
