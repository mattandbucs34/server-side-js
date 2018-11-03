const fs = require('fs');

//write out data
function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {
  //parses user input to understand which command was typed
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];

  switch (command) {
    case "echo":
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
    case "head":
      commandLibrary.head(userInputArray.slice(1));
      break;
    case "tail":
      commandLibrary.tail(userInputArray.slice(1));
      break;
    default:
      let errString = "That command is not valid, try again";
      done(errString);
      break;
  }
}

const commandLibrary= {

  "echo": function(userInput) {
    done(userInput);
  },

  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
      done(data);
    });
  },

  "head": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
      let dataString = data.toString();
      let dataArray = dataString.split('\n', 7);
      let gumdrop = dataArray.join('\n');
      done(gumdrop);
    });
  },

  "tail": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
      let dataArray = [];
      let dataString = data.toString();
      let strArray = dataString.split('\n');
      let loopStart = strArray.length - 7;
      for(let i = loopStart; i < strArray.length; i++) {
        dataArray.push(strArray[i]);
      }
      let gumdrop = dataArray.join('\n');
      done(gumdrop);
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;