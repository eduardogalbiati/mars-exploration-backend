const { ProbeClass } = require("./mars-exploration");

describe("Mars exploration use case", () => {
  xit("should return final position after send commands to first probe", () => {
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

describe("Mars exploration unit tests", () => {
  const probeConfig = {
    startPosition: [1, 2],
    startDirection: "N",
    gridSize: [5, 5],
  };

  it("should be constructed properly", () => {
    const Probe = new ProbeClass(probeConfig);
    expect(Probe).toEqual({
      position: probeConfig.startPosition,
      direction: probeConfig.startDirection,
      gridSize: probeConfig.gridSize,
      directions: ["N", "E", "S", "W"],
    });
  });

  describe("Probe Movement", () => {
    it("should turn to right", () => {
      const commands = ["R"];

      const Probe = new ProbeClass(probeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: probeConfig.startPosition,
        direction: "E",
      });
    });

    it("should turn to right if position equals last element of directions array", () => {
      const commands = ["R"];

      const customProbeConfig = {
        ...probeConfig,
        startDirection: "W",
      };
      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: probeConfig.startPosition,
        direction: "N",
      });
    });
  });
});
