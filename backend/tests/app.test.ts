import req from "supertest";
import { describe, test, expect } from "vitest";
import app from "../src/app.js";

describe("API tests", () => {
  describe("GET /", () => {
    test("returns default message JSON", async () => {
      const res = await req(app).get("/");

      expect(res.status).toEqual(200);
      expect(res.body).toEqual({ message: "Hello from secure-auth-bank ..." });
    });
  });
});