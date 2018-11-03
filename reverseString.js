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


console.log(reverseString("My name is Matt"));