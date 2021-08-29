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

    it("should turn to left", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "W",
      };

      const commands = ["L"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: customProbeConfig.startPosition,
        direction: "S",
      });
    });

    it("should turn to left if position equals first element of directions array", () => {
      const commands = ["L"];

      const customProbeConfig = {
        ...probeConfig,
        startDirection: "N",
      };
      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: probeConfig.startPosition,
        direction: "W",
      });
    });
  });

  describe("Probe Flying", () => {
    it("should fly to north if probe direction is north", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "N",
        startPosition: [0, 0],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [0, 1],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should NOT fly to north if probe direction is north and the probe is at the grid border", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "N",
        startPosition: [5, 5],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [5, 5],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should fly to east if probe direction is east", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "E",
        startPosition: [0, 0],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [1, 0],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should NOT fly to east if probe direction is east and the probe is at the grid border", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "E",
        startPosition: [5, 5],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [5, 5],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should fly to south if probe direction is south", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "S",
        startPosition: [1, 1],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [1, 0],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should NOT fly to south if probe direction is south and the probe is at the grid border", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "S",
        startPosition: [0, 0],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [0, 0],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should fly to west if probe direction is west", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "W",
        startPosition: [1, 1],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [0, 1],
        direction: customProbeConfig.startDirection,
      });
    });

    it("should NOT fly to west if probe direction is west and the probe is at the grid border", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "W",
        startPosition: [0, 0],
      };
      const commands = ["M"];

      const Probe = new ProbeClass(customProbeConfig);

      const result = Probe.sendCommands(commands);

      expect(result).toEqual({
        position: [0, 0],
        direction: customProbeConfig.startDirection,
      });
    });
  });
  describe("Probe Construction and Commands validation tests", () => {
    it("should throw an error if grid size has negative values", () => {
      const customProbeConfig = {
        ...probeConfig,
        gridSize: [-1, -2],
      };

      expect(() => {
        new ProbeClass(customProbeConfig);
      }).toThrow("The grid size is invalid, cannot be negative");
    });
    it("should throw an error if direction is invalid", () => {
      const customProbeConfig = {
        ...probeConfig,
        startDirection: "?",
      };

      expect(() => {
        new ProbeClass(customProbeConfig);
      }).toThrow(
        'The probe direction "?" is invalid, available options are [N,E,S,W]'
      );
    });

    it("should throw an error if startPosition-X is greater then grid size", () => {
      const customProbeConfig = {
        ...probeConfig,
        startPosition: [6, 2],
      };

      expect(() => {
        new ProbeClass(customProbeConfig);
      }).toThrow("The probe is out of grid, invalid start position [6,2]");
    });

    it("should throw an error if startPosition-X is less then 0", () => {
      const customProbeConfig = {
        ...probeConfig,
        startPosition: [-1, 5],
      };

      expect(() => {
        new ProbeClass(customProbeConfig);
      }).toThrow("The probe is out of grid, start position cannot be negative");
    });

    it("should throw an error if startPosition-Y is greater then grid size", () => {
      const customProbeConfig = {
        ...probeConfig,
        startPosition: [2, 6],
      };

      expect(() => {
        new ProbeClass(customProbeConfig);
      }).toThrow("The probe is out of grid, invalid start position [2,6]");
    });

    it("should throw an error if startPosition-Y is less then 0", () => {
      const customProbeConfig = {
        ...probeConfig,
        startPosition: [2, -1],
      };

      expect(() => {
        new ProbeClass(customProbeConfig);
      }).toThrow("The probe is out of grid, start position cannot be negative");
    });

    it("should throw an error if any command is invalid", () => {
      const commands = ["?"];

      const Probe = new ProbeClass(probeConfig);

      expect(() => {
        Probe.sendCommands(commands);
      }).toThrow(
        "Unable to process commands: command ? is not valid, available options are [L, M, R]"
      );
    });
  });
});
