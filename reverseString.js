var reverseString = (userInput) => {
  let revArray = [];
  strArray = userInput.split(" ");

  strArray.forEach((word => {
    charArray = word.split("");
    charArray.reverse();
    revWord = charArray.join("");
    revArray.push(revWord);
  }));
  revString = revArray.join(" ");
  return revString;
};

/* Suggested Solution

  function reverseString(inputString) {
    var sentenceWords = inputString.split(' ');
    var returnSentence = [];
    sentenceWords.forEach(word => returnSentence.push(word.split('').reverse().join('')));
    returnSentence = returnSentence.join(' ');
    return returnSentence;
  })

*/

console.log(reverseString("My name is Matt"));