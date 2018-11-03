###Questions

1\. Run the commands `sort`, `wc` and `uniq` on the `commands.js` file. Explain how they work and what the output was.
>The `sort` sorts the file by line in alphabetical order in ascending fashion. The first few lines are lines indented the most then alphabetically. Next are lines indented one 'tab' less then alphabetically. This continues until the end of the document.<br>
>The `wc` command counts the number of lines, words and characters in the file. <br>
>The `uniq` removes repeated lines only when lines are adjacent. When I run it on `commands.js`, all lines are displayed. When I sort `commands.js`, lines like `break` and `done(data)` only show once.

2\. Using the pipe `(|)` connect at least two commands and run it on `commands.js`. Explain what the output was and why the specific data was outputted.
>I ran this with multiple command combinations. The most interesting results happened when I used `sort` first. Using `sort` first changed the numbers that `wc` presented. The number of characters changed by 1. The `uniq` command was discussed earlier. I also linked `sort` followed by piping `uniq` and then `wc` so that I typed `sort commands.js | uniq | wc` and the result showed dramatic changes in line count, word count and character count, but it didn't display the file data.

6\. Reverse String

```
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


console.log(reverseString("Oh goodie, goodie gumdrops"));
```