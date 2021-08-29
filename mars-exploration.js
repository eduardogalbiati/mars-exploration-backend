class ProbeClass {
  direction = "";
  position = [];
  gridSize = [];
  directions = ["N", "E", "S", "W"];

  constructor(config) {
    const xStartPosition = config.startPosition[0];
    const yStartPosition = config.startPosition[1];

    if (config.gridSize[0] <= 0 || config.gridSize[1] <= 0) {
      throw new Error(`The grid size is invalid, cannot be negative`);
    }
    if (xStartPosition < 0 || yStartPosition < 0) {
      throw new Error(
        "The probe is out of grid, start position cannot be negative"
      );
    }
    if (xStartPosition > config.gridSize[0]) {
      throw new Error(
        `The probe is out of grid, invalid start position [${xStartPosition},${yStartPosition}]`
      );
    }
    if (yStartPosition > config.gridSize[1]) {
      throw new Error(
        `The probe is out of grid, invalid start position [${xStartPosition},${yStartPosition}]`
      );
    }
    if (!this.directions.includes(config.startDirection)) {
      throw new Error(
        `The probe direction "${
          config.startDirection
        }" is invalid, available options are [${this.directions.join(",")}]`
      );
    }

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
    switch (this.direction) {
      case "N":
        if (this.position[1] + 1 <= this.gridSize[1]) {
          this.position[1]++;
        }
        break;
      case "E":
        if (this.position[0] + 1 <= this.gridSize[0]) {
          this.position[0]++;
        }
        break;
      case "S":
        if (this.position[1] - 1 >= 0) {
          this.position[1]--;
        }
        break;
      case "W":
        if (this.position[0] - 1 >= 0) {
          this.position[0]--;
        }
        break;
    }
  }

  sendCommands(commands) {
    commands
      .map((element) => {
        if (!["L", "M", "R"].includes(element)) {
          throw new Error(
            `Unable to process commands: command ${element} is not valid, available options are [L, M, R]`
          );
        }
        return element;
      })
      .forEach((command) => {
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
