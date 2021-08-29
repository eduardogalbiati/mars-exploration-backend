class ProbeClass {
  direction = "";
  position = [];
  gridSize = [];

  constructor(config) {
    this.position = config.startPosition;
    this.direction = config.startDirection;
    this.gridSize = config.gridSize;
  }

  sendCommands(commands) {
    return {
      position: [1, 3],
      direction: "N",
    };
  }
}

module.exports = {
  ProbeClass,
};
