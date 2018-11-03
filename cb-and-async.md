1\. What is the difference between `readdirSync` and `readdir`?
>`readdirSync` is a synchronous function and `readdir` is asynchronous.

2\. What is the event loop and how does it handle asynchronous requests?
>The event loop is the cycle in which functions are called. It handles asynchronous requests by essentially placing the function that is performing the action into a holding phase until the function finishes processing. Once the function is finished, it gets placed back into the loop along with the rest of the performing tasks. The loop continues processing while waiting for the asynchronous request(s) to finish.

3\. Given the following code, specify whether the program is **asynchronous** and **non-blocking** or **synchronous** and **blocking** or **synchronous** and **non-blocking**.
>This code is **synchronous** because it performs tasks in order. The `toString()` method requires the `readFileSync` to process before it can operate. In addition, the `readFileSync` gives it away in this case that it is synchronous just on the name alone. 

4\. Given the following code, specify whether the program is **asynchronous** and **non-blocking** or **synchronous** and **blocking** or **synchronous** and **non-blocking**.
>This is **asynchronous** because there is a function call reads a file and a second function that logs `test` to the console. Because the higher-level function takes time, the log function returns its data before the return of the higher-level function.

5\. In what order will the `console.log` statements execute in the code below?
>`"C"` will be logged first followed by `"A"` and `"B"`.

6\. `setTimeout` is a JavaScript function which calls a function after a set amount of milliseconds. Given the following code, explain in what sequence the functions will run and why.
>Technically, `greeting()` will run first, but because it is operating a callback, a `timeout`, it waits to finish its operation. During the `timeout`, the function `hello()` runs and logs `"hello"`. After 100ms, the `greeting()` function logs `"friend"`. When everything is finished, the final output is `"hello friend"`.

7\. 
```javascript
function slowAdd(firstNum, callback) {
  var addIt = 6 + firstNum;
  console.log(addIt);
  callback(addIt);
}

function showResults(results) {
  console.log("These numbers were added together: " + results);
}

slowAdd(17, showResults);
```