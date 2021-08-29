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

  sendCommands(commands) {
    if(commands[0] == 'R') {
        return {
            position: this.position,
            direction: 'E',
        }
    }
  }
}

module.exports = {
  ProbeClass,
};
