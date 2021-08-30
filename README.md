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

### Test Coverage
![Screenshot from 2021-08-29 21-16-00](https://user-images.githubusercontent.com/7586945/131270149-632b8099-7403-4742-8f7c-c403418f9d91.png)


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

## Project chronology
Here I am going to tell you about the sequence of features that was delivered and the way that I built it

IMPORTANT: All code was delivered through `Pull Requests`

TDD Workflow: I created 2 cycles of TDD.
  - `USE CASE TEST`
  - `FEATURE UNIT TEST`

  So I started the `USE CASE TEST` (RED -> GREEN -> REFACTOR) cycle and stopped at the refactor function. Through this REFACTOR phase I finished the `FEATURE UNIT TEST` (RED -> GREEN -> REFACTOR) workflow for each feature implemented. Only at the end of the features implementation I was able to finish the USE CASE TEST REFACTOR phase.
  In short: A bunch of cycles completed within the refactoring phase of the first cycle

### Cycles
  - First I created the initial project, with a feature file and a test file. I also took the opportunity to configure jest and with that the `npm run test` command was already working
  PR -> ["[CHORE] adds jest to project"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/1)


  - Then I Added the test execution to the CI workflow
  PR -> ["[CI] Github Action"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/2)


  - Based on the challenge I created the use case acceptance criteria, and wrote it as a test using jest. I Also implemented a Dummy function just to make the test pass (because I was going to refactor the code and add the logic later)
  PR-> ["[CI] Github Action"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/3).


  - The first feature that I added to the Probe class some properties to work with
  PR-> ["[FEATURE] Probe Properties"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/4).


  - So, I started to implement the probe features, first I started with the turn movement function, checking if the direction was updated after the command.
  You can check the commit history to see the TDD workflow, I always created the test first and after that created the implementation. Sometimes you will see that I did some refactors through the implementation, these refactors is the part of the TDD workflow (Red -> Green -> Refactor)
  PR-> ["[FEATURE] Probe movement"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/5). 


  - Now was the time for the probe flying function, this was done in the same way as the Movement function above. BUT.... I made a mistake, I wrote some validation logic (unable to fly out of the grid) into the feature and forgot to write a test for them.
  PR-> ["[FEATURE] Probe flying"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/6). 


  - After that, I just added the missing tests
  PR -> ["[TEST] flying out of the grid"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/7). 


  - To avoid future errors, I added the JEST threshold coverage limit. and of course with 100% coverage ;)
  PR -> ["[TEST] adds threshold to avoid missing tests"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/8).


  - The next PR is a validation fix. some rules were added to the probe creation, to show some friendly errors. Also done with TDD, but I didn't separate it into 2 commits :/
  PR -> ["[PATCH] Adds validation to probe creation and process commands"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/9).

  - Now was time to enable the first test written, the USE CASE test, and I also added the second probe test. BTW this PR was the most satisfactory :)
  PR -> ["[TEST]: adds use cases tests, it's working baby!"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/10).

  - The LAST PR, was the addition of the `index.js` to handle the `input/output` provided by the user. And also, some instructions into README.md on how to run the project (this PR was the first major change of the project, after that the project was able to use 1.0.0)
  PR -> ["[FEATURE]: BREAKING CHANGE: it adds the CLI user inteface"](https://github.com/eduardogalbiati/mars-exploration-backend/pull/11).

  That's It!, the rest of the commits was just to update this README.MD.

  Thanks! It was really cool to solve this challenge! ;)

