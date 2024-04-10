const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");
const connectDb = require("../db/db");


require("dotenv").config();

beforeAll(async () => {
  await connectDb();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /api/receitas", () => {
  it("should return all receitas", async () => {
    const res = await request(app).get("/api/receitas");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/receitas/:id", () => {
  it("should return a receita", async () => {
    const res = await request(app).get(
      "/api/receitas/660852ca345601cb6ffb7e47"
    );
    expect(res.statusCode).toBe(200);
  });
});
