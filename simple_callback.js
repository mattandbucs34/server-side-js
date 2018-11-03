function slowAdd(firstNum, callback) {
  var addIt = 6 + firstNum;
  console.log(addIt);
  callback(addIt);
}

function showResults(results) {
  console.log("These numbers were added together: " + results);
}

slowAdd(17, showResults);