import { helloWorld } from "../src/index";

describe("Test Hello World", () => {
  it("should return hello world", () => {
    const result = helloWorld();
    expect(result).toBe("Hello World");
  });
});
