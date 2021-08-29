class ProbeClass {
  constructor(config) {}

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
