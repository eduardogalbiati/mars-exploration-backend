const { ProbeClass } = require("./mars-exploration");

describe("Mars exploration use case", () => {
  it("should return final position after send commands to first probe", () => {
    const probeConfig = {
      startPosition: [1, 2],
      startDirection: "N",
      gridSize: [5, 5],
    };
    const commands = ["L", "M", "L", "M", "L", "M", "L", "M", "M"];

    const Probe = new ProbeClass(probeConfig);

    const result = Probe.sendCommands(commands);

    expect(result).toEqual({
      position: [1, 3],
      direction: "N",
    });
  });
});
