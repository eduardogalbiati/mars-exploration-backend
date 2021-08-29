class ProbeClass {
  direction = "";
  position = [];
  gridSize = [];
  directions = ["N", "E", "S", "W"];

  constructor(config) {
    this.position = config.startPosition;
    this.direction = config.startDirection;
    this.gridSize = config.gridSize;
  }

  setDirection(side) {
    let index = this.directions.findIndex(
      (direction) => direction === this.direction
    );
    if (side === "R") {
      this.direction = this.directions[index + 1];
    }
  }

  sendCommands(commands) {
    commands.forEach((command) => {
      if (command === "R") {
        this.setDirection(command);
      }
    });
    return {
      position: this.position,
      direction: this.direction,
    };
  }
}

module.exports = {
  ProbeClass,
};
