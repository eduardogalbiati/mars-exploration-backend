const fs = require("fs");
const { stdout } = require("process");
const { ProbeClass } = require("./mars-exploration");

// TODO: Create types validator, to avoid NaN errors
try {
  const data = fs.readFileSync("input.txt", "utf8");
  const lines = data.split("\n");

  let gridSize = [];
  let probes = [];
  let probeIndex = 0;

  // Process each line and create gridsize and probes
  lines.forEach((line, index) => {
    if (index === 0) {
      gridSize = [line.split(" ")[0], line.split(" ")[1]];
      return;
    }
    if (Number(index) % 2 !== 0) {
      const xAxis = Number(line.split(" ")[0]);
      const yAxis = Number(line.split(" ")[1]);
      probes[probeIndex] = {
        startPosition: [xAxis, yAxis],
        startDirection: line.split(" ")[2],
      };
    }
    if (Number(index) % 2 === 0) {
      probes[probeIndex] = {
        ...probes[probeIndex],
        commands: line.split(""),
      };
      probeIndex++;
    }
  });

  // Create probes and send commands
  let output = [];
  probes.forEach((probeCfg) => {
    try {
      const Probe = new ProbeClass({
        startPosition: probeCfg.startPosition,
        startDirection: probeCfg.startDirection,
        gridSize,
      });
      const result = Probe.sendCommands(probeCfg.commands);
      output.push(result);
    } catch (error) {
      output.push({
        position: ["Error:", "Unable to create probe,"],
        direction: error.message,
      });
    }
  });

  // Prints the output
  output.forEach((el) => {
    process.stdout.write(
      `${el.position[0]} ${el.position[1]} ${el.direction}\n`
    );
  });
} catch (err) {
  console.log(err);
  process.stdout.write(`Opsss! something went wrong (${err.message})`);
}
