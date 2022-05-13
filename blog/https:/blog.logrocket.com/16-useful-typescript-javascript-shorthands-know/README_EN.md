# **16 useful TypeScript and JavaScript shorthands to know**
May 11, 2022  7 min read
![](WARN_REPLACE_IMG_URL)
JavaScript and TypeScript share a number of useful shorthand alternatives for common code concepts. Shorthand code alternatives can help reduce lines of code, which is something we typically strive for.
In this article, we will review 16 common TypeScript and JavaScript shorthands. We will also explore examples of how to use these shorthands.
Read through these useful JavaScript and TypeScript shorthands or navigate to the one you’re looking for in the list below:
* [Ternary operator](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#ternary-operator)
* [Short-circuit evaluation](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#short-circuit-evaluation)
* [Nullish coalescing operator](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#nullish-coalescing-operator)
* [Template literals](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#template-literals)
* [Object property assignment shorthand](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#object-property-assignment-shorthand)
* [Optional chaining](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#optional-chaining)
* [Object destructuring](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#object-destructuring)
* [Spread operator](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#spread-operator)
* [Object loop shorthand](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#object-loop-shorthand)
* [Array.indexOf](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#array-indexof-shorthand-bitwise-operator)[ shorthand using the bitwise operator](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#array-indexof-shorthand-bitwise-operator)
* [Casting values to boolean with ](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#casting-values-boolean)[!!](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#casting-values-boolean)
* [Arrow/lambda function expression](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#arrow-lambda-function-expression)
* [Implicit return using arrow function expressions](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#implicit-return-arrow-function-expressions)
* [Double bitwise NOT operator](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#double-bitwise-not-operator)
* [Exponent power shorthand](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#exponent-power-shorthand)
* [TypeScript constructor shorthand](https://blog.logrocket.com/16-useful-typescript-javascript-shorthands-know/#typescript-constructor-shorthand)

## **JavaScript and TypeScript shorthands**
Using shorthand code is not always the right decision when [writing clean and scalable code](https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/). Concise code can sometimes be more confusing to read and update. It is important that your code is legible and conveys meaning and context to other developers.
Our decision to use shorthands must not be to the detriment of other desirable characteristics of code. Keep this in mind when using the following shorthands for [expressions and operators in JavaScript](https://blog.logrocket.com/a-comprehensive-guide-to-javascript-expressions/) and TypeScript.
All shorthands available in JavaScript are available in the same syntax in TypeScript. The only slight difference is in specifying the type in TypeScript. However, the TypeScript constructor shorthand is exclusive to TypeScript.

### **Ternary operator**
The ternary operator is one of the most popular shorthands in JavaScript and TypeScript. It replaces the traditional `if…else` statement. Its syntax is as follows:
`[condition] ? [true result] : [false result]`
The following example demonstrates a traditional `if…else` statement and its shorthand equivalent using the ternary operator:
`// Longhand`

`const mark = 80`

`if (mark >= 65) {`
`  return "Pass"`
`} else {`
`  return "Fail"`
`}`

`// Shorthand`
`const mark = 80`

`return mark >= 65 ? "Pass" : "Fail"`

### **Short-circuit evaluation**
Another way to replace an `if…else` statement is with short-circuit evaluation. This shorthand uses the logical OR operator `||` to assign a default value to a variable when the intended value is falsy.
The following example demonstrates how to use short-circuit evaluation:
`// Longhand`
`let str = ''`
`let finalStr`

`if (str !== null && str !== undefined && str != '') {`
`  finalStr = 'default string'`
`} else {`
`  finalStr = str`
`}`

`// Shorthand`
`let str = ''`
`let finaStr = str || 'default string' // 'default string`

### **Nullish coalescing operator**
The [nullish coalescing operator](https://blog.logrocket.com/optional-chaining-and-nullish-coalescing-in-javascript/) `??` is similar to short-circuit evaluation in that it is used to assign a default value to a variable. However, the nullish coalescing operator only uses the default value when the intended value is also nullish.
In other words, if the intended value is falsy but not nullish, it will not use the default value.
Here are two examples of the nullish coalescing operator:
`// Example 1`
`// Longhand`
`let str = ''`
`let finalStr`

`if (str !== null && str !== undefined) {`
`  finalStr = 'default string'`
`} else {`
`  finalStr = str`
`}`
`// Shorthand`
`let str = ''`
`let finaStr = str ?? 'default string' // ''`

`// Example 2`
`// Longhand`
`let num = null`
`let actualNum`

`if (num !== null && num !== undefined) {`
`  actualNum = num`
`} else {`
`  actualNum = 0`
`}`
`// Shorthand`
`let num = null`
`let actualNum = num ?? 0 // 0`

### **Template literals**
With [JavaScript’s powerful ES6 features](https://blog.logrocket.com/javascript-es6-5-new-abstractions-to-improve-your-code-54a369e82407/), we can use template literals instead of using `+` to concatenate multiple variables within a string. To use template literals, wrap your strings in ```` and variables in `${}` within those strings.
The example below demonstrates how to use template literals to perform string interpolation:
`const name = 'Iby'`
`const hobby = 'to read'`

`// Longhand`
`const fullStr = name + ' loves ' + hobby // 'Iby loves to read'`

`// Shorthand`
`const fullStr = `${name} loves ${hobby}``
You can also use template literals to build multiline strings without using `\n`. For example:
`// Shorthand`
`const name = 'Iby'`
`const hobby = 'to read'`
`const fullStr = `${name} loves ${hobby}.`
`She also loves to write!``

### **Object property assignment shorthand**
In JavaScript and TypeScript, you can assign a property to an object in shorthand by mentioning the variable in the object literal. To do this, the variable must be named with the intended key.
See an example of the object property assignment shorthand below:
`// Longhand`
`const obj = {`
`  x: 1,`
`  y: 2,`
`  z: 3`
`}`

`// Shorthand`
`const x = 8`
`const y = 10`
`const obj = { x, y }`

### **Optional chaining**
Dot notation allows us to access the keys or values of an object. With [optional chaining](https://blog.logrocket.com/optional-chaining-and-nullish-coalescing-in-javascript/), we can go a step further and read keys or values even when we are not sure whether they exist or are set. When the key does not exist, the value from optional chaining is `undefined`.
See an example of optional chaining in action below:
`const obj = {`
`  x: {`
`    y: 1,`
`    z: 2`
`  },`
`  others: [`
`    'test',`
`    'tested'`
`  ] `
`}`

`// Longhand`
`if (obj.hasProperty('others') && others.length >= 2) {`
`  console.log('2nd value in others: ', obj.others[1])`
`}`

`// Shorthand`
`console.log('2nd value in others: ', obj.others?.[1]) // 'tested'`
`console.log('3rd value in others: ', obj.others?.[2]) // undefined`

### **Object destructuring**
Besides the traditional dot notation, another way to read the values of an object is by destructuring the object’s values into their own variables.
The following example demonstrates how to read the values of an object using the traditional dot notation compared to the shorthand method using object destructuring.
`const obj = {`
`  x: {`
`    y: 1,`
`    z: 2`
`  },`
`  other: 'test string'`
`}`

`// Longhand`
`console.log('Value of z in x: ', obj.x.z)`
`console.log('Value of other: ', obj.other)`

`// Shorthand`
`const {x, other} = obj`
`const {z} = x`

`console.log('Value of z in x: ', z)`
`console.log('Value of other: ', other)`
You can also rename the variables you destructure from the object. Here’s an example:
`const obj = {x: 1, y: 2}`
`const {x: myVar} = object`

`console.log('My renamed variable: ', myVar) // My renamed variable: 1`

### **Spread operator**
The spread operator `…` is used to access the content of arrays and objects. You can use the spread operator to replace [array functions](https://blog.logrocket.com/javascript-array-methods/), like `concat`, and object functions, like `object.assign`.
Review the examples below to see how the spread operator can be used to replace longhand array and object functions.
`// Longhand`
`const arr = [1, 2, 3]`
`const biggerArr = [4,5,6].concat(arr)`

`const smallObj = {x: 1}`
`const otherObj = object.assign(smallObj, {y: 2})`

`// Shorthand`
`const arr = [1, 2, 3]`
`const biggerArr = [...arr, 4, 5, 6]`

`const smallObj = {x: 1}`
`const otherObj = {...smallObj, y: 2}`

### **Object loop shorthand**
The traditional JavaScript `for` loop syntax is as follows:
`for (let i = 0; i < x; i++) { … }`
We can use this loop syntax to iterate through arrays by referencing the array length for the iterator.
There are three `for` loop shorthands that offer different ways to iterate through an array object:
* `for…of` to access the array entries
* `for…in` to access the indexes of an array and the keys when used on an object literal
* `Array.forEach` to perform operations on the array elements and their indexes using a callback function
Please note that `Array.forEach` callbacks have three possible arguments, which are called in this order:
* The element of the array for the ongoing iteration
* The element’s index
* A full copy of the array
The examples below demonstrate these object loop shorthands in action:
`// Longhand`
`const arr = ['Yes', 'No', 'Maybe']`

`for (let i = 0; i < arr.length; i++) {`
`  console.log('Here is item: ', arr[i])`
`}`

`// Shorthand`
`for (let str of arr) {`
`  console.log('Here is item: ', str)`
`}`

`arr.forEach((str) => {`
`  console.log('Here is item: ', str)`
`})`

`for (let index in arr) {`
`  console.log(`Item at index ${index} is ${arr[index]}`)`
`}`

`// For object literals`
`const obj = {a: 1, b: 2, c: 3}`

`for (let key in obj) {`
`  console.log(`Value at key ${key} is ${obj[key]}`)`
`}`

### **`Array.indexOf`**** shorthand using the bitwise operator**
We can look up the existence of an item in an array using the `Array.indexOf` method. This method returns the index position of the item if it exists in the array and returns -1 if it does not.
In JavaScript, 0 is a falsy value while numbers less than or greater than 0 are considered truthy. Typically, this means we need to use an `if…else` statement to determine if the item exists using the returned index.
[Using the bitwise operator](https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/) `~` instead of an `if…else` statement allows us to get a truthy value for anything greater than or equal to 0.
The example below demonstrates the `Array.indexOf` shorthand using the bitwise operator instead of an `if…else` statement:
`const arr = [10, 12, 14, 16]`

`const realNum = 10`
`const fakeNum = 20`

`const realNumIndex = arr.indexOf(realNum)`
`const noneNumIndex = arr.indexOf(fakeNum)`

`// Longhand`
`if (realNumIndex > -1) {`
`  console.log(realNum, ' exists!')`
`} else if (realNumIndex === -1) {`
`  console.log(realNum, ' does not exist!')`
`}`

`if (noneNumIndex > -1) {`
`  console.log(fakeNum, ' exists!')`
`} else if (noneNumIndex === -1) {`
`  console.log(fakeNum, ' does not exist!')`
`}`

`// Shorthand`
`console.log(realNum + (~realNumIndex ? ' exists!' : ' does not exist!')`
`console.log(fakeNum + (~noneNumIndex ? ' exists!' : ' does not exist!')`

### **Casting values to boolean with ****`!!`**
In JavaScript, we can cast variables of any type to a boolean value using the `!![variable]` shorthand.
See an example of using the `!! [variable]` shorthand to cast values to boolean:
`// Longhand`
`const simpleInt = 3`
`const intAsBool = Boolean(simpleInt)`

`// Shorthand`
`const simpleInt = 3`
`const intAsBool = !!simpleInt`

### **Arrow/lambda function expression**
[Functions in JavaScript can be written using arrow function syntax](https://blog.logrocket.com/anomalies-in-javascript-arrow-functions/) instead of the traditional expression that explicitly uses the `function` keyword. Arrow functions are similar to [lambda functions in other languages](https://blog.logrocket.com/a-complete-guide-to-kotlin-lambda-expressions/).
Take a look at this example of writing a function in shorthand using an arrow function expression:
`// Longhand`
`function printStr(str) {`
`  console.log('This is a string: ', str)`
`}`
`printStr('Girl!')`

`// Shorthand`
`const printStr = (str) => {`
`  console.log('This is a string: ', str)`
`}`
`printStr('Girl!')`

`// Shorthand TypeScript (specifying variable type)`
`const printStr = (str: string) => {`
`  console.log('This is a string: ', str)`
`}`
`printStr('Girl!')`

### **Implicit return using arrow function expressions**
In JavaScript, we typically use the `return` keyword to return a value from a function. When we define our function using arrow function syntax, we can implicitly return a value by excluding braces `{}`.
For multiline statements, such as expressions, we can wrap our return expression in parentheses `()`.
The example below demonstrates the shorthand code for implicitly returning a value from a function using an arrow function expression:
`// Longhand`
`function capitalize(name) {`
`  return name.toUpperCase()`
`}`

`function add(numA, numB) {`
`  return numA + numB`
`}`

`// Shorthand`
`const capitalize = (name) => name.toUpperCase()`

`const add = (numA, numB) => (numA + numB)`

`// Shorthand TypeScript (specifying variable type)`
`const capitalize = (name: string) => name.toUpperCase()`

`const add = (numA: number, numB: number) => (numA + numB)`

### **Double bitwise NOT operator**
In JavaScript, we typically access mathematical functions and constants using the built-in `Math` object. However, some functions have useful shorthands that allow us to access the function without referencing the `Math` object.
For example, applying the bitwise NOT operator twice `~~` allows us to get the `Math.floor()` of a value.
Review the example below to see how to use the double bitwise NOT operator as a `Math.floor()` shorthand:
`// Longhand`
`const num = 4.5`
`const floorNum = Math.floor(num) // 4`

`// Shorthand`
`const num = 4.5`
`const floorNum = ~~num // 4`

### **Exponent power shorthand**
Another mathematical function with a useful shorthand is the `Math.pow()` function. The alternative to using the built-in `Math` object is the `**` shorthand.
The example below demonstrates this exponent power shorthand in action:
`// Longhand`
`const num = Math.pow(3, 4) // 81`

`// Shorthand`
`const num = 3 ** 4 // 81`

### **TypeScript constructor shorthand**
There is a shorthand for creating a class and assigning values to class properties via the [constructor in TypeScript](https://blog.logrocket.com/writing-constructor-typescript/). When using this method, TypeScript will automatically create and set the class properties.
This shorthand is exclusive to TypeScript alone and not available in JavaScript class definitions.
Take a look at the example below to see the TypeScript constructor shorthand in action:
`// Longhand`
`class Person {`
`  private name: string`
`  public age: int`
`  protected hobbies: string[]`

`  constructor(name: string, age: int, hobbies: string[]) {`
`    this.name = name`
`    this.age = age`
`    this.hobbies = hobbies`
`  }`
`}`

`// Shorthand`
`class Person {`
`  constructor(`
`    private name: string,`
`    public age: int,`
`    protected hobbies: string[]`
`  ) {}`
`}`

## **Conclusion**
These are just a few of the most commonly used JavaScript and TypeScript shorthands. Remember, using shorthand code is not always the best option; what is most important is writing clean and understandable code that other developers can read easily.
What are your favorite JavaScript or TypeScript shorthands? Share them with us in the comments!

## **[LogRocket](https://logrocket.com/signup/)****: Debug JavaScript errors more easily by understanding the context**
Debugging code is always a tedious task. But the more you understand your errors the easier it is to fix them.
[LogRocket](https://logrocket.com/signup/) allows you to understand these errors in new and unique ways. Our frontend monitoring solution tracks user engagement with your JavaScript frontends to give you the ability to find out exactly what the user did that led to an error.
![](WARN_REPLACE_IMG_URL)
LogRocket records console logs, page load times, stacktraces, slow network requests/responses with headers + bodies, browser metadata, and custom logs. Understanding the impact of your JavaScript code will never be easier!
[Try it for free](https://logrocket.com/signup/).
