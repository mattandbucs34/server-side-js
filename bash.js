const commands = require('./commands.js');

//prompt user for input
process.stdout.write('prompt > ');

//The stdin 'data' is invoked after user types a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  //evaluateCmd is a function which will be implemented in command.js
  commands.evaluateCmd(userInput);
});