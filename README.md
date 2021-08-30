# Mars exploration test

### Up and Running
```
npm i
npm start
```

### Running tests
```
npm run test
```

## About application

### Input
  The input is provided through `input.txt`

### Output
  The output is printed into STDOUT

### Errors
  - Invalid grid size `(x <= 0, y <= 0)`
    `Error: Unable to create probe, The grid size is invalid, cannot be negative`

  - Invalid probe start position `(x <= 0, y <= 0)`
    `Error: Unable to create probe, The probe is out of grid, start position cannot be negative`

  - Invalid probe direction, out of: `[N,E,S,W]`
    `Error: Unable to create probe, The probe direction "?" is invalid, available options are [N,E,S,W]`

## Probe specific behaviours 
  - If you send a command to the probe, and that command will try to move the probe out of the grid then this command will be discarded and the probe stills at the same position