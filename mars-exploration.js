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
      if (index == 0) {
        index = index + 4;
      }
      this.direction = this.directions[index - 1];
    }
  }

  flyFoward() {
    if (this.direction === "N") {
      if (this.position[1] + 1 <= this.gridSize[1]) {
        this.position[1]++;
      }
    }
    if (this.direction === "E") {
      if (this.position[0] + 1 <= this.gridSize[0]) {
        this.position[0]++;
      }
    }
    if (this.direction === "S") {
      if (this.position[1] - 1 >= 0) {
        this.position[1]--;
      }
    }
  }

  sendCommands(commands) {
    commands.forEach((command) => {
      if (command === "R" || command === "L") {
        this.setDirection(command);
      }
      if (command === "M") {
        this.flyFoward();
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
