const request = require("supertest");
const app = require("../app");
const { expect } = require("chai");
describe("GET /", () => {
    it("should return Hello, GitHub Actions!", async () => {
        const res = await request(app).get("/");
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("Hello, GitHub Actions!");
    });
});
const assert = require("assert");

describe("Sample Test", () => {
    it("adds numbers correctly", () => {
        const sum = 2 + 3;
        assert.strictEqual(sum, 5);
    });
});