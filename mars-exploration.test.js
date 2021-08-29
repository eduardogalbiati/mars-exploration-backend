const MarsExplorationClass = require("./mars-exploration");

describe("Mars exploration test", () => {
  it("should return hello world", () => {
    const MarsExploration = new MarsExplorationClass();
    expect(MarsExploration.dummy()).toBe("Hello World");
  });
});
