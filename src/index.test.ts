// third-party libraries
import request from "supertest";

// app modules
import app from "./index";

// test suite
describe("App", () => {
  it("Should run", async () => {
    request(app).get();
  });
});
