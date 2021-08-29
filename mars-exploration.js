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
      if (index + 1 == this.directions.length) {
        index = index - 4;
      }
      this.direction = this.directions[index + 1];
    }
    if (side === "L") {
      this.direction = this.directions[index - 1];
    }
  }

  sendCommands(commands) {
    commands.forEach((command) => {
      if (command === "R" || command === "L") {
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
